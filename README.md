# Athlisis — AI-Powered Wellness Practice Management

> Next-generation operating system for health professionals.

[![Live Demo](https://img.shields.io/badge/Live-Demo-blue)](https://patotis.github.io/athlisis/)
[![GitHub](https://img.shields.io/badge/GitHub-patotis/athlisis-black)](https://github.com/patotis/athlisis)

## 🚀 Quick Start

```bash
# 1. Install dependencies
npm install

# 2. Set up environment
cp apps/web/.env.local apps/web/.env.local.bak
# Add your Clerk keys to apps/web/.env.local

# 3. Run development server
npm run dev
# → http://localhost:3000
```

## 📦 Structure

```
athlisis-monorepo/
├── apps/
│   └── web/          # Next.js 16 dashboard (main app)
├── packages/
│   ├── database/     # Prisma schema + migrations
│   ├── ui/           # Shared component library
│   └── typescript-config/
└── turbo.json
```

## 🔑 Environment Variables (apps/web/.env.local)

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/auth/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/auth/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/onboarding
DATABASE_URL=postgresql://...
ANTHROPIC_API_KEY=sk-ant-...
```

## 📄 Pages Built

| Route | Status |
|-------|--------|
| `/` | ✅ Landing page |
| `/auth/sign-in` | ✅ Clerk auth |
| `/auth/sign-up` | ✅ Clerk auth |
| `/dashboard` | ✅ Main dashboard |
| `/clients` | ✅ Client list |
| `/meal-plans/generate` | ✅ AI generator UI |
| `/appointments` | 🚧 Phase 2 |
| `/analytics` | 🚧 Phase 2 |
| `/messaging` | 🚧 Phase 2 |

## 🗺️ Roadmap

See `MVP_ROADMAP.md` for the full 12-week sprint plan.

## 🌐 Live Demo

👉 **https://patotis.github.io/athlisis/**

---
*Athlisis · Part of the Physis Ecosystem · Made with ♥ in Greece*
