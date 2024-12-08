'use client';
import { User } from '@/app/interfaces/user';
import { useState } from 'react';
import CustomUserCard from '../CustomUserCard/CustomUserCard';
import Search from '../Search/Search';

const CardsContainer = ({ data }: { data: User[] }) => {
    const [isSeachUsed, setIsSeachUsed] = useState<boolean>(false);
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
        setFoundUsers(matchedUser);
        setIsSeachUsed(true);
        setInputValue('');
    };

    const handleReset = () => {
        setFoundUsers([]);
        setIsSeachUsed(false);
        setInputValue('');
    };

    return (
        <>
            <Search data={data} handleSubmit={handleSubmit} handleInputChange={handleInputChange} inputValue={inputValue} />
            {isSeachUsed && foundUsers.length > 0 && (
                <>
                    <div className="flex w-svw justify-center">
                        {foundUsers.map((user) => (
                            <CustomUserCard key={user.id} loading={false} user={user} />
                        ))}
                    </div>
                    <button
                        className="bg-gray-200 text-black py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white  transition ease-in-out"
                        onClick={handleReset}
                    >
                        back to all
                    </button>
                </>
            )}
            {!isSeachUsed && (
                <div className="flex flex-wrap justify-center">
                    {data.map((user) => (
                        <CustomUserCard key={user.id} loading={false} user={user} />
                    ))}
                </div>
            )}
        </>
    );
};

export default CardsContainer;
