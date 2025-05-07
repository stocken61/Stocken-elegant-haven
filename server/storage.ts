import { 
  users, 
  type User, 
  type InsertUser,
  contactSubmissions,
  type ContactSubmission,
  type InsertContactSubmission,
  bookingChecks,
  type BookingCheck,
  type InsertBookingCheck,
  newsletterSubscribers,
  type NewsletterSubscriber,
  type InsertNewsletterSubscriber
} from "@shared/schema";

// Storage interface with all required methods
export interface IStorage {
  // User methods
  getUser(id: number): Promise<User | undefined>;
  getUserByUsername(username: string): Promise<User | undefined>;
  createUser(user: InsertUser): Promise<User>;
  
  // Contact submission methods
  getContactSubmission(id: number): Promise<ContactSubmission | undefined>;
  createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission>;
  
  // Booking check methods
  getBookingCheck(id: number): Promise<BookingCheck | undefined>;
  createBookingCheck(data: InsertBookingCheck): Promise<BookingCheck>;
  
  // Newsletter subscriber methods
  getNewsletterSubscriber(id: number): Promise<NewsletterSubscriber | undefined>;
  getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined>;
  createNewsletterSubscriber(data: InsertNewsletterSubscriber): Promise<NewsletterSubscriber>;
}

export class MemStorage implements IStorage {
  private users: Map<number, User>;
  private contactSubmissions: Map<number, ContactSubmission>;
  private bookingChecks: Map<number, BookingCheck>;
  private newsletterSubscribers: Map<number, NewsletterSubscriber>;
  private userCurrentId: number;
  private contactSubmissionCurrentId: number;
  private bookingCheckCurrentId: number;
  private newsletterSubscriberCurrentId: number;

  constructor() {
    this.users = new Map();
    this.contactSubmissions = new Map();
    this.bookingChecks = new Map();
    this.newsletterSubscribers = new Map();
    this.userCurrentId = 1;
    this.contactSubmissionCurrentId = 1;
    this.bookingCheckCurrentId = 1;
    this.newsletterSubscriberCurrentId = 1;
  }

  // User methods
  async getUser(id: number): Promise<User | undefined> {
    return this.users.get(id);
  }

  async getUserByUsername(username: string): Promise<User | undefined> {
    return Array.from(this.users.values()).find(
      (user) => user.username === username
    );
  }

  async createUser(insertUser: InsertUser): Promise<User> {
    const id = this.userCurrentId++;
    const user: User = { ...insertUser, id };
    this.users.set(id, user);
    return user;
  }
  
  // Contact submission methods
  async getContactSubmission(id: number): Promise<ContactSubmission | undefined> {
    return this.contactSubmissions.get(id);
  }
  
  async createContactSubmission(data: InsertContactSubmission): Promise<ContactSubmission> {
    const id = this.contactSubmissionCurrentId++;
    const now = new Date();
    const submission: ContactSubmission = { 
      ...data, 
      id, 
      createdAt: now 
    };
    this.contactSubmissions.set(id, submission);
    return submission;
  }
  
  // Booking check methods
  async getBookingCheck(id: number): Promise<BookingCheck | undefined> {
    return this.bookingChecks.get(id);
  }
  
  async createBookingCheck(data: InsertBookingCheck): Promise<BookingCheck> {
    const id = this.bookingCheckCurrentId++;
    const now = new Date();
    const bookingCheck: BookingCheck = { 
      ...data, 
      id, 
      createdAt: now 
    };
    this.bookingChecks.set(id, bookingCheck);
    return bookingCheck;
  }
  
  // Newsletter subscriber methods
  async getNewsletterSubscriber(id: number): Promise<NewsletterSubscriber | undefined> {
    return this.newsletterSubscribers.get(id);
  }
  
  async getNewsletterSubscriberByEmail(email: string): Promise<NewsletterSubscriber | undefined> {
    return Array.from(this.newsletterSubscribers.values()).find(
      (subscriber) => subscriber.email === email
    );
  }
  
  async createNewsletterSubscriber(data: InsertNewsletterSubscriber): Promise<NewsletterSubscriber> {
    const id = this.newsletterSubscriberCurrentId++;
    const now = new Date();
    const subscriber: NewsletterSubscriber = { 
      ...data, 
      id, 
      subscriptionDate: now 
    };
    this.newsletterSubscribers.set(id, subscriber);
    return subscriber;
  }
}

export const storage = new MemStorage();
