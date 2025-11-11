# Supabase Authentication App

A modern, minimalist authentication system built with Next.js and Supabase, featuring login, registration, logout, and a protected user dashboard.

## Features

- **User Authentication**
  - Email/password login
  - User registration with name, email, and password
  - Secure logout functionality
  - Protected routes with middleware

- **User Dashboard**
  - Display user information (name and email)
  - Secure logout button
  - Protected route that requires authentication

- **Modern UI/UX**
  - Clean, minimalist design
  - Dark mode support
  - Responsive layout
  - Form validation and error handling
  - Loading states during form submission

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Authentication**: Supabase Auth
- **Styling**: TailwindCSS
- **Icons**: Lucide React

## Prerequisites

- Node.js 18+ installed
- A Supabase account and project
- npm or yarn package manager

## Getting Started

### 1. Clone the repository

```bash
git clone <your-repo-url>
cd supalogin
```

### 2. Install dependencies

```bash
npm install
```

### 3. Set up Supabase

1. Go to [supabase.com](https://supabase.com) and create a new project
2. Wait for the project to finish initializing
3. Navigate to **Settings** → **API** in your Supabase dashboard
4. Copy your **Project URL** and **anon public key**

### 4. Configure environment variables

1. Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

2. Replace the placeholders with your actual Supabase credentials

### 5. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Project Structure

```
supalogin/
├── app/
│   ├── actions/
│   │   └── auth.ts          # Server actions for authentication
│   ├── components/
│   │   └── AuthForm.tsx      # Reusable authentication form component
│   ├── dashboard/
│   │   └── page.tsx          # Protected dashboard page
│   ├── login/
│   │   └── page.tsx          # Login page
│   ├── register/
│   │   └── page.tsx          # Registration page
│   ├── layout.tsx            # Root layout
│   ├── page.tsx              # Home page with auth-aware navigation
│   └── globals.css           # Global styles
├── lib/
│   └── supabase/
│       ├── client.ts         # Browser Supabase client
│       └── server.ts         # Server Supabase client
├── middleware.ts             # Route protection middleware
└── .env.example              # Environment variables template
```

## Usage

### Register a New User

1. Navigate to `/register` or click "Sign Up" on the home page
2. Fill in your name, email, and password (minimum 6 characters)
3. Click "Sign Up" to create your account
4. You'll be automatically redirected to the dashboard

### Login

1. Navigate to `/login` or click "Sign In" on the home page
2. Enter your email and password
3. Click "Sign In" to authenticate
4. You'll be redirected to the dashboard

### Dashboard

- View your user information (name and email)
- Click "Sign Out" to logout and return to the login page

### Route Protection

- Unauthenticated users trying to access `/dashboard` are redirected to `/login`
- Authenticated users trying to access `/login` or `/register` are redirected to `/dashboard`

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SUPABASE_URL` | Your Supabase project URL |
| `NEXT_PUBLIC_SUPABASE_ANON_KEY` | Your Supabase anon/public API key |

## Supabase Configuration

### Email Authentication

The app uses Supabase's built-in email authentication. No additional database tables are required - Supabase automatically manages the `auth.users` table.

### Optional: Email Confirmation

By default, Supabase may require email confirmation. To disable this for development:

1. Go to **Authentication** → **Settings** in your Supabase dashboard
2. Disable "Enable email confirmations" if you want immediate access after registration

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Supabase Documentation](https://supabase.com/docs)
- [Supabase Auth Guide](https://supabase.com/docs/guides/auth)

## License

This project is open source and available under the MIT License.
