
const API_KEY = import.meta.env.VITE_OMDB_API_KEY;
const BASE_URL = 'https://www.omdbapi.com/';

if (!API_KEY) {
  throw new Error('Missing VITE_OMDB_API_KEY environment variable');
}

// Función interna para realizar peticiones HTTP
async function request(params) {
  const queryParams = new URLSearchParams({
    apikey: API_KEY,
    ...params,
  });

  const response = await fetch(`${BASE_URL}?${queryParams}`);

  // Comprobar errores HTTP
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }

  // Convertir la respuesta a JSON
  const data = await response.json();

  // Comprobar errores propios de OMDb
  if (data.Response === 'False') {
    throw new Error(data.Error || 'OMDb request failed');
  }

  return data;
}

// Buscar películas
export async function searchMovies(params) {
  return request({
    s: params.query,
    type: params.type || 'movie',
    y: params.year || '',
    page: params.page || 1,
  });
}

// Obtener detalles de una película
export async function getMovieDetails(imdbID) {
  return request({
    i: imdbID,
    plot: 'full',
  });
}
