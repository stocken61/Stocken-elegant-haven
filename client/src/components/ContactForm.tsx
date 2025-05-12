import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { apiRequest } from '@/lib/queryClient';
import { Alert, AlertDescription, AlertTitle } from '@/components/ui/alert';
import { CheckCircle2 } from 'lucide-react';

// Contact form schema
const contactFormSchema = z.object({
  name: z.string().min(2, { message: 'Name muss mindestens 2 Zeichen lang sein' }),
  email: z.string().email({ message: 'Bitte geben Sie eine gültige E-Mail-Adresse ein' }),
  subject: z.string(),
  message: z.string().min(10, { message: 'Nachricht muss mindestens 10 Zeichen lang sein' }),
  privacy: z.boolean().refine(val => val === true, { 
    message: 'Sie müssen die Datenschutzerklärung akzeptieren' 
  }),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

const ContactForm: React.FC = () => {
  const { toast } = useToast();
  const [formSubmitted, setFormSubmitted] = useState(false);
  
  // Default form values
  const defaultValues: Partial<ContactFormValues> = {
    subject: 'booking',
    privacy: false,
  };
  
  // Form definition
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues,
  });
  
  // Form submission handler
  const onSubmit = async (data: ContactFormValues) => {
    try {
      await apiRequest('POST', '/api/contact', data);
      
      toast({
        title: 'Nachricht gesendet',
        description: 'Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.',
        variant: 'default',
      });
      
      // Formular komplett zurücksetzen (leeren)
      form.reset({
        name: '',
        email: '',
        subject: defaultValues.subject,
        message: '',
        privacy: false,
      });
      
      // Erfolgsanzeige einblenden
      setFormSubmitted(true);
      
      // Nach 5 Sekunden die Erfolgsmeldung ausblenden
      setTimeout(() => {
        setFormSubmitted(false);
      }, 5000);
    } catch (error) {
      toast({
        title: 'Fehler',
        description: 'Beim Senden Ihrer Nachricht ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.',
        variant: 'destructive',
      });
    }
  };
  
  return (
    <Form {...form}>
      {formSubmitted && (
        <Alert className="mb-6 bg-green-50 border border-green-100 text-green-800">
          <CheckCircle2 className="h-5 w-5 text-green-600" />
          <AlertTitle className="text-green-800 font-medium">Nachricht erfolgreich gesendet!</AlertTitle>
          <AlertDescription className="text-green-700">
            Vielen Dank für Ihre Nachricht. Wir werden uns so schnell wie möglich bei Ihnen melden.
          </AlertDescription>
        </Alert>
      )}
      
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">Name*</FormLabel>
              <FormControl>
                <Input
                  placeholder="Ihr Name"
                  className="w-full p-3 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">E-Mail*</FormLabel>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  className="w-full p-3 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="subject"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">Betreff</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-3 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <SelectValue placeholder="Wählen Sie einen Betreff" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="booking">Buchungsanfrage</SelectItem>
                  <SelectItem value="info">Allgemeine Informationen</SelectItem>
                  <SelectItem value="restaurant">Restaurant Reservierung</SelectItem>
                  <SelectItem value="other">Sonstiges</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">Nachricht*</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Ihre Nachricht an uns"
                  rows={5}
                  className="w-full p-3 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <FormField
          control={form.control}
          name="privacy"
          render={({ field }) => (
            <FormItem className="flex items-start space-x-2">
              <FormControl>
                <Checkbox
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className="mt-1"
                />
              </FormControl>
              <div className="space-y-1 leading-none">
                <FormLabel className="text-sm text-neutral-dark">
                  Ich habe die <a href="/legal/privacy" className="text-primary hover:underline">Datenschutzerklärung</a> gelesen und akzeptiere diese.*
                </FormLabel>
                <FormMessage />
              </div>
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition duration-300"
          disabled={form.formState.isSubmitting}
        >
          {form.formState.isSubmitting ? 'Wird gesendet...' : 'Nachricht senden'}
        </Button>
      </form>
    </Form>
  );
};

export default ContactForm;
