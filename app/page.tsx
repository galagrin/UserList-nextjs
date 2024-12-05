import UserCard from '@/components/UserCard/UserCard';
import { User } from './interfaces/user';

const fetchData = async () => {
    const response = await fetch('http://jsonplaceholder.typicode.com/users');
    if (!response.ok) {
        throw new Error('Failed to fetch');
    }
    const data: User[] = await response.json();
    return data;
};

export default async function Home() {
    const users = await fetchData();
    await new Promise((resolve) => setTimeout(resolve, 3000)); // Задержка в 3 секунды для проверки загрузчика. Надо убрать потом

    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <h1 className="text-3xl font-bold text-center mb-4">Users List</h1>
            <div className="flex flex-wrap justify-center ">{users && users.map((user: User) => <UserCard key={user.id} user={user} />)}</div>
        </div>
    );
}
