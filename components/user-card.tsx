'use client';

import type React from 'react';

import { useRouter } from 'next/navigation';
import type { User } from '@/types/user';
import Link from 'next/link';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Mail, Phone, Globe, MapPin, Building } from 'lucide-react';

interface UserCardProps {
  user: User;
  showDetails?: boolean;
  onClick?: () => void;
}

export default function UserCard({
  user,
  showDetails = false,
  onClick,
}: UserCardProps) {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    } else if (!showDetails) {
      router.push(`/users/${user.id}`);
    }
  };

  return (
    <Card
      className={`transition-all duration-200 ${!showDetails ? 'cursor-pointer hover:scale-[1.02] hover:shadow-lg' : ''}`}
      onClick={!showDetails ? handleClick : undefined}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start space-x-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-primary-foreground text-xl font-semibold">
              {user.name.charAt(0)}
            </AvatarFallback>
          </Avatar>
          <div className="min-w-0 flex-1">
            <h2 className="text-foreground truncate text-xl font-semibold">
              {user.name}
            </h2>
            <Badge variant="secondary" className="mt-1">
              @{user.username}
            </Badge>
            <div className="text-muted-foreground mt-2 flex items-center text-sm">
              <Mail className="mr-1 h-4 w-4" />
              <span className="truncate">{user.email}</span>
            </div>
          </div>
        </div>
      </CardHeader>

      {showDetails && (
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <h3 className="text-foreground mb-3 flex items-center font-medium">
                  <Phone className="mr-2 h-4 w-4" />
                  Contact
                </h3>
                <div className="space-y-2 text-sm">
                  <div className="text-muted-foreground flex items-center">
                    <Phone className="mr-2 h-4 w-4" />
                    {user.phone}
                  </div>
                  <div className="flex items-center">
                    <Globe className="mr-2 h-4 w-4" />
                    <Link
                      href={`https://${user.website}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline"
                    >
                      {user.website}
                    </Link>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <h3 className="text-foreground mb-3 flex items-center font-medium">
                  <MapPin className="mr-2 h-4 w-4" />
                  Address
                </h3>
                <div className="text-muted-foreground space-y-1 text-sm">
                  <p>
                    {user.address.street}, {user.address.suite}
                  </p>
                  <p>
                    {user.address.zipcode} {user.address.city}
                  </p>
                  <p className="text-xs">
                    📍 {user.address.geo.lat}, {user.address.geo.lng}
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card className="bg-muted/50">
              <CardContent className="p-4">
                <h3 className="text-foreground mb-3 flex items-center font-medium">
                  <Building className="mr-2 h-4 w-4" />
                  Company
                </h3>
                <div className="space-y-2">
                  <p className="text-foreground font-medium">
                    {user.company.name}
                  </p>
                  <p className="text-muted-foreground text-sm italic">
                    &quot;{user.company.catchPhrase}&quot;
                  </p>
                  <p className="text-muted-foreground font-mono text-xs">
                    {user.company.bs}
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="flex flex-wrap gap-2 border-t pt-4">
            <Button asChild size="sm">
              <Link href={`mailto:${user.email}`}>
                <Mail className="mr-2 h-4 w-4" />
                Email
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link href={`tel:${user.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call
              </Link>
            </Button>
            <Button asChild variant="outline" size="sm">
              <Link
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Globe className="mr-2 h-4 w-4" />
                Website
              </Link>
            </Button>
          </div>
        </CardContent>
      )}
    </Card>
  );
}
