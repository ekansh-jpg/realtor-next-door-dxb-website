CREATE TABLE public.leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL CHECK (char_length(name) BETWEEN 2 AND 100),
  email text CHECK (email IS NULL OR (char_length(email) <= 255 AND email ~* '^[^@\s]+@[^@\s]+\.[^@\s]+$')),
  phone text NOT NULL CHECK (char_length(phone) BETWEEN 6 AND 30),
  budget text CHECK (budget IS NULL OR char_length(budget) <= 60),
  timeline text CHECK (timeline IS NULL OR char_length(timeline) <= 60),
  interest text CHECK (interest IS NULL OR char_length(interest) <= 60),
  country text CHECK (country IS NULL OR char_length(country) <= 80),
  message text CHECK (message IS NULL OR char_length(message) <= 2000),
  property text CHECK (property IS NULL OR char_length(property) <= 150),
  source_page text CHECK (source_page IS NULL OR char_length(source_page) <= 300),
  form_name text NOT NULL CHECK (char_length(form_name) BETWEEN 1 AND 60),
  utm_source text CHECK (utm_source IS NULL OR char_length(utm_source) <= 150),
  utm_medium text CHECK (utm_medium IS NULL OR char_length(utm_medium) <= 150),
  utm_campaign text CHECK (utm_campaign IS NULL OR char_length(utm_campaign) <= 150),
  consent boolean NOT NULL CHECK (consent = true),
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.leads TO anon, authenticated;
GRANT ALL ON public.leads TO service_role;

ALTER TABLE public.leads ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Visitors can submit leads"
ON public.leads FOR INSERT TO anon, authenticated
WITH CHECK (consent = true);