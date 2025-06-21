import { fetchAllUsers } from '@/lib/api';
import UserCard from '@/components/UserCard';
import Link from 'next/link';
import type { User } from '@/types/user';

export default async function UsersPage() {
  try {
    const users = await fetchAllUsers();

    if (!users || users.length === 0) {
      return (
        <div className="mx-auto max-w-7xl p-6">
          <p className="text-gray-600">Aucun utilisateur trouvé.</p>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-7xl p-6">
        <h1 className="mb-8 text-3xl font-bold text-gray-800">
          Liste des utilisateurs
        </h1>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {users.map((user: User) => (
            <Link
              key={user.id}
              href={`/users/${user.id}`}
              className="block transition-transform hover:scale-[1.02]"
            >
              <UserCard user={user} />
            </Link>
          ))}
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="mx-auto max-w-7xl p-6">
        <div className="rounded-lg bg-red-50 p-4">
          <h2 className="text-lg font-medium text-red-800">
            Erreur de chargement
          </h2>
          <p className="mt-2 text-red-700">
            {error instanceof Error ? error.message : 'Une erreur est survenue'}
          </p>
          <Link
            href="/users"
            className="mt-4 inline-block rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-200"
          >
            Réessayer
          </Link>
        </div>
      </div>
    );
  }
}
