-- Spaced review: one row per signed-in student holding their missed-question schedule.
-- Run once in the Supabase SQL Editor. The app works without it (it just keeps the
-- schedule on the device) and starts syncing across devices as soon as the table exists.
create table if not exists review_items (
  user_id uuid references auth.users(id) on delete cascade primary key,
  items jsonb not null default '{}'::jsonb,
  updated_at timestamptz default now()
);

alter table review_items enable row level security;

create policy "Users can only access their own review items"
  on review_items for all
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);
