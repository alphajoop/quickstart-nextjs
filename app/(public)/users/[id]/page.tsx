import Link from 'next/link';
import { fetchUserById } from '@/lib/api';
import UserCard from '@/components/user-card';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowLeft, AlertCircle, UserX } from 'lucide-react';

export default async function UserDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  try {
    const { id } = await params;
    const user = await fetchUserById(id);

    if (!user) {
      return (
        <div className="container mx-auto max-w-4xl p-6">
          <Card className="border-destructive">
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <UserX className="text-destructive mt-0.5 h-6 w-6" />
                <div className="flex-1">
                  <h1 className="text-destructive mb-2 text-2xl font-bold">
                    User not found
                  </h1>
                  <p className="text-muted-foreground mb-4">
                    The user you are looking for does not exist or has been
                    deleted.
                  </p>
                  <Button asChild variant="outline">
                    <Link href="/users">
                      <ArrowLeft className="mr-2 h-4 w-4" />
                      Back to list
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="container mx-auto max-w-4xl p-6">
        <div className="mb-8">
          <Button asChild variant="ghost" className="mb-4">
            <Link href="/users">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to list
            </Link>
          </Button>

          <div className="mb-4">
            <h1 className="text-foreground mb-2 text-3xl font-bold">
              User Profile
            </h1>
            <p className="text-muted-foreground">Complete user details</p>
          </div>
        </div>

        <UserCard user={user} showDetails={true} />
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto max-w-4xl p-6">
        <Card className="border-destructive">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="text-destructive mt-0.5 h-6 w-6" />
              <div className="flex-1">
                <h1 className="text-destructive mb-2 text-2xl font-bold">
                  Loading error
                </h1>
                <p className="text-muted-foreground mb-4">
                  {error instanceof Error
                    ? error.message
                    : 'An error occurred while loading data.'}
                </p>
                <Button asChild variant="outline">
                  <Link href="/users">
                    <ArrowLeft className="mr-2 h-4 w-4" />
                    Back to list
                  </Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
