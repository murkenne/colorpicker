const fetchAllsongs = async() => {
    try {
      const allSongs = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs');
      const response = await allSongs.json();
      return response;
     }
 } catch (error) {
     console.log(error)
 }

 
const renderAllSongs = (arrayOfSongs) => {
    const songContainer = document.querySelector("#song-container");
    songContainer.innerHTML= '';

    arrayOfSongs.forEach(song => {
        const listItem = document.createdElement('li');
        songContainer.appendChild(listItem)
    })

}

const addNewSong = async {songObject} => {
    const newSong = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs',
    {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(sonObject),
    }) 
  const response =   await newSong.json()
  return response
}

const init = async() => {
    addNewSong(newSong);

    const songs = await fetchAllsongs();
        console.log(songs)
}

init()