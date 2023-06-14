const fetchAllsongs = async() => {
    try {
      const allSongs = await fetch('https://fsa-async-await.herokuapp.com/api/guided-practice/songs')
      const response = await allSongs.json();
      return response;
     }
 } catch (error) {
     console.log(error)
 }
 
 
