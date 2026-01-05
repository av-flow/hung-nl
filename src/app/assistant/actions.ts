"use server";

import { z } from "zod";
import { proofreadBlogPost } from "@/ai/flows/proofread-blog-post";

const ProofreadStateSchema = z.object({
  polishedDraft: z.string().optional(),
  error: z.string().optional(),
});

type ProofreadState = z.infer<typeof ProofreadStateSchema>;

const ProofreadFormSchema = z.object({
  draft: z.string().min(10, "Draft must be at least 10 characters long."),
  tone: z.string().min(3, "Tone must be at least 3 characters long."),
  keywords: z.string().min(3, "Keywords must be at least 3 characters long."),
});

export async function runProofreadBlogPost(
  prevState: ProofreadState,
  formData: FormData
): Promise<ProofreadState> {
  const validatedFields = ProofreadFormSchema.safeParse({
    draft: formData.get("draft"),
    tone: formData.get("tone"),
    keywords: formData.get("keywords"),
  });

  if (!validatedFields.success) {
    return {
      error: validatedFields.error.flatten().fieldErrors.draft?.[0] ||
             validatedFields.error.flatten().fieldErrors.tone?.[0] ||
             validatedFields.error.flatten().fieldErrors.keywords?.[0] ||
             "Invalid input.",
    };
  }

  try {
    const result = await proofreadBlogPost(validatedFields.data);
    if (result.polishedDraft) {
      return { polishedDraft: result.polishedDraft };
    } else {
      return { error: "Failed to proofread the blog post. Please try again." };
    }
  } catch (error) {
    console.error(error);
    return { error: "An unexpected error occurred. Please try again later." };
  }
}
