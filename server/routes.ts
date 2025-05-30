import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSubmissionSchema, insertBookingCheckSchema, insertNewsletterSubscriberSchema } from "@shared/schema";
import { ZodError } from "zod";
import { sendContactFormNotification } from "./email";

export async function registerRoutes(app: Express): Promise<Server> {
  // Handle contact form submissions
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const data = insertContactSubmissionSchema.parse(req.body);
      
      // Store contact submission
      const submission = await storage.createContactSubmission(data);
      
      // Versuche eine E-Mail-Benachrichtigung zu senden (aber Formular funktioniert auch ohne)
      try {
        const emailResult = await sendContactFormNotification(data);
        if (emailResult) {
          console.log("✓ E-Mail-Benachrichtigung erfolgreich gesendet");
        } else {
          console.log("⚠ E-Mail-Benachrichtigung nicht gesendet - Formular gespeichert");
        }
      } catch (emailError: any) {
        console.log("⚠ E-Mail-Fehler (Formular trotzdem gespeichert):", emailError?.message || emailError);
      }
      
      // Ausführliche Protokollierung der Kontaktformular-Daten
      console.log(`
      ===== NEUE KONTAKTANFRAGE =====
      Datum: ${new Date().toLocaleString()}
      Von: ${data.name} (${data.email})
      Betreff: ${data.subject}
      
      Nachricht:
      ${data.message}
      ===============================
      `);
      
      // Return success with user-friendly message
      res.json({ 
        success: true, 
        message: "Vielen Dank für Ihre Nachricht! Wir werden uns schnellstmöglich bei Ihnen melden.", 
        submissionId: submission.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Ungültige Formulardaten", 
          errors: error.errors 
        });
      } else {
        console.error("Error submitting contact form:", error);
        res.status(500).json({ 
          success: false, 
          message: "Beim Absenden des Formulars ist ein Fehler aufgetreten" 
        });
      }
    }
  });

  // Handle booking availability checks
  app.post("/api/booking/check", async (req, res) => {
    try {
      // Validate request body
      const data = insertBookingCheckSchema.parse(req.body);
      
      // Store booking check
      const bookingCheck = await storage.createBookingCheck(data);
      
      // In a real application, this would check actual availability
      // For now, we'll always return available
      
      // Return success
      res.json({ 
        success: true, 
        message: "Room is available for the selected dates", 
        bookingCheckId: bookingCheck.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid booking data", 
          errors: error.errors 
        });
      } else {
        console.error("Error checking booking availability:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while checking availability" 
        });
      }
    }
  });

  // Handle newsletter subscriptions
  app.post("/api/newsletter/subscribe", async (req, res) => {
    try {
      // Validate request body
      const data = insertNewsletterSubscriberSchema.parse(req.body);
      
      // Check if email already exists
      const existingSubscriber = await storage.getNewsletterSubscriberByEmail(data.email);
      
      if (existingSubscriber) {
        return res.status(400).json({ 
          success: false, 
          message: "This email is already subscribed to our newsletter" 
        });
      }
      
      // Store newsletter subscription
      const subscriber = await storage.createNewsletterSubscriber(data);
      
      // Return success
      res.json({ 
        success: true, 
        message: "Successfully subscribed to the newsletter", 
        subscriberId: subscriber.id 
      });
    } catch (error) {
      if (error instanceof ZodError) {
        res.status(400).json({ 
          success: false, 
          message: "Invalid email address", 
          errors: error.errors 
        });
      } else {
        console.error("Error subscribing to newsletter:", error);
        res.status(500).json({ 
          success: false, 
          message: "An error occurred while subscribing to the newsletter" 
        });
      }
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
