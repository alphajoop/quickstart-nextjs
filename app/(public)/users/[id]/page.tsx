import Link from 'next/link';
import { fetchUserById } from '@/lib/api';
import UserCard from '@/components/UserCard';

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
        <div className="mx-auto max-w-4xl p-6">
          <h1 className="text-2xl font-bold text-red-600">
            Utilisateur non trouvé
          </h1>
          <p className="mt-4 text-gray-700">
            L&lsquo;utilisateur que vous cherchez n&lsquo;existe pas ou a été
            supprimé.
          </p>
          <Link
            href="/users"
            className="mt-6 inline-flex items-center text-blue-600 hover:underline"
          >
            Retour à la liste des utilisateurs
          </Link>
        </div>
      );
    }

    return (
      <div className="mx-auto max-w-4xl p-6">
        <div className="mb-8">
          <Link
            href="/users"
            className="inline-flex items-center text-blue-600 hover:underline"
          >
            ← Retour à la liste
          </Link>
        </div>

        <UserCard user={user} showDetails={true} />

        <div className="mt-8 border-t border-gray-200 pt-6">
          <h2 className="mb-4 text-xl font-semibold text-gray-800">
            Autres actions
          </h2>
          <div className="flex flex-wrap gap-4">
            <Link
              href={`mailto:${user.email}`}
              className="rounded-lg bg-blue-600 px-4 py-2 text-white transition-colors hover:bg-blue-700"
            >
              Envoyer un email
            </Link>
            <Link
              href={`tel:${user.phone}`}
              className="rounded-lg bg-green-600 px-4 py-2 text-white transition-colors hover:bg-green-700"
            >
              Appeler
            </Link>
            <Link
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg bg-purple-600 px-4 py-2 text-white transition-colors hover:bg-purple-700"
            >
              Visiter le site web
            </Link>
          </div>
        </div>
      </div>
    );
  } catch (error) {
    return (
      <div className="mx-auto max-w-4xl p-6">
        <div className="rounded-lg bg-red-50 p-4">
          <h1 className="text-2xl font-bold text-red-600">
            Erreur de chargement
          </h1>
          <p className="mt-2 text-red-700">
            {error instanceof Error
              ? error.message
              : 'Une erreur est survenue lors du chargement des données.'}
          </p>
          <Link
            href="/users"
            className="mt-6 inline-flex items-center text-blue-600 hover:underline"
          >
            Retour à la liste des utilisateurs
          </Link>
        </div>
      </div>
    );
  }
}
