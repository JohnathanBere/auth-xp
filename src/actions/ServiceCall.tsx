export function serviceCallBack () {
    return fetch('https://rallycoding.herokuapp.com/api/music_albums', { method: "GET"})
            .then(response => response.json())
}