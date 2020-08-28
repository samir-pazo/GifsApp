
const getGifs = async( category ) => {

    const apiKey = 'i9qX1owLK7HETD9NqNV6O4eLoKS48Dsl';

    //uso de category en la url encodeURI()
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${ encodeURI(category) }&limit=10`;
    //const url = 'http://samirpazo-001-site1.dtempurl.com/GifExpert';
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map(gif => (
        {
            id: gif.id,
            title: gif.title,
            imageUrl: gif.images?.downsized_medium.url
        }
    ));

    console.log(gifs)
    return gifs;
}
 
export default getGifs