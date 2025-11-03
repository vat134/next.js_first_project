import LogoutButton from './LogoutButton';
import SpotlightCard from '@/components/SpotlightCard';

export default function DashboardPage() {
    return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-950 p-4 text-white">
        <div className="absolute top-5 right-5">
            <LogoutButton />
        </div>
        <div className="text-center mb-12">
            <h1 className="text-4xl font-bold">Welcome to the Dashboard !</h1>
            <p className="text-gray-400 mt-2">Move your mouse over the cards below.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full max-w-6xl">
            <SpotlightCard className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-cyan-400">Card One</h3>
                <p className="mt-2 text-gray-400">Hover ME :)</p>
            </SpotlightCard>
            <SpotlightCard className="flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-purple-400">Card Two</h3>
                <p className="mt-2 text-gray-400">Tailwind CSS and React</p>
            </SpotlightCard>
            <SpotlightCard className="md:col-span-2 lg:col-span-1 flex flex-col items-center text-center">
                <h3 className="text-2xl font-bold text-green-400">Card Three</h3>
                <p className="mt-2 text-gray-400">....</p>
            </SpotlightCard>
        </div>
    </div>
    );
}