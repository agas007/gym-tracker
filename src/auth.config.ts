import type { NextAuthConfig } from 'next-auth';

export const authConfig = {
  pages: {
    signIn: '/login',
  },
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      const isLoggedIn = !!auth?.user;
      const isOnDashboard = nextUrl.pathname.startsWith('/dashboard');
      const isOnAdmin = nextUrl.pathname.startsWith('/admin');
      const isOnInstructor = nextUrl.pathname.startsWith('/instructor');
      const isOnStudent = nextUrl.pathname.startsWith('/student');

      if (isOnDashboard || isOnAdmin || isOnInstructor || isOnStudent) {
        if (isLoggedIn) return true;
        return false; // Redirect unauthenticated users to login page
      } else if (isLoggedIn && (nextUrl.pathname === '/login' || nextUrl.pathname === '/')) {
          // Redirect logged-in users away from login or landing page directly to their dashboard
           if (auth.user?.role === 'ADMIN') return Response.redirect(new URL('/admin', nextUrl));
           if (auth.user?.role === 'INSTRUCTOR') return Response.redirect(new URL('/instructor', nextUrl));
           if (auth.user?.role === 'STUDENT') return Response.redirect(new URL('/student', nextUrl));
      }
      return true;
    },
    jwt({ token, user }) {
      if (user) {
        token.role = user.role;
        token.id = user.id;
      }
      return token;
    },
    session({ session, token }) {
      if (session.user && token) {
        session.user.role = token.role as string;
        session.user.id = token.id as string;
      }
      return session;
    },
  },
  providers: [], // Configured in auth.ts
} satisfies NextAuthConfig;
