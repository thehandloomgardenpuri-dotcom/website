-- Handloom Garden: product catalogue (public read) + enquiries (public insert only).

-- ── Products ─────────────────────────────────────────────────────────────
create table if not exists public.products (
  id            text primary key,
  slug          text not null unique,
  title         text not null,
  category      text not null check (category in ('sarees','kurtis','frocks','dresses','scarves','bed-covers')),
  weave         text not null,
  description   text not null,
  image_path    text not null,
  image_width   integer not null,
  image_height  integer not null,
  blur_data_url text,
  featured      boolean not null default false,
  sort_order    integer not null default 0,
  is_active     boolean not null default true,
  created_at    timestamptz not null default now(),
  updated_at    timestamptz not null default now()
);

alter table public.products add column if not exists collection text;

create index if not exists products_category_sort_idx on public.products (category, sort_order);

-- Keep updated_at current when products are edited in the dashboard (feeds sitemap <lastmod>).
create or replace function public.set_updated_at() returns trigger
  language plpgsql
  set search_path = ''
as $$
begin
  new.updated_at := now();
  return new;
end;
$$;

drop trigger if exists products_set_updated_at on public.products;
create trigger products_set_updated_at
  before update on public.products
  for each row execute function public.set_updated_at();

revoke execute on function public.set_updated_at() from public, anon, authenticated;

alter table public.products enable row level security;

drop policy if exists "Products are publicly readable" on public.products;
create policy "Products are publicly readable"
  on public.products for select
  to anon, authenticated
  using (is_active);

-- New tables are no longer auto-exposed to the Data API: grant read explicitly.
grant select on public.products to anon, authenticated;

-- ── Enquiries (contact form) ─────────────────────────────────────────────
create table if not exists public.enquiries (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  kind        text not null default 'enquiry' check (kind in ('enquiry','updates')),
  name        text not null check (char_length(name) between 1 and 120),
  phone       text not null check (phone ~ '^[0-9+ ()-]{7,20}$'),
  email       text check (email is null or char_length(email) <= 200),
  interest    text check (interest is null or char_length(interest) <= 80),
  message     text check (message is null or char_length(message) <= 2000),
  product_id  text check (product_id is null or char_length(product_id) <= 40),
  source_page text check (source_page is null or char_length(source_page) <= 200)
);

alter table public.enquiries enable row level security;

-- Visitors may submit an enquiry, but can never read, edit or delete any.
drop policy if exists "Anyone can submit an enquiry" on public.enquiries;
create policy "Anyone can submit an enquiry"
  on public.enquiries for insert
  to anon, authenticated
  with check (true);

-- Column-level grant: visitors cannot set id / created_at themselves.
revoke all on public.enquiries from anon, authenticated;
grant insert (kind, name, phone, email, interest, message, product_id, source_page)
  on public.enquiries to anon, authenticated;
