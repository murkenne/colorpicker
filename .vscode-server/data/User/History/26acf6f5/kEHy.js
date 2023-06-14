const fetchAllsongs = async() => {
    try {
      const allSongs = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs')
      const data = await allSongs.json();
      return data:
     }
 } catch (error) {
     console.log(error)
 }
 
 
