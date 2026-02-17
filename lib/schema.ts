import { z } from 'zod';

export const bulkInquirySchema = z.object({
  companyName: z.string().min(2),
  contactName: z.string().min(2),
  email: z.string().email(),
  country: z.string().min(2),
  interest: z.string().min(4),
  moq: z.string().min(1),
  message: z.string().min(10)
});
