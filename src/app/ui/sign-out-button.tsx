'use client';

import { signOut } from 'next-auth/react';

export default function SignOutButton({ className, text = "Sign Out" }: { className?: string; text?: string }) {
  return (
    <button 
      onClick={() => signOut({ callbackUrl: '/' })} 
      className={className || "text-red-400 hover:text-red-300 w-full text-left"}
    >
      {text}
    </button>
  );
}
