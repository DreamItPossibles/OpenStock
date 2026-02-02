import createMiddleware from 'next-intl/middleware';
import {routing} from './i18n/routing';
import {NextRequest, NextResponse} from 'next/server';
import {getSessionCookie} from "better-auth/cookies";

const intlMiddleware = createMiddleware(routing);

export default async function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // 1. Run intl middleware first to handle redirects/locale
    const response = intlMiddleware(request);

    // 2. Auth check
    const sessionCookie = getSessionCookie(request);
    
    // Define public routes (with locale prefix)
    const isPublicRoute = 
        pathname.includes('/sign-in') || 
        pathname.includes('/sign-up') || 
        pathname.includes('/assets') || 
        pathname === '/' ||
        pathname === '/en' ||
        pathname === '/zh';

    if (!sessionCookie && !isPublicRoute) {
        const locale = pathname.split('/')[1] || 'zh';
        const signInUrl = new URL(`/${locale}/sign-in`, request.url);
        return NextResponse.redirect(signInUrl);
    }

    return response;
}

export const config = {
    // Match only internationalized pathnames
    matcher: ['/', '/(zh|en)/:path*', '/((?!api|_next/static|_next/image|favicon.ico|assets).*)']
};
