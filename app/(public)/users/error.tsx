'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Error:', error);
  }, [error]);

  return (
    <div className="mx-auto max-w-7xl p-6">
      <div className="rounded-lg bg-red-50 p-6">
        <h2 className="mb-4 text-2xl font-bold text-red-800">
          Une erreur est survenue
        </h2>
        <p className="mb-4 text-red-700">
          {error.message ||
            'Impossible de charger les données des utilisateurs.'}
        </p>
        <div className="flex space-x-4">
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
            Retour à la liste
          </Link>
        </div>
      </div>
    </div>
  );
}
