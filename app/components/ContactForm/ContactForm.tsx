'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { EnhancedButton } from '../ui/EnhancedButton';
import { MagneticButton } from '../ui/MagneticButton';
import { toast } from 'sonner';
import { 
  Send, 
  CheckCircle2, 
  Loader2, 
  User, 
  Mail, 
  MessageSquare,
  AlertCircle,
} from 'lucide-react';
import confetti from 'canvas-confetti';

// Form validation schema
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .string()
    .email('Please enter a valid email address'),
  subject: z
    .string()
    .min(5, 'Subject must be at least 5 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

interface ContactFormProps {
  onSuccess?: () => void;
}

export function ContactForm({ onSuccess }: ContactFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      message: '',
    },
  });

  const triggerConfetti = () => {
    const count = 200;
    const defaults = {
      origin: { y: 0.7 },
      zIndex: 9999,
    };

    function fire(particleRatio: number, opts: confetti.Options) {
      confetti({
        ...defaults,
        ...opts,
        particleCount: Math.floor(count * particleRatio),
      });
    }

    fire(0.25, {
      spread: 26,
      startVelocity: 55,
    });

    fire(0.2, {
      spread: 60,
    });

    fire(0.35, {
      spread: 100,
      decay: 0.91,
      scalar: 0.8,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 25,
      decay: 0.92,
      scalar: 1.2,
    });

    fire(0.1, {
      spread: 120,
      startVelocity: 45,
    });
  };

  const onSubmit = async (data: ContactFormValues) => {
    setIsSubmitting(true);

    try {
      // Simulate API call - replace with actual API endpoint
      await new Promise((resolve) => setTimeout(resolve, 2000));
      
      // For demo purposes, we'll just log the data
      console.log('Form submitted:', data);
      
      // Show success state
      setIsSuccess(true);
      triggerConfetti();
      
      toast.success('Message sent successfully!', {
        description: "Thanks for reaching out. I'll get back to you soon!",
        duration: 5000,
      });

      // Reset form after delay
      setTimeout(() => {
        form.reset();
        setIsSuccess(false);
        onSuccess?.();
      }, 3000);

    } catch {
      toast.error('Failed to send message', {
        description: 'Please try again or contact me directly via email.',
        duration: 5000,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const inputVariants = {
    focus: { scale: 1.02, transition: { duration: 0.2 } },
    blur: { scale: 1, transition: { duration: 0.2 } },
  };

  const formFields = [
    {
      name: 'name' as const,
      label: 'Name',
      placeholder: 'Your name',
      icon: User,
      type: 'input',
    },
    {
      name: 'email' as const,
      label: 'Email',
      placeholder: 'your.email@example.com',
      icon: Mail,
      type: 'input',
    },
    {
      name: 'subject' as const,
      label: 'Subject',
      placeholder: 'What is this about?',
      icon: MessageSquare,
      type: 'input',
    },
    {
      name: 'message' as const,
      label: 'Message',
      placeholder: 'Tell me about your project or just say hi...',
      icon: MessageSquare,
      type: 'textarea',
    },
  ];

  return (
    <div className="w-full max-w-lg mx-auto">
      <AnimatePresence mode="wait">
        {isSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="flex flex-col items-center justify-center py-12 text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ 
                type: 'spring', 
                stiffness: 200, 
                damping: 15,
                delay: 0.2 
              }}
              className="w-20 h-20 rounded-full bg-green-500/20 flex items-center justify-center mb-6"
            >
              <CheckCircle2 className="w-10 h-10 text-green-500" />
            </motion.div>
            <motion.h3
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl font-bold mb-2"
            >
              Message Sent!
            </motion.h3>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground"
            >
              Thanks for reaching out. I&apos;ll get back to you soon!
            </motion.p>
          </motion.div>
        ) : (
          <motion.div
            key="form"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {formFields.map((field, index) => (
                  <motion.div
                    key={field.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <FormField
                      control={form.control}
                      name={field.name}
                      render={({ field: formField, fieldState }) => (
                        <FormItem>
                          <FormLabel className="flex items-center gap-2">
                            <field.icon className="w-4 h-4 text-muted-foreground" />
                            {field.label}
                          </FormLabel>
                          <FormControl>
                            <motion.div
                              variants={inputVariants}
                              whileFocus="focus"
                              animate="blur"
                            >
                              {field.type === 'textarea' ? (
                                <Textarea
                                  placeholder={field.placeholder}
                                  className={`min-h-[120px] resize-none transition-all duration-200 ${
                                    fieldState.error 
                                      ? 'border-red-500 focus:ring-red-500' 
                                      : 'focus:ring-primary'
                                  }`}
                                  {...formField}
                                />
                              ) : (
                                <Input
                                  placeholder={field.placeholder}
                                  className={`transition-all duration-200 ${
                                    fieldState.error 
                                      ? 'border-red-500 focus:ring-red-500' 
                                      : 'focus:ring-primary'
                                  }`}
                                  {...formField}
                                />
                              )}
                            </motion.div>
                          </FormControl>
                          <AnimatePresence>
                            {fieldState.error && (
                              <motion.div
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -10 }}
                              >
                                <FormMessage className="flex items-center gap-1 text-red-500">
                                  <AlertCircle className="w-3 h-3" />
                                  {fieldState.error.message}
                                </FormMessage>
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </FormItem>
                      )}
                    />
                  </motion.div>
                ))}

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="pt-4"
                >
                  <MagneticButton strength={0.15}>
                    <EnhancedButton
                      type="submit"
                      disabled={isSubmitting}
                      withShine
                      withGlow
                      size="lg"
                      className="w-full"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Send Message
                        </>
                      )}
                    </EnhancedButton>
                  </MagneticButton>
                </motion.div>
              </form>
            </Form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default ContactForm;
