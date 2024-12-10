import Link from "next/link";
import { User } from "../../interfaces/user";
import CustomUserIdCard from "@/components/CustomUserIdCard/CustomUserIdCard";

const fetchUserData = async (userId: number): Promise<User> => {
    const response = await fetch(
        `http://jsonplaceholder.typicode.com/users/${userId}`
    );
    if (!response.ok) {
        throw new Error("Failed to fetch user data");
    }
    const data: User = await response.json();
    return data;
};
interface PageProps {
    params: {
        userId: string;
    };
    searchParams?: { [key: string]: string | string[] | undefined };
}

const UserIdPage = async ({ params }: PageProps) => {
    const { userId } = await params;
    const userIdNumber = parseInt(userId);
    const user: User = await fetchUserData(userIdNumber);

    return (
        <div className="flex flex-col justify-center items-center">
            <Link
                href="/"
                className="py-6 font-bold duration-300 transition-all hover:text-green-800 hover:scale-150"
            >
                Home
            </Link>
            <CustomUserIdCard user={user} loading={false} />
        </div>
    );
};

export default UserIdPage;
