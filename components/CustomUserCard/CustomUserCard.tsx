'use client';

import { useRouter } from 'next/navigation';
import { User } from '@/app/interfaces/user';
import Skeleton from '@/components/ui/skeleton';

const CustomUserCard = ({ loading, user }: { loading: boolean; user?: User }) => {
    const router = useRouter();
    return (
        <div className="m-4 w-1/3 shadow-green-800/50 shadow-md animate-fadeIn rounded-lg border bg-card text-card-foreground ">
            <div className="flex flex-col space-y-1.5 p-6">
                <div className="text-2xl font-semibold leading-none tracking-tight">{loading ? <Skeleton className="h-4 grow" /> : user?.name}</div>
                <div className="text-sm text-muted-foreground">{loading ? <Skeleton className="h-4 grow " /> : user?.email}</div>
            </div>
            <div className="p-6 pt-0">
                {loading ? (
                    <Skeleton className="h-12 grow " />
                ) : (
                    <>
                        <p>Company name: {user?.company.name}</p>
                        <p>catchPhrase: {user?.company.catchPhrase}</p>
                        <p>bs: {user?.company.bs}</p>
                    </>
                )}
            </div>
            <div className="flex items-center p-6 pt-0">
                {loading ? (
                    <Skeleton className="h-12 w-1/3 " />
                ) : (
                    <button
                        className="bg-gray-200 text-black py-2 px-4 rounded duration-300 hover:bg-green-800 hover:text-white  transition ease-in-out "
                        onClick={() => router.push(`/user/${user?.id}`)}
                    >
                        more details
                    </button>
                )}
            </div>
        </div>
    );
};

export default CustomUserCard;
