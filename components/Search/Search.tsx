'use client';
import { User } from '@/app/interfaces/user';
import { useState } from 'react';
import CustomUserCard from '../CustomUserCard/CustomUserCard';

const Search = ({ data }: { data: User[] }) => {
    const [inputValue, setInputValue] = useState<string>('');
    const [foundUsers, setFoundUsers] = useState<User[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
    };
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (inputValue === '') {
            return;
        }

        const matchedUser = data.filter((user) => user.name.toLowerCase().includes(inputValue.toLowerCase()));
        console.log(matchedUser);
        setFoundUsers(matchedUser);
        setInputValue('');
    };

    return (
        <>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    onChange={(e) => handleInputChange(e)}
                    value={inputValue}
                    placeholder="enter user name"
                    className="border border-green-800 rounded-md p-1.5 mr-4 outline-green-800"
                />
                <button
                    type="submit"
                    className="bg-gray-200 text-black py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white  transition ease-in-out"
                >
                    search
                </button>
            </form>
            {foundUsers.length > 0 && (
                <div className="flex w-svw justify-center">
                    {foundUsers.map((user) => (
                        <CustomUserCard key={user.id} loading={false} user={user} />
                    ))}
                </div>
            )}
        </>
    );
};

export default Search;
