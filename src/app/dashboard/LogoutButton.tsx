'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/logout');

        router.push('/login');
    };

    return (
    <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-600 text-white font-semibold rounded-lg hover:bg-red-700 active:scale-95 transition-all"
    >
        Logout
    </button>
    );
}