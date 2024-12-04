'use client';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { useRouter } from 'next/navigation';
import { User } from '@/app/interfaces/user';

const UserCard = ({ user }: { user: User }) => {
    const router = useRouter();
    return (
        <Card className="m-4 w-1/3 shadow-green-800/50 shadow-md animate-fadeIn">
            <CardHeader>
                <CardTitle>{user.name}</CardTitle>
                <CardDescription>{user.email}</CardDescription>
            </CardHeader>
            <CardContent>
                <p>Company name: {user.company.name}</p>
                <p>catchPhrase: {user.company.catchPhrase}</p>
                <p>bs: {user.company.bs}</p>
            </CardContent>
            <CardFooter>
                <button
                    className="bg-gray-200 text-black   py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white  transition ease-in-out "
                    onClick={() => router.push(`/${user.id}`)}
                >
                    more details
                </button>
            </CardFooter>
        </Card>
    );
};

export default UserCard;
