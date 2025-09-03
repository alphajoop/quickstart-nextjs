const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL || 'https://jsonplaceholder.typicode.com';

// Récupère tous les utilisateurs
export async function fetchAllUsers() {
  try {
    const res = await fetch(`${BASE_URL}/users`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error('Erreur API:', error);
    throw new Error('Erreur de connexion. Veuillez réessayer plus tard.');
  }
}

// Récupère un utilisateur par son ID
export async function fetchUserById(id: string) {
  try {
    const res = await fetch(`${BASE_URL}/users/${id}`);
    if (!res.ok) {
      return null;
    }
    return res.json();
  } catch (error) {
    console.error('Erreur API:', error);
    throw new Error(
      "Erreur lors de la récupération des détails de l'utilisateur",
    );
  }
}
