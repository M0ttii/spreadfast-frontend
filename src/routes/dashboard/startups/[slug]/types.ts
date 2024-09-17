import type { Infer, SuperValidated } from "sveltekit-superforms";
import type { FormSchema } from "./schema";

export interface PageDataProp {
    slug: string;
    form: SuperValidated<Infer<FormSchema>>;
}

export type Step = {
    title: string
}