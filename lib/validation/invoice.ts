import { statusEnum } from '@/db/schema';
import { z } from 'zod';

export const invoiceSchema = z.object({
  name: z
    .string()
    .min(1, {
      message: 'Name must be at least 1 character long',
    })
    .max(25, {
      message: 'Name must be at most 25 characters long',
    })
    .regex(/^[a-zA-Z\s]*$/, {
      message: 'Name must only contain letters and spaces',
    }),
  email: z
    .string()
    .email()
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: 'Email must be a valid email address',
    }),
  value: z
    .string()
    .min(0)
    .regex(/^\d+(\.\d{1,2})?$/, {
      message: 'Value must be a valid currency amount',
    }),
  description: z
    .string()
    .min(1, {
      message: 'Description must be at least 1 character long',
    })
    .max(100, {
      message: 'Description must be at most 100 characters long',
    })
    .regex(/^[a-zA-Z0-9\s]*$/, {
      message: 'Description must only contain letters, numbers, and spaces',
    }),
  status: z.enum(statusEnum.enumValues),
});

export type Invoice = z.infer<typeof invoiceSchema>;
