import { User } from '@/app/interfaces/user';
import Skeleton from '@/components/ui/skeleton';

const CustomUserIdCard = ({ loading, user }: { loading: boolean; user?: User }) => {
    return (
        <div className="min-h-96 w-1/4 flex flex-col justify-evenly shadow-green-800/50 shadow-md  animate-fadeIn rounded-lg border bg-card text-card-foreground">
            <div className="self-center flex flex-col space-y-1.5 p-6 ">
                <div className="self-center text-2xl font-semibold leading-none tracking-tight">
                    {loading ? <Skeleton className="h-4 w-64 " /> : user?.name}
                </div>
                <div className="text-sm text-muted-foreground">{loading ? <Skeleton className="h-4 w-64 " /> : user?.email}</div>
            </div>
            <div className="self-center p-6 pt-0">
                {loading ? (
                    <>
                        <Skeleton className="h-8 w-64 m-6" />
                        <Skeleton className="h-8 w-64 m-6" />
                    </>
                ) : (
                    <>
                        <p>Phone: {user?.phone}</p>
                        <p>Website: {user?.website}</p>
                        <h2>Address:</h2>
                        <p>
                            {user?.address.zipcode}, {user?.address.city}, {user?.address.street}, {user?.address.suite}
                        </p>
                        <h2 className="pt-5">Company:</h2>
                        <p>{user?.company.name}</p>
                        <p>CatchPhrase: {user?.company.catchPhrase}</p>
                        <p>BS: {user?.company.bs}</p>
                    </>
                )}
            </div>
        </div>
    );
};

export default CustomUserIdCard;
