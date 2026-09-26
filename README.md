# FitLog — Workout Library

A dark, no-nonsense gym companion built with Next.js. Browse a library of workouts, dive into detailed exercise instructions, and lock lifts into a daily plan or save them for later — all with a fast, distraction-free interface designed for people who train with intent.

**Live Demo:** [https://fit-log-sable.vercel.app/](https://fit-log-sable.vercel.app/)
**Repository:** [https://github.com/masudmoon695-alt/fit-log](https://github.com/masudmoon695-alt/fit-log)

## Technologies Used

- **Next.js 16** (App Router, Turbopack)
- **React** (Client Components, Hooks)
- **TypeScript**
- **Tailwind CSS v4**
- **react-hot-toast** — toast notifications
- **lucide-react** — icon set
- **localStorage** — client-side persistence for plan/saved data
- **Vercel** — deployment

## Key Features

1. **Workout Library** — Browse a searchable, sortable catalog of exercises (by duration, calories, or rating), each tagged by muscle group and equipment type.
2. **Detailed Workout Pages** — Every workout has its own page with key specs (sets, reps, difficulty, duration, calories) and step-by-step instructions.
3. **Daily Plan Builder** — Add up to 5 workouts to "Today's Plan," track progress, and mark lifts as done — all persisted locally so your plan survives a refresh.
4. **Save for Later** — Bookmark workouts you're interested in without committing them to today's plan.
5. **Responsive, Themed UI** — A custom dark theme with an accent color system, condensed display typography, and a mobile-friendly hamburger navigation menu.

## Getting Started

Clone the repository and install dependencies:

```bash
git clone https://github.com/masudmoon695-alt/fit-log.git
cd fit-log
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.
