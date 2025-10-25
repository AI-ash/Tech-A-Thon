"use client";

import { useTransition, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleRegistration } from "@/app/join-us/actions";
import { AnalyzeApplicantInput, AnalyzeApplicantInputSchema } from "@/lib/schemas";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Loader2, Send } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import type { AnalyzeApplicantOutput } from "@/ai/flows/analyze-applicant-and-recommend-project";
import { useToast } from "@/hooks/use-toast";

export function JoinUsForm() {
  const [isPending, startTransition] = useTransition();
  const [result, setResult] = useState<AnalyzeApplicantOutput | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const { toast } = useToast();

  const form = useForm<AnalyzeApplicantInput>({
    resolver: zodResolver(AnalyzeApplicantInputSchema),
    defaultValues: {
      name: "",
      course: "",
      year: "",
      email: "",
      skills: "",
      interests: "",
      statement: "",
    },
  });

  function onSubmit(values: AnalyzeApplicantInput) {
    startTransition(async () => {
      const response = await handleRegistration(values);
      if (response.success && response.data) {
        setResult(response.data);
        setIsDialogOpen(true);
        form.reset();
      } else {
        toast({
            variant: "destructive",
            title: "Submission Failed",
            description: response.error || "An unexpected error occurred.",
        });
      }
    });
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="John Doe" {...field} />
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
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="john.doe@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <FormField
              control={form.control}
              name="course"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Course</FormLabel>
                  <FormControl>
                    <Input placeholder="B.Sc (Hons) Computer Science" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Year</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g., 2nd Year" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormField
            control={form.control}
            name="skills"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Skills</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., React, Python, UI/UX" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="interests"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Area of Interest</FormLabel>
                <FormControl>
                  <Input placeholder="e.g., Web Development, AI/ML" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="statement"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Introductory Statement (Optional)</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us a little about yourself and why you want to join."
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              <Send className="mr-2 h-4 w-4" />
            )}
            Submit Application
          </Button>
        </form>
      </Form>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="font-headline">Application Received!</DialogTitle>
            <DialogDescription className="font-mono">
              Welcome to the community! Based on your profile, here is our initial project group recommendation for you.
            </DialogDescription>
          </DialogHeader>
          {result && (
            <div className="space-y-4 pt-4">
                <div>
                    <h3 className="font-bold text-lg">Recommended Group: <span className="text-primary">{result.recommendedProjectGroup}</span></h3>
                </div>
                <div>
                    <h4 className="font-semibold">Reasoning:</h4>
                    <p className="text-sm text-muted-foreground font-mono mt-1">{result.reasoning}</p>
                </div>
                <p className="text-xs text-muted-foreground font-mono pt-2">Note: You will receive a confirmation email with further details soon.</p>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
}
