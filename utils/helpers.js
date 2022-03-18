export const pageTitle = (title, volumen) =>
  volumen ? `${title} Vol. ${volumen}` : title;

export const getUrlForTwitterMedia = (type) => {
  switch (type) {
    case 'photo':
      return 'url';

    case 'animated_gif':
    case 'video':
      return 'preview_image_url';

    default:
      return 'url';
  }
};

export const formatTweetMetrics = (value) => {
  if (value < 10000) {
    return new Intl.NumberFormat('en-US').format(value);
  }

  const newValue = value / 1000;

  const noDecimals = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 0,
  });

  const decimals = new Intl.NumberFormat('en-US', {
    maximumFractionDigits: 1,
  });

  if (newValue % 1 === 0) {
    return noDecimals.format(newValue).concat('K');
  }

  return decimals.format(newValue).concat('K');
};
