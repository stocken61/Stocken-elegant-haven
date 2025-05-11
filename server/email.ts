import { MailService } from '@sendgrid/mail';
import { InsertContactSubmission } from '@shared/schema';

// Prüfen, ob der API-Key gesetzt ist
if (!process.env.SENDGRID_API_KEY) {
  console.error("SENDGRID_API_KEY environment variable must be set");
}

// SendGrid Mail-Service initialisieren
const mailService = new MailService();
if (process.env.SENDGRID_API_KEY) {
  mailService.setApiKey(process.env.SENDGRID_API_KEY);
}

export interface EmailParams {
  to: string;
  from: string;
  subject: string;
  text?: string;
  html?: string;
}

/**
 * Sends an email notification using SendGrid
 */
export async function sendEmail(params: EmailParams): Promise<boolean> {
  try {
    await mailService.send({
      to: params.to,
      from: params.from,
      subject: params.subject,
      text: params.text,
      html: params.html,
    });
    console.log('Email sent successfully');
    return true;
  } catch (error) {
    console.error('SendGrid email error:', error);
    return false;
  }
}

/**
 * Prepares and sends a contact form submission notification email
 */
export async function sendContactFormNotification(
  submission: InsertContactSubmission
): Promise<boolean> {
  const adminEmail = 'reservation@hotelstocken.com';
  const notificationSubject = `Neue Kontaktanfrage: ${submission.subject}`;
  
  // Create HTML content for email
  const htmlContent = `
    <h2>Neue Kontaktanfrage erhalten</h2>
    <p><strong>Von:</strong> ${submission.name} (${submission.email})</p>
    <p><strong>Betreff:</strong> ${submission.subject}</p>
    <p><strong>Nachricht:</strong></p>
    <div style="background-color: #f9f9f9; padding: 15px; border-left: 4px solid #0d6efd; margin: 10px 0;">
      ${submission.message.replace(/\n/g, '<br>')}
    </div>
    <p style="color: #666; font-size: 12px; margin-top: 20px;">
      Diese E-Mail wurde automatisch vom Kontaktformular auf hotelstocken.com gesendet.
    </p>
  `;
  
  // Create plain text content for email
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
  
  // Send email
  return await sendEmail({
    to: adminEmail,
    from: 'noreply@hotelstocken.com', // Absender-E-Mail
    subject: notificationSubject,
    text: textContent,
    html: htmlContent,
  });
}