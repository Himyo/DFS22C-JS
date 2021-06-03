export function fetchGif(gifName, limit) {
    fetch(`https://g.tenor.com/v1/search?q=${gifName}&key=AKFDJ3L12EXI&limit=${limit}`)
        .then(gifs => console.log(gifs))
}