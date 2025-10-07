import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, Users } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="bg-background flex min-h-screen items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardContent className="flex flex-col items-center p-8 text-center">
          <div className="bg-muted mb-6 flex h-24 w-24 items-center justify-center rounded-full">
            <span className="text-muted-foreground text-4xl font-bold">
              404
            </span>
          </div>

          <h1 className="text-foreground mb-2 text-2xl font-semibold">
            Page non trouvée
          </h1>

          <p className="text-muted-foreground mb-8 leading-relaxed">
            Désolé, la page que vous recherchez n&apos;existe pas ou a été
            déplacée.
          </p>

          <div className="flex w-full flex-col gap-3 sm:flex-row">
            <Button asChild className="flex-1">
              <Link href="/" className="flex items-center justify-center gap-2">
                <Home className="h-4 w-4" />
                Accueil
              </Link>
            </Button>

            <Button variant="outline" asChild className="flex-1 bg-transparent">
              <Link
                href="/users"
                className="flex items-center justify-center gap-2"
              >
                <Users className="h-4 w-4" />
                Utilisateurs
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
