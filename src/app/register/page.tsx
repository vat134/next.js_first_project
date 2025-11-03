import Link from 'next/link';

export default function RegisterPage() {
    return (
    <div className="flex items-center justify-center min-h-screen bg-gray-900">
        <div className="p-8 bg-gray-800 rounded-lg shadow-lg w-full max-w-sm text-center">
            <h1 className="text-2xl font-bold mb-6 text-white">User Credentials</h1>
            <div className="p-4 bg-gray-700 rounded-md text-left">
                <div className="mt-2 font-mono">
                    <p className="text-white"><strong>Email:</strong>test@test.com</p>
                    <p className="text-white"><strong>Password:</strong>1</p>
                </div>
            </div>
            <Link href="/login" className="block mt-6 text-cyan-400 hover:underline">
                Go to Login Page
            </Link>
        </div>
    </div>
    );
}