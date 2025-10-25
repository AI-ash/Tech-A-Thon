import { z } from "zod";

export const AnalyzeApplicantInputSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters."),
  course: z.string().min(2, "Course is required."),
  year: z.string().min(1, "Year is required."),
  email: z.string().email("Invalid email address."),
  skills: z.string().min(3, "Please list at least one skill."),
  interests: z.string().min(3, "Please list at least one interest."),
  statement: z.string().optional(),
});

export type AnalyzeApplicantInput = z.infer<typeof AnalyzeApplicantInputSchema>;
