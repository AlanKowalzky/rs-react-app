const API_URL = 'https://pokeapi.co/api/v2/pokemon';

export default async function fetchData(searchTerm: string) {
  const url = searchTerm
    ? `${API_URL}/${searchTerm}`
    : `${API_URL}?limit=10&offset=0`; // Domyślna strona

  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Error fetch API: ${response.status}`);
  }
  return await response.json();
}
