import { createClient } from "@supabase/supabase-js";

const PROJECT_url = "https://gbnrpocwcnrondctxigj.supabase.co";
const PUBLIC_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdibnJwb2N3Y25yb25kY3R4aWdqIiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjgzNjE4NzEsImV4cCI6MTk4MzkzNzg3MX0.h1JMVV9Wq7B0bCtcdB_oahJwSLMxuo1dkOhimj4FC7A";
const supabase = createClient(PROJECT_url, PUBLIC_KEY);

export function videoService() {
  return {
    getAllVideos() {
      return supabase.from("videos").select("*");
    },
  };
}
