import { NextResponse } from 'next/server';

export async function GET() {
    const response = NextResponse.json({ success: true });

    response.cookies.set('session_token', '', {
    httpOnly: true,
    path: '/',
    maxAge: -1,
    });

    return response;
}