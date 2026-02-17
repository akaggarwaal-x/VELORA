-- PostgreSQL schema blueprint for Supabase/Neon
create table if not exists users (
  id text primary key,
  email text unique not null,
  name text,
  role text default 'customer',
  created_at timestamptz default now()
);

create table if not exists categories (
  id bigserial primary key,
  name text not null,
  slug text unique not null,
  description text
);

create table if not exists products (
  id bigserial primary key,
  category_id bigint references categories(id),
  name text not null,
  slug text unique not null,
  description text not null,
  price numeric not null,
  currency text default 'USD',
  image text not null,
  ingredients text[] default '{}',
  benefits text[] default '{}',
  is_vegan boolean default true,
  is_organic boolean default true,
  created_at timestamptz default now()
);

create table if not exists product_variants (
  id bigserial primary key,
  product_id bigint references products(id),
  sku text unique not null,
  size text not null,
  stock integer default 0
);

create table if not exists orders (
  id bigserial primary key,
  user_id text references users(id),
  total_amount numeric not null,
  currency text default 'USD',
  status text default 'pending',
  created_at timestamptz default now()
);

create table if not exists order_items (
  id bigserial primary key,
  order_id bigint references orders(id),
  product_id bigint references products(id),
  quantity integer not null,
  unit_price numeric not null
);

create table if not exists bulk_inquiries (
  id bigserial primary key,
  company_name text not null,
  contact_name text not null,
  email text not null,
  country text not null,
  interest text not null,
  moq text not null,
  message text not null,
  created_at timestamptz default now()
);

create table if not exists reviews (
  id bigserial primary key,
  product_id bigint references products(id),
  author text not null,
  rating integer not null,
  comment text not null,
  created_at timestamptz default now()
);

create table if not exists blog_categories (
  id bigserial primary key,
  name text not null,
  slug text unique not null
);

create table if not exists blog_posts (
  id bigserial primary key,
  category_id bigint references blog_categories(id),
  title text not null,
  slug text unique not null,
  excerpt text not null,
  content text not null,
  seo_title text,
  seo_description text,
  image text,
  published_at timestamptz,
  created_at timestamptz default now()
);

create table if not exists coupons (
  id bigserial primary key,
  code text unique not null,
  type text not null,
  value numeric not null,
  min_order numeric,
  valid_until timestamptz not null,
  usage_limit integer,
  usage_count integer default 0
);

create table if not exists shipping_zones (
  id bigserial primary key,
  name text not null,
  country_code text not null,
  min_days integer not null,
  max_days integer not null,
  base_rate numeric not null
);
