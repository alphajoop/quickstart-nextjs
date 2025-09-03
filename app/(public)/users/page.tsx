import { fetchAllUsers } from '@/lib/api';
import UserCard from '@/components/user-card';
import Link from 'next/link';
import type { User } from '@/types/user';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { AlertCircle, Users } from 'lucide-react';

export default async function UsersPage() {
  try {
    const users = await fetchAllUsers();

    if (!users || users.length === 0) {
      return (
        <div className="container mx-auto max-w-7xl p-6">
          <Card>
            <CardContent className="flex flex-col items-center justify-center py-12">
              <Users className="text-muted-foreground mb-4 h-12 w-12" />
              <p className="text-muted-foreground text-center">
                No users found.
              </p>
            </CardContent>
          </Card>
        </div>
      );
    }

    return (
      <div className="container mx-auto max-w-7xl p-6">
        <div className="mb-8">
          <h1 className="text-foreground mb-2 text-3xl font-bold">
            Users List
          </h1>
          <p className="text-muted-foreground">
            Discover all users on our platform
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user: User) => (
            <Link key={user.id} href={`/users/${user.id}`} className="block">
              <UserCard user={user} />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="container mx-auto max-w-7xl p-6">
        <Card className="border-destructive">
          <CardContent className="p-6">
            <div className="flex items-start space-x-4">
              <AlertCircle className="text-destructive mt-0.5 h-6 w-6" />
              <div className="flex-1">
                <h2 className="text-destructive mb-2 text-lg font-medium">
                  Loading error
                </h2>
                <p className="text-muted-foreground mb-4">
                  {error instanceof Error ? error.message : 'An error occurred'}
                </p>
                <Button asChild variant="outline">
                  <Link href="/users">Try again</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }
}
