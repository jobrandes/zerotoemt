# Zero to EMT -- Build Notes
## Session: March 28, 2026

---

## FILES READY TO COMMIT

### src/ files (copy from /home/claude/ outputs)
- `src/App.js` -- home page overhaul, curriculum improvements, footer upgrade
- `src/App.css` -- all new CSS, 82 duplicate rules removed, 4KB smaller
- `src/lessons/data.js` -- M5L6 quiz bank complete (20q, 12fc)

### public/ files (new -- add to repo)
- `public/index.html` -- full SEO meta tags, OG/Twitter cards, PWA manifest link
- `public/manifest.json` -- PWA manifest (theme #0f1f3d, standalone display)

### New exam simulator files (new directories/files)
- `src/examData.js` -- 168-question NREMT exam bank, domain-tagged, buildExamDeck() function
- `netlify/functions/stripe-webhook.js` -- Stripe payment webhook, grants exam_access in Supabase
- `netlify/functions/exam-debrief.js` -- AI debrief function, separate from tutor.js
- `exam-schema.sql` -- run in Supabase SQL Editor to create exam tables

---

## WHAT WAS BUILT THIS SESSION

### Home Page
- Hero copy: first-timer vs returning user messaging
- Trust bar: "No account required * No credit card * Free forever"
- How It Works 5-step strip (navy bg, numbered 01-05)
- Stats bar: 6 Modules / 42 Lessons / 612+ Flashcards / 5 NREMT Domains / Free Always
- "Built For People Who Are --" checklist (4 items)
- Module preview cards: all 6 have Begin/Continue/Review buttons, direct lesson open
- Per-module progress bars on home screen cards
- Reset Progress button: moved out of hero buttons, confirm dialog added

### Footer
- Two-column layout: brand + tagline left, links right
- Links: Curriculum (internal), NREMT.org (external), GitHub (external)
- Tightened disclaimer text

### Curriculum Screen
- Per-module progress % and progress bar
- Lesson count (X/Y lessons)
- All lesson rows are now clickable (opens lesson directly)
- Module cards show DONE/% badge
- Completed modules get green border

### CSS
- 82 duplicate rules removed (~4KB savings)
- Duplicate zte-results-still-flagged rule removed
- All missing CSS rules added (zte-how-step-content, stats-bar, for-strip, btn-reset, footer-*)

### SEO / PWA
- public/index.html: title, description, OG, Twitter card, theme-color, manifest link
- public/manifest.json: PWA-ready, portrait orientation, correct theme colors
- Expected Lighthouse impact: SEO 91->100, PWA 30->70+

### data.js
- M5L6 Operations Module Quiz: 16->20 questions, 8->12 flashcards

---

## EXAM SIMULATOR -- PRODUCT DECISIONS LOCKED

| Decision | Answer |
|---|---|
| Price | $29 one-time |
| Visibility | Always visible to logged-in users (day one) |
| Attempt tracking | Yes -- store every attempt with domain scores |
| Domain | Stay on zerotoemt.netlify.app for now |
| AI debrief | Separate Netlify function (exam-debrief.js) |
| Trust/errors | Disclaimer + flag button + last reviewed date |

---

## EXAM SIMULATOR -- QUESTION BANK STATUS

**File:** `src/examData.js`
**Last reviewed:** March 2026
**Total questions:** 168

| Domain | Questions | Pulls per exam | Status |
|---|---|---|---|
| Airway | 30 | 22 | Ready |
| Cardiology | 34 | 24 | Ready |
| Trauma | 24 | 17 | Ready |
| Medical | 45 | 32 | Ready |
| Operations | 18 | 13 | Ready |
| Special Populations | 17 | 12 | Ready |
| **TOTAL** | **168** | **120** | **Ready** |

**Validation needed before charging:**
- Review by 3-5 working EMTs or paramedics
- Review by EMT course instructor (after August class starts)
- Flag button in UI for paying users to report errors

---

## SUPABASE SETUP NEEDED

Run `exam-schema.sql` in Supabase SQL Editor. Creates:
1. `exam_access` -- who has paid (written by Stripe webhook)
2. `exam_attempts` -- full exam results per attempt
3. `exam_question_flags` -- user-reported question errors

**Environment variables needed in Netlify:**
- `STRIPE_SECRET_KEY` -- from Stripe dashboard
- `STRIPE_WEBHOOK_SECRET` -- from Stripe webhook configuration
- `SUPABASE_SERVICE_ROLE_KEY` -- from Supabase Settings > API (NOT the anon key)
  - WARNING: service role key bypasses RLS -- only use in serverless functions, never client-side

---

## EXAM SIMULATOR -- WHAT STILL NEEDS BUILDING

1. **ExamSim screen in App.js** -- the full exam UI
   - Pre-exam briefing (past attempts, rules, start button)
   - Exam interface (timer, question nav, flag button, domain badge)
   - Results/debrief screen (domain chart, verdict, question review)
   - AI debrief integration (calls exam-debrief.js)

2. **Exam access check in App.js** -- load exam_access on init
   - `hasExamAccess` state, loaded alongside progress
   - Gate ExamSim screen behind this check

3. **Stripe checkout session creation** -- client-side function
   - Creates Stripe payment intent with user_id in metadata
   - Redirects to Stripe hosted checkout
   - On return, checks exam_access and unlocks UI

4. **stripe-webhook.js** -- uncomment Stripe SDK verification
   - Currently parses JSON without signature verification (insecure for production)
   - Install `stripe` npm package and uncomment the verification block

5. **Home screen exam sim card** -- visible to all logged-in users
   - Shows what they get (120q, timed, domain breakdown, AI debrief)
   - Price: $29 one-time
   - CTA: Buy Now or Continue (if access granted)

---

## PROCESS REMINDERS

- `npm run build` locally before every push -- never let Netlify be the first build test
- Non-ASCII scan before every file delivery
- Never rebuild from scratch -- always work from uploaded files
- Netlify deploy check: get-projects (zerotoemt) -> get-deploy-for-site with publishedDeploy ID
- Supabase MCP not available in this chat -- use SQL editor directly

---

## NEXT SESSION START

1. Upload App.js, App.css, data.js from repo (after you commit tonight's work)
2. Confirm Netlify deploy succeeded
3. Confirm Supabase exam tables created
4. Start building ExamSim screen in App.js
