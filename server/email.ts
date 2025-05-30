import nodemailer from 'nodemailer';
import { InsertContactSubmission } from '@shared/schema';

// Brevo SMTP-Einstellungen
const BREVO_HOST = 'smtp-relay.brevo.com';  // SMTP-Relay-Server für Brevo
const BREVO_PORT = 587;                    // TLS Port für die meisten SMTP-Server

/**
 * Konfiguriert den E-Mail-Transporter mit Brevo SMTP-Einstellungen
 */
function getTransporter() {
  // Debug-Informationen für die SMTP-Konfiguration ausgeben
  console.log("SMTP Konfiguration:", {
    host: BREVO_HOST,
    port: BREVO_PORT,
    user: process.env.BREVO_SMTP_USER ? process.env.BREVO_SMTP_USER.substring(0, 3) + "..." : "undefined",
    passLength: process.env.BREVO_SMTP_PASSWORD ? process.env.BREVO_SMTP_PASSWORD.length : 0
  });

  return nodemailer.createTransport({
    host: BREVO_HOST,
    port: BREVO_PORT,
    secure: false, // false für TLS (STARTTLS)
    requireTLS: true, // Erzwinge TLS-Nutzung
    auth: {
      user: process.env.BREVO_SMTP_USER || '',
      pass: process.env.BREVO_SMTP_PASSWORD || '',
    },
    tls: {
      // Akzeptiere selbstsignierte Zertifikate
      rejectUnauthorized: false
    },
    debug: true, // Debug-Modus aktivieren
  });
}

export interface EmailParams {
  to: string;
  from: string | { name: string; address: string };
  replyTo?: string; // Hinzugefügt: replyTo für Antwort-Adresse
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Sendet eine E-Mail über den Brevo SMTP-Server
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  // Überprüfen, ob Brevo-Zugangsdaten vorhanden sind
  if (!process.env.BREVO_SMTP_USER || !process.env.BREVO_SMTP_PASSWORD) {
    console.log('E-Mail konnte nicht gesendet werden: Brevo SMTP-Zugangsdaten fehlen');
    return false;
  }

  try {
    const transporter = getTransporter();

    // Optionen für das Senden der E-Mail
    const mailOptions: any = {
      to: params.to,
      subject: params.subject,
      text: params.text,
      html: params.html,
    };

    // Formatiere den Absender korrekt
    if (typeof params.from === 'string') {
      mailOptions.from = params.from;
    } else if (typeof params.from === 'object') {
      mailOptions.from = params.from;
    }
    
    // Füge replyTo hinzu, wenn angegeben
    if (params.replyTo) {
      mailOptions.replyTo = params.replyTo;
    }

    console.log('Sende E-Mail mit folgenden Optionen:', {
      from: mailOptions.from,
      to: mailOptions.to,
      subject: mailOptions.subject,
      replyTo: mailOptions.replyTo || 'nicht gesetzt',
    });

    // E-Mail senden
    const info = await transporter.sendMail(mailOptions);

    console.log('E-Mail erfolgreich gesendet:', info.messageId);
    return true;
  } catch (error) {
    console.error('Fehler beim Senden der E-Mail:', error);
    return false;
  }
}

/**
 * Bereitet eine Kontaktformular-Benachrichtigung vor und sendet sie
 */
export async function sendContactFormNotification(
  submission: InsertContactSubmission
): Promise<boolean> {
  // Wenn Brevo-Zugangsdaten fehlen, loggen wir nur und geben true zurück
  if (!process.env.BREVO_SMTP_USER || !process.env.BREVO_SMTP_PASSWORD) {
    console.log('Kontaktformular-Benachrichtigung kann nicht gesendet werden (Brevo-Zugangsdaten fehlen)');
    console.log('Kontaktdaten:', submission);
    return true;
  }

  try {
    // Verwende die verifizierte Absenderadresse für Brevo
    const senderEmail = 'contact@hotelstocken.com';
    const adminEmail = 'reservation@hotelstocken.com';
    const notificationSubject = `Neue Kontaktanfrage: ${submission.subject}`;
    
    // HTML-Inhalt für die E-Mail erstellen
    const htmlContent = `
      <h2>Neue Kontaktanfrage erhalten</h2>
      <p><strong>Von:</strong> ${submission.name} (${submission.email})</p>
      <p><strong>Betreff:</strong> ${submission.subject}</p>
      <p><strong>Nachricht:</strong></p>
      <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #8B5A2B; margin: 10px 0;">
        ${submission.message.replace(/\n/g, '<br>')}
      </div>
      <p style="color: #666; font-size: 12px; margin-top: 20px;">
        Diese E-Mail wurde automatisch vom Kontaktformular auf hotelstocken.com gesendet.
      </p>
    `;
    
    // Text-Inhalt für die E-Mail erstellen
    const textContent = `
      Neue Kontaktanfrage erhalten
      ---------------------------
      
      Von: ${submission.name} (${submission.email})
      Betreff: ${submission.subject}
      
      Nachricht:
      ${submission.message}
      
      ---------------------------
      Diese E-Mail wurde automatisch vom Kontaktformular auf hotelstocken.com gesendet.
    `;
    
    // E-Mail senden mit der verifizierten Absender-E-Mail
    return await sendEmail({
      to: adminEmail,
      from: {
        name: 'Hotel Stocken',
        address: senderEmail
      },
      replyTo: submission.email, // Dynamisches setzen der Antwort-Adresse
      subject: notificationSubject,
      text: textContent,
      html: htmlContent,
    });
  } catch (error) {
    console.error('Fehler beim Senden der Kontaktformular-Benachrichtigung:', error);
    return false;
  }
}