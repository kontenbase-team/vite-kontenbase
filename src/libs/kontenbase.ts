import { KontenbaseClient } from "@kontenbase/sdk";

const apiKey = import.meta.env.VITE_KONTENBASE_API_KEY;

export const kontenbaseClient = new KontenbaseClient({ apiKey });
