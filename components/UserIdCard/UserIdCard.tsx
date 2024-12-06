// import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
// import { User } from '@/app/interfaces/user';

// const UserIdCard = ({ user }: { user: User }) => {
//     return (
//         <Card className="min-h-96 flex flex-col justify-evenly shadow-green-800/50 shadow-md bg-slate-100 animate-fadeIn">
//             <CardHeader className="self-center">
//                 <CardTitle className="self-center">{user.name}</CardTitle>
//                 <CardDescription className="self-center">{user.email}</CardDescription>
//             </CardHeader>
//             <CardContent className="self-center">
//                 <p>Phone: {user.phone}</p>
//                 <p>Website: {user.website}</p>
//                 <h2>Address:</h2>
//                 <p>
//                     {user.address.zipcode}, {user.address.city}, {user.address.street}, {user.address.suite}
//                 </p>
//                 <h2 className="pt-5">Company:</h2>
//                 <p>{user.company.name}</p>
//                 <p>CatchPhrase: {user.company.catchPhrase}</p>
//                 <p>BS: {user.company.bs}</p>
//             </CardContent>
//         </Card>
//     );
// };

// export default UserIdCard;

import { User } from '@/app/interfaces/user';

const UserIdCard = ({ user }: { user: User }) => {
    return (
        <div className="min-h-96 flex flex-col justify-evenly shadow-green-800/50 shadow-md bg-slate-100 animate-fadeIn rounded-lg border bg-card text-card-foreground">
            <div className="self-center flex flex-col space-y-1.5 p-6">
                <div className="self-center text-2xl font-semibold leading-none tracking-tight">{user.name}</div>
                <div className="self-center">{user.email}</div>
            </div>
            <div className="self-center p-6 pt-0">
                <p>Phone: {user.phone}</p>
                <p>Website: {user.website}</p>
                <h2>Address:</h2>
                <p>
                    {user.address.zipcode}, {user.address.city}, {user.address.street}, {user.address.suite}
                </p>
                <h2 className="pt-5">Company:</h2>
                <p>{user.company.name}</p>
                <p>CatchPhrase: {user.company.catchPhrase}</p>
                <p>BS: {user.company.bs}</p>
            </div>
        </div>
    );
};

export default UserIdCard;
