const fetchAllSongs = async() => {
    try {
        const allSongs = await fetch("https://fsa-async-await.herokuapp.com/api/guided-practice/songs");
        const response = allSongs.json();
        return response;
    } catch (error) {
        console.log(error);
    }
}

const renderAllSongs = (arrayOfSongs) => {
    const songContainer = document.querySelector("#song-container");
    songContainer.innerHTML = '';
    
    arrayOfSongs.forEach(song => {
        const listItem = document.createElement('li');
        listItem.textContent = song.title;
        songContainer.appendChild(listItem)
    })

}

const addNewSong = async (songObject) => {
    const newSong = await fetch("https://fsa-async-await.herokuapp.com/api/guided-practice/songs",
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
          },
        body: JSON.stringify(songObject),
    })

    const response = await newSong.json();
    return response;

}

const renderNewSongForm = () => {

}

const init = async() => {

    const songs = await fetchAllSongs();
    // renderAllSongs(songs);
    console.log(songs);
}

init()