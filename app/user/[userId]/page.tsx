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
