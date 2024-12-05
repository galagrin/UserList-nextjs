import Link from 'next/link';

export default function NotFound() {
    return (
        <div className="flex justify-center items-center flex-col h-lvh">
            <h2>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link
                href="/"
                className="bg-gray-200 mt-4 text-black py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white transition ease-in-out"
            >
                Return Home
            </Link>
        </div>
    );
}
