// import { cn } from '@/lib/utils';

// function Skeleton({ className, ...props }: React.HTMLAttributes<HTMLDivElement>) {
//     return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
// }

// export { Skeleton };

import { cn } from '@/lib/utils';

interface SkeletonProps extends React.HTMLAttributes<HTMLDivElement> {
    className: string;
}
function Skeleton({ className, ...props }: SkeletonProps) {
    return <div className={cn('animate-pulse rounded-md bg-muted', className)} {...props} />;
}

export default Skeleton;
