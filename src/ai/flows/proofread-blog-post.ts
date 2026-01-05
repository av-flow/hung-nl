'use server';
/**
 * @fileOverview An AI flow for proofreading and enhancing blog posts.
 *
 * - proofreadBlogPost - A function that takes a draft and returns a polished version.
 * - ProofreadBlogPostInput - The input type for the proofreadBlogPost function.
 * - ProofreadBlogPostOutput - The return type for the proofreadBlogPost function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ProofreadBlogPostInputSchema = z.object({
  draft: z.string().describe('The draft of the blog post to be proofread.'),
  tone: z.string().describe('The desired tone for the blog post (e.g., professional, casual, witty).'),
  keywords: z.string().describe('Comma-separated keywords to be included in the blog post.'),
});
export type ProofreadBlogPostInput = z.infer<typeof ProofreadBlogPostInputSchema>;

const ProofreadBlogPostOutputSchema = z.object({
  polishedDraft: z.string().describe('The proofread and improved version of the blog post.'),
});
export type ProofreadBlogPostOutput = z.infer<typeof ProofreadBlogPostOutputSchema>;

const proofreadPrompt = ai.definePrompt({
    name: 'proofreadPrompt',
    input: { schema: ProofreadBlogPostInputSchema },
    output: { schema: ProofreadBlogPostOutputSchema },
    prompt: `You are an expert content editor for a financial expert's blog. Your task is to proofread and enhance the following blog post draft.

    **Instructions:**
    1.  **Correct grammar and spelling errors.** Ensure the text is immaculate.
    2.  **Improve clarity and flow.** Make the post easy to read and understand for a general audience interested in finance.
    3.  **Incorporate the specified keywords naturally.**
    4.  **Adjust the tone** to be {{tone}}.
    5.  **Return ONLY the polished draft** in the 'polishedDraft' field of the output JSON. Do not include any preambles or introductions.

    **Keywords to include:** {{keywords}}

    **Blog Post Draft:**
    ---
    {{{draft}}}
    ---
    `,
});

const proofreadBlogPostFlow = ai.defineFlow(
  {
    name: 'proofreadBlogPostFlow',
    inputSchema: ProofreadBlogPostInputSchema,
    outputSchema: ProofreadBlogPostOutputSchema,
  },
  async (input) => {
    const {output} = await proofreadPrompt(input);
    return output!;
  }
);

export async function proofreadBlogPost(input: ProofreadBlogPostInput): Promise<ProofreadBlogPostOutput> {
  return proofreadBlogPostFlow(input);
}
