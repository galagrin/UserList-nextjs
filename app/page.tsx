import UserCard from '@/components/UserCard/UserCard';
import { notFound } from 'next/navigation';
import { User } from './interfaces/user';

const fetchData = async () => {
    try {
        const response = await fetch('http://jsonplaceholder.typicode.com/users');
        const data: User[] = await response.json();
        return data;
    } catch (error: unknown) {
        console.log('Error:', error);
    }
};

export default async function Home() {
    const users = await fetchData();
    if (!users) notFound();

    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <h1 className="text-3xl font-bold text-center mb-4">Users List</h1>
            <div className="flex flex-wrap justify-center ">{users && users.map((user: User) => <UserCard key={user.id} user={user} />)}</div>
        </div>
    );
}
