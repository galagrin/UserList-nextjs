// import Link from "next/link";
// import { User } from "../../interfaces/user";
// import CustomUserIdCard from "@/components/CustomUserIdCard/CustomUserIdCard";

// const fetchUserData = async (userId: number): Promise<User> => {
//     const response = await fetch(
//         `http://jsonplaceholder.typicode.com/users/${userId}`
//     );

//     if (!response.ok) {
//         throw new Error("Failed to fetch user data");
//     }

//     const data: User = await response.json();
//     return data;
// };

// export default async function UserIdPage({
//     params,
// }: {
//     params: Promise<{ userId: string }>;
// }) {

//     const { userId } = await params;
//     const numericUserId = Number(userId);
//     const user: User = await fetchUserData(numericUserId);

//     return (
//         <div className="flex flex-col justify-center items-center">
//             <Link
//                 href="/"
//                 className="py-6 font-bold duration-300 transition-all hover:text-green-800 hover:scale-150"
//             >
//                 Home
//             </Link>
//             <CustomUserIdCard user={user} loading={false} />
//         </div>
//     );
// }

import Link from "next/link";
import { User } from "../../interfaces/user";
import CustomUserIdCard from "@/components/CustomUserIdCard/CustomUserIdCard";

async function getUsers(): Promise<User[]> {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );
        if (!response.ok) {
            throw new Error(`Failed to fetch users: ${response.statusText}`);
        }
        return response.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        throw error;
    }
}

export async function generateStaticParams() {
    const users = await getUsers();
    return users.map((user) => ({
        userId: user.id.toString(),
    }));
}

export default async function UserIdPage({
    params,
}: {
    params: { userId: string };
}) {
    const users = await getUsers();
    const user = users.find((user) => user.id === Number(params.userId));

    if (!user) {
        throw new Error("User not found");
    }

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
}
