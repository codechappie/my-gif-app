export const getGifs = async (category) => {
    console.log(category)
    const url = `https://api.giphy.com/v1/gifs/search?api_key=J1JmDsoygtpT53wx8xJ2kkfbWDXK3lZa&q=${category}&limit=4`;
    const res = await fetch(url);

    const { data } = await res.json();

    const gifs = data.map((img) => {
      return {
        id: img.id,
        imageUrl: img.images.downsized_medium.url,
        title: img.title,
      };
    });

    return gifs
  };