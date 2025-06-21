import { Spinner } from '@/components/Spinner';

export default function Loading() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <Spinner size="lg" />
        <p className="mt-4 text-lg text-gray-600">
          Chargement du profil utilisateur...
        </p>
      </div>
    </div>
  );
}
