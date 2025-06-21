'use client';

import { useRouter } from 'next/navigation';
import { User } from '@/types/user';
import Link from 'next/link';

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
    <div
      className={`rounded-lg border bg-white p-4 shadow transition-shadow ${!showDetails ? 'cursor-pointer hover:shadow-md' : ''}`}
      onClick={!showDetails ? handleClick : undefined}
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100 text-2xl font-bold text-blue-600">
            {user.name.charAt(0)}
          </div>
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="truncate text-xl font-semibold text-gray-900">
            {user.name}
          </h2>
          <p className="truncate text-sm text-gray-500">@{user.username}</p>
          <span className="mt-1 block text-sm text-blue-600 hover:underline">
            {user.email}
          </span>
        </div>
      </div>

      {showDetails && (
        <div className="mt-4 space-y-2 text-sm">
          <div className="rounded bg-gray-50 p-3">
            <h3 className="font-medium text-gray-900">Contact</h3>
            <p className="text-gray-600">📱 {user.phone}</p>
            <p className="text-gray-600">
              <Link
                href={`https://${user.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                🌐 {user.website}
              </Link>
            </p>
          </div>

          <div className="rounded bg-gray-50 p-3">
            <h3 className="font-medium text-gray-900">Adresse</h3>
            <p className="text-gray-600">
              {user.address.street}, {user.address.suite}
            </p>
            <p className="text-gray-600">
              {user.address.zipcode} {user.address.city}
            </p>
            <p className="text-xs text-gray-500">
              📍 {user.address.geo.lat}, {user.address.geo.lng}
            </p>
          </div>

          <div className="rounded bg-gray-50 p-3">
            <h3 className="font-medium text-gray-900">Entreprise</h3>
            <p className="font-medium">{user.company.name}</p>
            <p className="text-gray-600 italic">
              &lsquo;{user.company.catchPhrase}&lsquo;
            </p>
            <p className="text-sm text-gray-500">{user.company.bs}</p>
          </div>
        </div>
      )}
    </div>
  );
}
