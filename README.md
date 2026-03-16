# Zero to EMT

Free pre-class EMT training platform. Learn everything before your first EMT class starts.

---

## Setup Instructions

### Step 1 — Supabase (database + auth)

1. Go to [supabase.com](https://supabase.com) and create a free account
2. Click **"New Project"** — name it `zerotoemt`, choose a region close to you, set a database password
3. Wait for it to provision (~2 minutes)
4. Go to **Settings → API** and copy:
   - **Project URL** → this is your `SUPABASE_URL`
   - **anon public key** → this is your `SUPABASE_ANON_KEY`
5. Go to **SQL Editor** and run this query to create the progress table:

```sql
create table progress (
  id uuid default gen_random_uuid() primary key,
  user_id uuid references auth.users(id) on delete cascade not null unique,
  completed_lessons text[] default '{}',
  updated_at timestamptz default now()
);

alter table progress enable row level security;

create policy "Users can only access their own progress"
  on progress for all
  using (auth.uid() = user_id);
```

6. Go to **Authentication → Settings** and make sure **Email confirmations** are turned OFF for now (easier for testing)

---

### Step 2 — Netlify (hosting)

1. Go to [netlify.com](https://netlify.com) and sign up with your GitHub account (jobrandes)
2. Click **"Add new site" → "Import an existing project"**
3. Choose **GitHub** → select your `zerotoemt` repository
4. Build settings will auto-detect from `netlify.toml` — don't change anything
5. Before clicking deploy, go to **"Environment variables"** and add:
   - `REACT_APP_ANTHROPIC_API_KEY` = your Anthropic key (sk-ant-...)
   - `REACT_APP_SUPABASE_URL` = your Supabase project URL
   - `REACT_APP_SUPABASE_ANON_KEY` = your Supabase anon key
6. Click **Deploy** — your site will be live at `zerotoemt.netlify.app` (or similar) in ~3 minutes

---

### Step 3 — GitHub repository

1. Go to [github.com/jobrandes](https://github.com/jobrandes)
2. Click **"New repository"** → name it `zerotoemt` → **Public** → no README (we have one)
3. Click **"Create repository"**
4. Follow GitHub's instructions to push this folder:

```bash
cd zerotoemt
git init
git add .
git commit -m "Initial Zero to EMT build"
git branch -M main
git remote add origin https://github.com/jobrandes/zerotoemt.git
git push -u origin main
```

After this, every time you push changes to GitHub, Netlify automatically rebuilds and deploys.

---

### Step 4 — Local development (optional)

If you want to run it locally to test before pushing:

```bash
cd zerotoemt
cp .env.example .env
# Edit .env and fill in your real keys
npm install
npm start
```

Opens at http://localhost:3000

---

## Adding New Lessons

All lesson content lives in `src/lessons/data.js`. To add a new lesson:

1. Create the lesson object (follow the same structure as L1-L6, M1L1)
2. Register it in `LESSON_DATA` at the bottom of the file
3. Update `TOTAL_LESSONS` constant
4. Commit and push — Netlify deploys automatically

---

## Cost

- Hosting: **Free** (Netlify)
- Database + Auth: **Free** (Supabase)
- Domain: **Free** (yourname.netlify.app) or ~$12/year for custom domain
- AI Tutor API: **~$2-6 total** for personal study use

---

*Educational use only. Not affiliated with NREMT.*
