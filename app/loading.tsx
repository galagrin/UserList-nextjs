import Skeleton from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <Skeleton className="w-64 h-12 mb-4" />
            <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 10 }).map((_, index) => (
                    <div className="m-4 w-1/3 rounded-lg border bg-card text-card-foreground shadow-sm" key={index}>
                        <div className="flex flex-col space-y-1.5 p-6">
                            <div className="text-2xl font-semibold leading-none tracking-tight">
                                <Skeleton className="h-4 grow" />
                            </div>
                            <div className="text-sm text-muted-foreground">
                                <Skeleton className="h-4 grow " />
                            </div>
                        </div>
                        <div className="p-6 pt-0">
                            <Skeleton className="h-12 grow " />
                        </div>
                        <div className="flex items-center p-6 pt-0">
                            <Skeleton className="h-12 w-1/3 " />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
