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

const fetchUserData = async (userId: number): Promise<User> => {
    try {
        const response = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        );

        if (!response.ok) {
            throw new Error(
                `Failed to fetch user data: ${response.statusText}`
            );
        }

        const data: User = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching user:", error);
        throw error;
    }
};

export default async function UserIdPage({
    params,
}: {
    params: { userId: string };
}) {
    const { userId } = await params;
    const numericUserId = Number(userId);
    const user: User = await fetchUserData(numericUserId);

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
