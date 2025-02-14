const apiConfig = {
  baseUrl: "https://api.themoviedb.org/3/",
  apiKey: "086cfe05dd16828e37291d2f37293a38",
  originalImage: (imgPath) => `https://image.tmdb.org/t/p/original/${imgPath}`,
  w500Image: (imgPath) => `https://image.tmdb.org/t/p/w500/${imgPath}`,
};

export default apiConfig;
