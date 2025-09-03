import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { Button } from '@/components/ui/button';

export default function UserDetailLoading() {
  return (
    <div className="container mx-auto max-w-4xl p-6">
      <div className="mb-6">
        <Button variant="ghost" className="mb-4" disabled>
          <Skeleton className="h-4 w-20" />
        </Button>
        <div className="mb-6">
          <Skeleton className="mb-2 h-8 w-64" />
          <Skeleton className="h-5 w-48" />
        </div>
      </div>

      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col space-y-6 sm:flex-row sm:space-y-0 sm:space-x-6">
            <Skeleton className="mx-auto h-32 w-32 rounded-full sm:mx-0" />
            <div className="flex-1 space-y-4">
              <div className="space-y-2">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-4 w-36" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-4 w-40" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-28" />
                <Skeleton className="h-4 w-48" />
              </div>
              <div className="space-y-2">
                <Skeleton className="h-4 w-24" />
                <Skeleton className="h-4 w-36" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
