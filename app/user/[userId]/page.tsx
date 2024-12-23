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

// import Link from "next/link";
// import { User } from "../../interfaces/user";
// import CustomUserIdCard from "@/components/CustomUserIdCard/CustomUserIdCard";
// import { notFound } from "next/navigation";

// async function getUsers(): Promise<User[]> {
//     try {
//         const response = await fetch(
//             `https://jsonplaceholder.typicode.com/users`,
//             { next: { revalidate: 3600 } }
//         );
//         if (!response.ok) {
//             throw new Error(`Failed to fetch users: ${response.statusText}`);
//         }
//         return response.json();
//     } catch (error) {
//         console.error("Error fetching users:", error);
//         return [];
//     }
// }

// async function getUser(userId: string): Promise<User | undefined> {
//     try {
//         const users = await getUsers();
//         return users.find((user) => user.id.toString() === userId);
//     } catch (error) {
//         console.error("Error finding user:", error);
//         return undefined;
//     }
// }

// export async function generateStaticParams() {
//     const users = await getUsers();
//     return users.map((user) => ({
//         userId: user.id.toString(),
//     }));
// }

// export default async function UserIdPage({
//     params,
// }: {
//     params: { userId: string };
// }) {
//     const user = await getUser(params.userId);

//     if (!user) {
//         notFound();
//     }

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
import { notFound } from "next/navigation";
import { getUsers } from "@/lib/getUsers";

export async function generateStaticParams() {
    const users = await getUsers();
    return users.map((user) => ({
        userId: user.id.toString(),
    }));
}

export default async function UserIdPage({
    params,
}: {
    params: Promise<{ userId: string }>;
}) {
    const resolvedParams = await params;
    const users = await getUsers();
    const user = users.find(
        (u: User) => u.id.toString() === resolvedParams.userId
    );

    if (!user) notFound();

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
