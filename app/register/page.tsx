import Link from 'next/link';
import { AuthForm } from '@/app/components/AuthForm';
import { signUp } from '@/app/actions/auth';

export default function RegisterPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4 dark:bg-black">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-semibold text-gray-900 dark:text-white">Sign Up</h1>
          <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Create your account to get started.
          </p>
        </div>

        <div className="rounded-lg border border-gray-200 bg-white p-8 shadow-sm dark:border-gray-800 dark:bg-gray-900">
          <AuthForm action={signUp} isRegister />

          <div className="mt-6 text-center text-sm">
            <span className="text-gray-600 dark:text-gray-400">Already have an account? </span>
            <Link
              href="/login"
              className="font-medium text-black hover:underline dark:text-white"
            >
              Sign in
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}


