'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
  params,
}: {
  error: Error & { digest?: string };
  reset: () => void;
  params: { id: string };
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="mx-auto max-w-4xl p-6">
      <div className="rounded-lg bg-red-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-800">
          Erreur lors du chargement du profil
        </h2>
        <p className="mb-4 text-red-700">
          {error.message ||
            'Impossible de charger les données du profil utilisateur.'}
        </p>
        <div className="flex flex-wrap gap-4">
          <button
            onClick={reset}
            className="rounded-md bg-red-100 px-4 py-2 text-sm font-medium text-red-800 hover:bg-red-200"
          >
            Réessayer
          </button>
          <Link
            href="/users"
            className="rounded-md bg-blue-100 px-4 py-2 text-sm font-medium text-blue-800 hover:bg-blue-200"
          >
            Retour à la liste des utilisateurs
          </Link>
        </div>
      </div>
    </div>
  );
}
