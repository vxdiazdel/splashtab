export const fetchRandomImageUrl = async () => {
  const data = await fetch(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?collections=407466&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  ).then((res) => res.json());

  return data?.urls?.full || '';
};
