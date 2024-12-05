import { Skeleton } from '@/components/ui/skeleton';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <Skeleton className="w-64 h-12 mb-4" />
            <Card className="min-h-96 w-1/3">
                <CardHeader>
                    <CardTitle>
                        <Skeleton className="h-4 grow" />
                    </CardTitle>
                    <CardDescription>
                        <Skeleton className="h-4 grow " />
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <Skeleton className="h-12 grow " />
                </CardContent>
                <CardFooter>
                    <Skeleton className="h-12 grow " />
                </CardFooter>
            </Card>
        </div>
    );
}