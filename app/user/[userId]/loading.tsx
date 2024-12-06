import CustomUserIdCard from '@/components/CustomUserIdCard/CustomUserIdCard';
import Skeleton from '@/components/ui/skeleton';

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center mx-auto m-4">
            <Skeleton className="w-64 h-12 mb-4" />
            <CustomUserIdCard loading={true} />
        </div>
    );
}
