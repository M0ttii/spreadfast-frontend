import { z } from "zod";

export const formSchema = z.object({
    firstname: z.string().min(2).max(50),
    lastname: z.string().min(2).max(50),
    email: z.string().email(),
    role: z.string().min(2).max(50),
    city: z.string().min(2).max(50),
    country: z.string().min(2).max(50),
    twitter: z.string().min(2).max(50),
    url: z.string().url(),
    affiliate: z.string().url(),
    ctwitter: z.string().min(2).max(50),
    pricing_select: z.string().min(2).max(50),
    launch_date: z.string(),
    starting_price: z.string().min(2).max(50),
    tagline: z.string().min(2).max(100),
    short_description: z.string().min(2).max(500),
    long_description: z.string().min(2).max(5000),
    category_select: z.string().min(2).max(50),
    tags: z.array(z.string().min(2).max(50)),
    use_case_1: z.string().min(2).max(50),
    use_case_2: z.string().min(2).max(50),
    key_features: z.array(z.string().min(2).max(50))
});

export type FormSchema = typeof formSchema;