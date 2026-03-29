<div align="center">

# ☁️ CloudCall

### *Next-Generation Video Conferencing Platform*

[![Live Demo](https://img.shields.io/badge/🚀_Live_Demo-cloudcall--main.vercel.app-0E78F9?style=for-the-badge)](https://cloudcall-main.vercel.app)
[![Next.js](https://img.shields.io/badge/Next.js-14.1.3-black?style=for-the-badge&logo=next.js)](https://nextjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?style=for-the-badge&logo=typescript)](https://typescriptlang.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.3-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com)
[![Vercel](https://img.shields.io/badge/Deployed_on-Vercel-000000?style=for-the-badge&logo=vercel)](https://vercel.com)

<br/>

> **CloudCall** is a full-stack, production-ready video conferencing web application built with **Next.js 14**, **Stream Video SDK**, and **Clerk Authentication**. It enables seamless real-time video communication with enterprise-grade features — all in a sleek, dark-themed UI.

<br/>

---

## 🌐 Live Application

### 👉 [https://cloudcall-main.vercel.app](https://cloudcall-main.vercel.app)

---

</div>

## 📸 Screenshots

| Home Dashboard | Meeting Room |
|:-:|:-:|
| ![Home](public/images/hero-background.png) | *Live video grid with controls* |

| Sign In | Schedule Meeting |
|:-:|:-:|
| *Clerk-powered auth* | *Date & time picker modal* |

---

## ✨ Features

### 🎥 Video Conferencing
- **Instant Meetings** — Start a video call in one click
- **Scheduled Meetings** — Plan meetings with date & time picker
- **Join via Link** — Enter any meeting with an invitation URL
- **Personal Room** — Your own permanent meeting room URL

### 🖥️ In-Call Experience
- **Multiple Layouts** — Grid, Speaker-Left, Speaker-Right views
- **Real-time Call Stats** — Monitor connection quality live
- **Participant Panel** — See all attendees at a glance
- **End Call Button** — Clean call termination with redirect

### 📹 Pre-Call Setup
- **Camera & Mic Preview** — Test devices before joining
- **Device Selection** — Choose input/output devices
- **Toggle Controls** — Join muted or with camera off

### 🤖 AI Chatbot Assistant *(Unique Feature)*
- Built-in floating chatbot inside the meeting room
- Supports **arithmetic calculations** (`2 + 2`, `15 * 3`)
- **Engineering & Physics formulas** (Ohm's Law, Kinetic Energy, etc.)
- **CS concepts** (CPU, RAM, Stack, Queue, Big-O)
- **Call troubleshooting tips** (low bandwidth, muted mic warnings)
- Tech jokes & motivational quotes

### 🔐 Authentication
- Secure **Sign Up / Sign In** via Clerk
- Protected routes with middleware
- Persistent sessions across devices

### 📋 Meeting History
- **Upcoming Meetings** — View all scheduled calls
- **Previous Meetings** — Browse past call history
- **Recordings** — Access recorded sessions

---

## 🏗️ Architecture

```
┌─────────────────────────────────────────────────────────────┐
│                        Browser (Client)                     │
│                                                             │
│   ┌─────────────┐    ┌──────────────┐    ┌──────────────┐  │
│   │  Clerk Auth │    │  Stream SDK  │    │   Next.js    │  │
│   │  (Session)  │    │ (Video/WSS)  │    │   UI/Pages   │  │
│   └──────┬──────┘    └──────┬───────┘    └──────┬───────┘  │
│          │                  │                   │           │
└──────────┼──────────────────┼───────────────────┼───────────┘
           │                  │                   │
           ▼                  ▼                   ▼
┌─────────────────────────────────────────────────────────────┐
│                    Vercel Edge Network                       │
│                                                             │
│   ┌─────────────────────┐    ┌──────────────────────────┐  │
│   │  Next.js Middleware  │    │  API Route               │  │
│   │  (Clerk auth check) │    │  /api/get-stream-token   │  │
│   └─────────────────────┘    └──────────────────────────┘  │
└─────────────────────────────────────────────────────────────┘
           │                                    │
           ▼                                    ▼
┌─────────────────────┐            ┌────────────────────────┐
│   Clerk.dev         │            │   Stream.io            │
│   Auth Backend      │            │   Video + WebSocket    │
│   (JWT Sessions)    │            │   (Real-time calls)    │
└─────────────────────┘            └────────────────────────┘
```

---

## 🗂️ Project Structure

```
cloudcall-main/
│
├── 📁 app/
│   ├── 📁 (auth)/                    # Auth routes (Clerk)
│   │   ├── sign-in/[[...sign-in]]/   # Sign in page
│   │   └── sign-up/[[...sign-up]]/   # Sign up page
│   │
│   ├── 📁 (root)/
│   │   ├── 📁 (home)/                # Protected home pages
│   │   │   ├── page.tsx              # 🏠 Dashboard
│   │   │   ├── upcoming/             # 📅 Upcoming meetings
│   │   │   ├── previous/             # 🕐 Past meetings
│   │   │   ├── recordings/           # 🎞️ Recordings
│   │   │   ├── personal-room/        # 👤 Personal room
│   │   │   └── layout.tsx            # Sidebar layout
│   │   │
│   │   └── meeting/[id]/             # 🎥 Live meeting room
│   │
│   ├── 📁 api/
│   │   └── get-stream-token/         # 🔑 JWT token API route
│   │
│   ├── globals.css                   # Global styles
│   └── layout.tsx                    # Root layout (ClerkProvider)
│
├── 📁 components/
│   ├── 📁 ui/                        # Shadcn UI primitives
│   ├── Chatbot.tsx                   # 🤖 AI Assistant
│   ├── MeetingRoom.tsx               # 🎥 Live video room
│   ├── MeetingTypeList.tsx           # 🃏 Meeting option cards
│   ├── MeetingSetup.tsx              # ⚙️ Pre-call setup
│   ├── MeetingModal.tsx              # 💬 Meeting dialogs
│   ├── CallList.tsx                  # 📋 Call history list
│   ├── Sidebar.tsx                   # 🗂️ Desktop sidebar
│   ├── Navbar.tsx                    # 🔝 Top navigation
│   └── MobileNav.tsx                 # 📱 Mobile navigation
│
├── 📁 hooks/
│   ├── useGetCallById.ts             # Fetch call by ID
│   └── useGetCalls.ts                # Fetch all calls
│
├── 📁 actions/
│   └── stream.actions.ts             # Server actions
│
├── 📁 providers/
│   └── StreamClientProvider.tsx      # Stream SDK context
│
├── 📁 constants/
│   └── index.ts                      # Sidebar links & config
│
├── middleware.ts                      # Clerk route protection
├── next.config.mjs                   # Next.js config
├── tailwind.config.ts                # Tailwind theme config
└── .env.local                        # Environment variables
```

---

## 🛠️ Tech Stack

### Core Framework
| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org) | 14.1.3 | Full-stack React framework (App Router) |
| [React](https://react.dev) | 18.x | UI component library |
| [TypeScript](https://typescriptlang.org) | 5.x | Type safety |

### Video & Real-time
| Technology | Version | Purpose |
|---|---|---|
| [@stream-io/video-react-sdk](https://getstream.io/video/docs/react/) | 0.5.1 | Client-side video SDK |
| [@stream-io/node-sdk](https://getstream.io/video/docs/api/) | 0.1.12 | Server-side token generation |

### Authentication
| Technology | Version | Purpose |
|---|---|---|
| [@clerk/nextjs](https://clerk.com/docs/nextjs) | 5.0.0-beta | Auth, sessions, user management |

### UI & Styling
| Technology | Version | Purpose |
|---|---|---|
| [Tailwind CSS](https://tailwindcss.com) | 3.3 | Utility-first styling |
| [Radix UI](https://radix-ui.com) | Latest | Accessible headless components |
| [Lucide React](https://lucide.dev) | 0.350 | Icon library |
| [shadcn/ui](https://ui.shadcn.com) | — | Pre-built component system |
| [tailwindcss-animate](https://github.com/jamiebuilds/tailwindcss-animate) | 1.0.7 | Animation utilities |

### Utilities
| Technology | Version | Purpose |
|---|---|---|
| [date-fns](https://date-fns.org) | 3.4 | Date formatting |
| [react-datepicker](https://reactdatepicker.com) | 6.3 | Date/time picker UI |
| [uuid](https://github.com/uuidjs/uuid) | 9.0 | Unique meeting ID generation |
| [clsx](https://github.com/lukeed/clsx) | 2.1 | Conditional class names |

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org) v18+
- [npm](https://npmjs.com) or [yarn](https://yarnpkg.com)
- A [Clerk](https://clerk.com) account
- A [Stream.io](https://getstream.io) account with **Video & Audio** enabled

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/cloudcall-main.git
cd cloudcall-main
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
# Clerk Authentication
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_xxxxxxxxxxxxxxxxxxxxxx
CLERK_SECRET_KEY=sk_test_xxxxxxxxxxxxxxxxxxxxxx
NEXT_PUBLIC_CLERK_FRONTEND_API=https://your-instance.clerk.accounts.dev
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up

# Stream Video
NEXT_PUBLIC_STREAM_API_KEY=your_stream_api_key
STREAM_SECRET_KEY=your_stream_secret_key

# App
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## ☁️ Deployment on Vercel

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login & Deploy
```bash
vercel login
vercel --prod
```

### 3. Set Environment Variables on Vercel
```bash
echo "your_value" | vercel env add VARIABLE_NAME production
```

Or via **Vercel Dashboard** → Project → Settings → Environment Variables.

> 💡 **Important:** After deploying, update `NEXT_PUBLIC_BASE_URL` to your production URL (e.g., `https://cloudcall-main.vercel.app`).

---

## 🔑 Service Setup

### Clerk (Authentication)
1. Create account at [clerk.com](https://clerk.com)
2. Create a new application
3. Go to **Developers → API Keys** and copy your keys
4. In **Developers → Paths**, set:
   - Sign-in URL: `/sign-in`
   - Sign-up URL: `/sign-up`

### Stream.io (Video)
1. Create account at [getstream.io](https://getstream.io)
2. Create a new app
3. Enable **Video & Audio** product
4. Set app to **Production** mode for deployed environments
5. Copy **API Key** and **Secret** from App Access Keys

---

## 🔄 Data Flow

```
User Opens App
      │
      ▼
Clerk Middleware ──── Not Authenticated ──→ /sign-in
      │
      │ Authenticated
      ▼
StreamClientProvider
      │
      ├── fetch /api/get-stream-token
      │         │
      │         ├── auth() ← Clerk session
      │         └── StreamClient.createToken(userId)
      │
      ▼
StreamVideoClient initialized (WebSocket connected)
      │
      ▼
User creates/joins meeting
      │
      ▼
call.getOrCreate({ data: { starts_at, description } })
      │
      ▼
Redirect to /meeting/[id]
      │
      ▼
MeetingSetup → MeetingRoom (Live video call)
```

---

## 📱 Pages & Routes

| Route | Description | Auth Required |
|---|---|---|
| `/` | Home dashboard with meeting cards | ✅ Yes |
| `/upcoming` | List of scheduled meetings | ✅ Yes |
| `/previous` | Past meeting history | ✅ Yes |
| `/recordings` | Recorded sessions | ✅ Yes |
| `/personal-room` | Your permanent meeting room | ✅ Yes |
| `/meeting/[id]` | Live video call room | ✅ Yes |
| `/sign-in` | Login page | ❌ No |
| `/sign-up` | Registration page | ❌ No |
| `/api/get-stream-token` | Stream JWT token API | ✅ Yes |

---

## 🎨 UI Design System

### Color Palette

```
Primary Blue     #0E78F9  ████  Main actions, active states
Dark Background  #1C1F2E  ████  App background
Surface          #252A41  ████  Cards, inputs, modals
Sky Blue         #72A5DC  ████  Secondary text, accents
Orange           #F9A90E  ████  Schedule meeting card
Blue             #0E78F9  ████  Join meeting card
Purple           #830EF9  ████  Upcoming meeting card
Yellow           #F9E609  ████  Recordings card
```

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 400 (Normal), 500 (Medium), 600 (Semibold), 700 (Bold)

---

## 🤖 AI Chatbot Capabilities

The built-in AI assistant supports:

| Category | Examples |
|---|---|
| 🔢 Math | `2 + 2`, `15 * 3`, `100 / 4` |
| ⚡ Electronics | Ohm's Law, Voltage, Current, Resistance |
| ⚙️ Physics | Kinetic Energy, Force, Newton's Laws |
| 💻 CS Concepts | CPU, RAM, Stack, Queue, Big-O notation |
| 📞 Call Help | Mic muted, camera off, bandwidth issues |
| 😄 Fun | Tech jokes, motivational quotes |

---

## 🔒 Security

- All routes protected by **Clerk middleware**
- **JWT tokens** generated server-side for Stream.io
- Environment variables never exposed to client (except `NEXT_PUBLIC_*`)
- Stream token has **1-hour expiry** with issued-at validation
- API route `/api/get-stream-token` returns 401 for unauthenticated requests

---

## 📦 Available Scripts

```bash
npm run dev       # Start development server
npm run build     # Build for production
npm run start     # Start production server
npm run lint      # Run ESLint
```

---

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m "Add amazing feature"`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

---

## 📄 License

This project is licensed under the **MIT License**.

---

<div align="center">

## 👨‍💻 Built With ❤️ Using

[![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat-square&logo=next.js&logoColor=white)](https://nextjs.org)
[![Stream](https://img.shields.io/badge/Stream-005FFF?style=flat-square&logo=stream&logoColor=white)](https://getstream.io)
[![Clerk](https://img.shields.io/badge/Clerk-6C47FF?style=flat-square&logo=clerk&logoColor=white)](https://clerk.com)
[![Vercel](https://img.shields.io/badge/Vercel-000000?style=flat-square&logo=vercel&logoColor=white)](https://vercel.com)
[![Tailwind](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=flat-square&logo=tailwindcss&logoColor=white)](https://tailwindcss.com)

<br/>

**⭐ Star this repo if you found it helpful!**

</div>
