export async function fetchGif(apiKey = 'AKFDJ3L12EXI') {
    const gifName =  document.getElementById('gifName').value || 'default';
    const limit =  document.getElementById('limit').value || 10;

    const gifs = await fetch(`https://g.tenor.com/v1/search?q=${gifName}&key=${apiKey}&limit=${limit}`)
        .then(response => response.json())
        .then(gifs => gifs.results);

    gifs.forEach(gif => {
        const image = document.createElement('img');
        image.src = gif.url
        document.getElementById('app').appendChild(image);
    });
    // const imagesNode = gifs.map(gif => {
    //     const image = document.createElement('img');
    //     image.src = gif.url
    //     return image
    // });
    // document.getElementById('app').appendChild(image);

}
