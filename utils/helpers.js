export const pageTitle = (title, volumen) =>
  volumen ? `${title} Vol. ${volumen}` : title;

export const getUrlForTwitterMedia = (type) => {
  switch (type) {
    case 'photo':
      return 'url';

    case 'animated_gif':
      return 'preview_image_url';

    default:
      return 'url';
  }
};
