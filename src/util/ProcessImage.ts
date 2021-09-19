const processImageUrl = (imageUrl: string) => {
  const em = parseFloat(getComputedStyle(document.documentElement).fontSize);
  const newUrl = imageUrl
    .replace(/(w(idth)?=)\d+/, `$1${Math.floor(15 * em)}`)
    .replace(/ops=\d+_\d+/, `ops=${em * 15}_${em * 9}`)
    .replace(/(https:\/\/storage.googleapis.com\/.*)\/\d+.(jpeg|png|jpg)/, `$1/200.$2`);
  if (imageUrl !== newUrl) {
    console.log('newurl', newUrl);
  }
  return newUrl;
};

export {processImageUrl};
