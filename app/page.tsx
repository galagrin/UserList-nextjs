import Search from '@/components/Search/Search';
import { User } from './interfaces/user';
import CustomUserCard from '@/components/CustomUserCard/CustomUserCard';
import { data } from 'autoprefixer';

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

    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <h1 className="text-3xl font-bold text-center mb-4">Users List</h1>
            <Search data={users} />
            <div className="flex flex-wrap justify-center ">
                {users && users.map((user: User) => <CustomUserCard key={user.id} user={user} loading={false} />)}
            </div>
        </div>
    );
}
