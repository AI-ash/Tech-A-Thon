'use server';
/**
 * @fileOverview Analyzes a new member application and recommends the most suitable project group.
 *
 * - analyzeApplicantAndRecommendProject - A function that handles the applicant analysis and project recommendation process.
 * - AnalyzeApplicantInput - The input type for the analyzeApplicantAndRecommendProject function.
 * - AnalyzeApplicantOutput - The return type for the analyzeApplicantAndRecommendProject function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const AnalyzeApplicantInputSchema = z.object({
  name: z.string().describe('The name of the applicant.'),
  course: z.string().describe('The course of study of the applicant.'),
  year: z.string().describe('The year of study of the applicant.'),
  email: z.string().email().describe('The email address of the applicant.'),
  skills: z.string().describe('A comma-separated list of the applicant\'s skills.'),
  interests: z.string().describe('A comma-separated list of the applicant\'s interests.'),
  statement: z
    .string()
    .describe('A short introductory statement from the applicant (optional).')
    .optional(),
});
export type AnalyzeApplicantInput = z.infer<typeof AnalyzeApplicantInputSchema>;

const AnalyzeApplicantOutputSchema = z.object({
  recommendedProjectGroup: z
    .string()
    .describe('The name of the project group that best fits the applicant.'),
  reasoning: z
    .string()
    .describe('The reasoning behind the project group recommendation.'),
});
export type AnalyzeApplicantOutput = z.infer<typeof AnalyzeApplicantOutputSchema>;

export async function analyzeApplicantAndRecommendProject(
  input: AnalyzeApplicantInput
): Promise<AnalyzeApplicantOutput> {
  return analyzeApplicantAndRecommendProjectFlow(input);
}

const prompt = ai.definePrompt({
  name: 'analyzeApplicantAndRecommendProjectPrompt',
  input: {schema: AnalyzeApplicantInputSchema},
  output: {schema: AnalyzeApplicantOutputSchema},
  prompt: `You are an expert at analyzing new member applications for Tech-A-Thon and recommending the most suitable project group for them.

  Consider the applicant's skills, interests, and introductory statement to determine which project group aligns best with their abilities and goals.

  Provide a clear and concise recommendation, along with a detailed explanation of your reasoning.

  Applicant Name: {{{name}}}
  Course of Study: {{{course}}}
  Year of Study: {{{year}}}
  Email: {{{email}}}
  Skills: {{{skills}}}
  Interests: {{{interests}}}
  Introductory Statement: {{{statement}}}

  Based on this information, which project group would be the best fit for the applicant, and why?
  Make sure your answer is in a valid JSON format according to this schema:
  {{{outputSchema}}}`,
});

const analyzeApplicantAndRecommendProjectFlow = ai.defineFlow(
  {
    name: 'analyzeApplicantAndRecommendProjectFlow',
    inputSchema: AnalyzeApplicantInputSchema,
    outputSchema: AnalyzeApplicantOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
