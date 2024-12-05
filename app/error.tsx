'use client';

import { useEffect } from 'react';

export default function Error({ error, reset }: { error: Error & { digest?: string }; reset: () => void }) {
    useEffect(() => {
        console.error(error);
    }, [error]);

    return (
        <div className="flex justify-center items-center flex-col h-lvh">
            <h2>Something went wrong</h2>
            <button
                onClick={() => reset()}
                className="bg-gray-200 text-black py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white  transition ease-in-out"
            >
                Try again
            </button>
        </div>
    );
}
