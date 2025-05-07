import React from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Button } from '@/components/ui/button';
import { 
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { useToast } from '@/hooks/use-toast';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { apiRequest } from '@/lib/queryClient';

// Get today and tomorrow's date in YYYY-MM-DD format for date inputs
const today = new Date();
const tomorrow = new Date(today);
tomorrow.setDate(tomorrow.getDate() + 1);

const formatDate = (date: Date) => {
  return date.toISOString().split('T')[0];
};

// Booking form schema
const bookingFormSchema = z.object({
  arrival: z.string().min(1, { message: 'Bitte wählen Sie ein Anreisedatum' }),
  departure: z.string().min(1, { message: 'Bitte wählen Sie ein Abreisedatum' }),
  guests: z.string().min(1, { message: 'Bitte wählen Sie die Anzahl der Gäste' }),
})
.refine((data) => {
  const arrival = new Date(data.arrival);
  const departure = new Date(data.departure);
  return departure > arrival;
}, {
  message: "Abreisedatum muss nach Anreisedatum liegen",
  path: ["departure"],
});

type BookingFormValues = z.infer<typeof bookingFormSchema>;

interface BookingFormProps {
  roomId?: string;
  roomPrice?: number;
}

const BookingForm: React.FC<BookingFormProps> = ({ roomId, roomPrice = 0 }) => {
  const { toast } = useToast();

  // Default form values
  const defaultValues: BookingFormValues = {
    arrival: formatDate(today),
    departure: formatDate(tomorrow),
    guests: '2',
  };

  // Form definition
  const form = useForm<BookingFormValues>({
    resolver: zodResolver(bookingFormSchema),
    defaultValues,
  });

  // Form submission handler
  const onSubmit = async (data: BookingFormValues) => {
    try {
      const bookingData = {
        ...data,
        roomId,
      };
      
      await apiRequest('POST', '/api/booking/check', bookingData);
      
      toast({
        title: 'Verfügbarkeit bestätigt',
        description: 'Das Zimmer ist im gewählten Zeitraum verfügbar. Sie werden zur Buchungsseite weitergeleitet.',
        variant: 'default',
      });
      
      // In a real app, you would redirect to a booking page or open a booking modal
      // For now, we'll just reset the form
      form.reset(defaultValues);
    } catch (error) {
      toast({
        title: 'Fehler',
        description: 'Das Zimmer ist im gewählten Zeitraum leider nicht verfügbar. Bitte wählen Sie einen anderen Zeitraum.',
        variant: 'destructive',
      });
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="arrival"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">Anreise</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  min={formatDate(today)}
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
          name="departure"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">Abreise</FormLabel>
              <FormControl>
                <Input
                  type="date"
                  min={formatDate(tomorrow)}
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
          name="guests"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="block text-neutral-dark mb-1">Personen</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger className="w-full p-3 border border-neutral rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent">
                    <SelectValue placeholder="Wählen Sie die Anzahl der Personen" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  <SelectItem value="1">1 Person</SelectItem>
                  <SelectItem value="2">2 Personen</SelectItem>
                  <SelectItem value="3">3 Personen</SelectItem>
                  <SelectItem value="4">4 Personen</SelectItem>
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        
        <Button
          type="submit"
          className="w-full bg-primary hover:bg-primary-light text-white py-3 px-6 rounded-md transition duration-300 flex justify-center items-center"
          disabled={form.formState.isSubmitting}
        >
          <span>{form.formState.isSubmitting ? 'Wird geprüft...' : 'Verfügbarkeit prüfen'}</span>
          <FontAwesomeIcon icon="search" className="ml-2" />
        </Button>
        
        <div className="text-center mt-4">
          <p className="text-sm text-neutral-dark">
            Oder rufen Sie uns direkt an:
          </p>
          <a href="tel:+41441234567" className="text-primary font-medium hover:underline">
            +41 44 123 45 67
          </a>
        </div>
        
        {roomPrice > 0 && (
          <div className="mt-8 pt-8 border-t border-neutral">
            <h4 className="text-xl font-semibold mb-4">Preisdetails</h4>
            <div className="space-y-2 mb-6">
              <div className="flex justify-between">
                <span>Zimmerpreis pro Nacht</span>
                <span className="font-medium">{roomPrice} CHF</span>
              </div>
              <div className="flex justify-between">
                <span>Frühstück inkl.</span>
                <span className="font-medium">Ja</span>
              </div>
              <div className="flex justify-between">
                <span>Kurtaxe pro Person/Nacht</span>
                <span className="font-medium">3 CHF</span>
              </div>
            </div>
            
            <div className="flex justify-between font-bold text-lg">
              <span>Preis ab</span>
              <span className="text-primary-dark">{roomPrice} CHF</span>
            </div>
            <p className="text-sm text-neutral-dark mt-1">
              *Preis pro Nacht inkl. Frühstück, exkl. Kurtaxe
            </p>
          </div>
        )}
      </form>
    </Form>
  );
};

export default BookingForm;
