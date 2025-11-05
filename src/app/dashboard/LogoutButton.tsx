'use client';

import { useRouter } from 'next/navigation';

import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';

export default function LogoutButton() {
    const router = useRouter();

    const handleLogout = async () => {
        await fetch('/api/logout');

        router.push('/login');
    };

    return (
    <Button
        variant="destructive"
        onClick={handleLogout}
    >
        <LogOut className="mr-2 h-4 w-4" suppressHydrationWarning/>
        Logout
    </Button>
    );
}