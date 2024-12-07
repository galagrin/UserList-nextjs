import CustomUserCard from '@/components/CustomUserCard/CustomUserCard';
import Skeleton from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <Skeleton className="w-64 h-12 mb-4" />
            <div className="flex justify-center gap-4 flex-wrap">
                {Array.from({ length: 10 }).map((_, index) => (
                    <CustomUserCard loading={true} key={index} />
                ))}
            </div>
        </div>
    );
}
