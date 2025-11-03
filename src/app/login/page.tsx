'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
        router.push('/dashboard');
    } else {
        const data = await response.json();
        setError(data.message || 'Login failed.');
    }
    };

    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-sm">
            <h1 className="text-2xl font-bold mb-6 text-white text-center">Login</h1>
            <form onSubmit={handleSubmit}>
                {}
                <div className="mb-4">
                    <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
                    <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500" required />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-cyan-500" required />
                </div>
                {error && <p className="text-red-500 text-center mb-4">{error}</p>}
                <button type="submit" className="w-full py-2 bg-cyan-600 text-white font-semibold rounded-lg hover:bg-cyan-700 transition-all">
                    Login
                </button>
            </form>
            <p className="text-center text-gray-400 mt-4">
                Need credentials?{' '}
                <Link href="/register" className="text-cyan-400 hover:underline">
                    Check here
                </Link>
            </p>
        </div>
    </div>
    );
}