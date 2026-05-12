-- ============================================
-- STELLR DATABASE SETUP
-- Run this once in the Supabase SQL Editor
-- ============================================

-- Restaurants table
-- Each row is one restaurant we manage
create table restaurants (
  id uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null,
  logo_url text,
  google_review_url text not null,
  owner_name text,
  owner_email text,
  owner_whatsapp text,
  active boolean default true,
  created_at timestamp with time zone default now()
);

-- Feedback table
-- Every customer interaction is stored here whether positive or negative
create table feedback (
  id uuid primary key default gen_random_uuid(),
  restaurant_id uuid references restaurants(id) on delete cascade,
  rating text not null,
  redirected_to_google boolean default false,
  complaint_text text,
  complaint_tags text[],
  customer_ip text,
  created_at timestamp with time zone default now()
);

-- Indexes for fast lookups
create index on feedback (restaurant_id, created_at desc);
create index on restaurants (slug);

-- Row level security
alter table restaurants enable row level security;
alter table feedback enable row level security;

-- Anyone can read restaurant data so the funnel page loads without auth
create policy "Public read restaurants"
  on restaurants for select using (true);

-- Anyone can submit feedback so customers do not need to log in
create policy "Public insert feedback"
  on feedback for insert with check (true);

-- Anyone can read feedback for the dashboard
create policy "Public read feedback"
  on feedback for select using (true);

-- Allow updating feedback (for adding complaint details after initial insert)
create policy "Public update feedback"
  on feedback for update using (true);

-- Enquiries table
-- Every "Get Started" form submission is stored here
create table enquiries (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  restaurant text not null,
  email text,
  country text,
  city text,
  whatsapp text,
  plan text,
  message text,
  status text default 'new',
  created_at timestamp with time zone default now()
);

create index on enquiries (created_at desc);

alter table enquiries enable row level security;

create policy "Public insert enquiries"
  on enquiries for insert with check (true);

create policy "Public read enquiries"
  on enquiries for select using (true);

create policy "Public update enquiries"
  on enquiries for update using (true);
