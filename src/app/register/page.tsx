import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function RegisterPage() {
    return (
    <div className="flex items-center justify-center min-h-screen">
            <Card className="w-full max-w-sm">
                <CardHeader className="text-center">
                    <CardTitle>User Credentials</CardTitle>
                    <CardDescription>Use these credentials to log in.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Card>
                        <CardHeader className="font-mono text-sm space-y-1 mt-2">
                            <p><strong>Email:</strong> test@test.com</p>
                            <p><strong>Password:</strong> 1</p>
                        </CardHeader>
                    </Card>
                </CardContent>
                <CardFooter className="flex justify-center">
                    <Button asChild variant="link" className="p-0 h-auto">
                        <Link href="/login">Go to Login Page</Link>
                    </Button>
                </CardFooter>
            </Card>
        </div>
    );
}