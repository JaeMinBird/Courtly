# Supabase Setup Guide for Courtly

This guide will walk you through setting up Supabase for the Courtly application.

## 1. Create a Supabase Project

1. Sign up or log in to [Supabase](https://supabase.com/).
2. Create a new project and give it a name (e.g., "courtly").
3. Note down your project URL and anon key (public API key).

## 2. Set Environment Variables

1. Update the `.env.local` file with your Supabase project details:

```
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 3. Database Setup

The database schema is defined in `supabase/schema.sql`. You can set up the database in two ways:

### Option 1: Using the Supabase Web Interface

1. Go to your Supabase project dashboard.
2. Navigate to the SQL Editor.
3. Create a new query and paste the contents of `supabase/schema.sql`.
4. Run the query to set up your database schema.

### Option 2: Using the Supabase CLI

1. Install the Supabase CLI if you haven't already:
   ```bash
   npm install -g supabase
   ```

2. Log in to Supabase:
   ```bash
   supabase login
   ```

3. Initialize Supabase in your project:
   ```bash
   supabase init
   ```

4. Link your project:
   ```bash
   supabase link --project-ref your-project-ref
   ```

5. Apply the migrations:
   ```bash
   supabase db push
   ```

## 4. Authentication Setup

1. In the Supabase dashboard, go to Authentication > Settings.
2. Configure the Site URL to match your development URL (e.g., http://localhost:3000).
3. For local development, you may want to disable email confirmations:
   - Go to Authentication > Providers > Email
   - Disable "Confirm email" for easier testing

## 5. Row Level Security (RLS) Policies

The schema includes basic RLS policies. For more detailed policies:

1. Go to your Supabase dashboard.
2. Navigate to Database > Tables.
3. Select a table and go to the Policies tab.
4. Create new policies or edit existing ones as needed.

## 6. Test Your Connection

After setting up Supabase and configuring your environment variables, you can test your connection by running the development server:

```bash
npm run dev
```

Your Next.js application should now be connected to your Supabase project. 