import UserIdCard from '@/components/UserIdCard/UserIdCard';
import Link from 'next/link';
import { User } from '../../interfaces/user';

const fetchUserData = async (userId: number) => {
    const response = await fetch(`http://jsonplaceholder.typicode.com/users/${userId}`);
    const data: User = await response.json();
    return data;
};

export default async function UserIdPage({ params }: { params: { userId: number } }) {
    const { userId } = await params;
    const user: User = await fetchUserData(userId);

    return (
        <div className="flex flex-col justify-center items-center">
            <Link href="/" className="py-6 font-bold duration-300 transition-all  hover:text-green-800 hover:scale-150">
                Home
            </Link>
            <UserIdCard user={user} />
        </div>
    );
}
