"use server";

import { analyzeApplicantAndRecommendProject, AnalyzeApplicantOutput } from '@/ai/flows/analyze-applicant-and-recommend-project';
import type { AnalyzeApplicantInput } from "@/lib/schemas";

export async function handleRegistration(
  data: AnalyzeApplicantInput
): Promise<{ success: boolean; data: AnalyzeApplicantOutput | null; error: string | null }> {
  try {
    // In a real application, you would save the new applicant to a database like Firestore.
    console.log("New applicant registered:", data.name);

    // Call the GenAI flow to get a project recommendation.
    const recommendation = await analyzeApplicantAndRecommendProject(data);
    
    // In a real application, you would send a welcome email with the recommendation.
    console.log("AI Recommendation:", recommendation);

    return { success: true, data: recommendation, error: null };
  } catch (e) {
    console.error("Registration failed:", e);
    const error = e instanceof Error ? e.message : "An unknown error occurred.";
    return { success: false, data: null, error: `Failed to process application: ${error}` };
  }
}
