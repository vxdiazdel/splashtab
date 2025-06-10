export type User = {
  firstName?: string;
  lastName?: string;
  url?: string;
};

export type ImageResponse = {
  user: User;
  imgUrl?: string;
};

export const fetchRandomImage = async (): Promise<ImageResponse> => {
  const data = await fetch(
    `${import.meta.env.VITE_UNSPLASH_API_URL}/photos/random?collections=407466&client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}`,
  ).then((res) => res.json());

  return {
    user: {
      firstName: data?.user?.first_name,
      lastName: data?.user.last_name,
      url: data?.links?.html,
    },
    imgUrl: data?.urls?.full,
  };
};

export const renderPhotoCredit = (el: HTMLElement, user: User) => {
  const content = user?.url
    ? `<a href="${user.url}" target="_blank" rel="noopener noreferrer">📸 ${user?.firstName} ${user?.lastName}</a>`
    : `${user?.firstName} ${user?.lastName}`;

  el.innerHTML = content;
};
