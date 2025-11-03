import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { jwtVerify } from 'jose';

export async function middleware(request: NextRequest) {
    const token = request.cookies.get('session_token')?.value;
    const loginUrl = new URL('/login', request.url);

    if (!token) {
    return NextResponse.redirect(loginUrl);
    }

    try {
    await jwtVerify(token, new TextEncoder().encode(process.env.JWT_SECRET as string));
    return NextResponse.next();
    } catch (error) {
    return NextResponse.redirect(loginUrl);
    }
}

export const config = {
    matcher: '/dashboard/:path*',
};