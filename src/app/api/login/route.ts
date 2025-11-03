import { sign } from 'jsonwebtoken';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    const body = await request.json();
    const { email, password } = body;

    const validEmail = 'test@test.com';
    const validPassword = '1';

    if (email === validEmail && password === validPassword) {
    const token = sign(
        { email },
        process.env.JWT_SECRET as string,
        { expiresIn: '1h' }
    );

    const response = NextResponse.json({ success: true });

    response.cookies.set('session_token', token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60,
        path: '/',
    });

    return response;
    }

    return NextResponse.json({ success: false, message: 'Invalid credentials' }, { status: 401 });
}