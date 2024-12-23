import { User } from "@/app/interfaces/user";

export async function getUsers(): Promise<User[]> {
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/users", {
            next: { revalidate: 3600 },
        });

        if (!res.ok) throw new Error("Failed to fetch users");

        return await res.json();
    } catch (error) {
        console.error("Error fetching users:", error);
        return [];
    }
}
