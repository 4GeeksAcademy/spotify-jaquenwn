import React, { useEffect, useRef, useState } from 'react'
import Reproductor from './Reproductor';
import Navbar from './Navbar';

//include images into your bundle


//create your first component
const Home = () => {
  const [url] = useState("https://playground.4geeks.com")

  const [songs, setSongs] = useState([
    {
      "id": 1,
      "name": "Mario Castle",
      "url": "/sound/files/mario/songs/castle.mp3",
      "category": "category"
    },
    {
      "id": 2,
      "name": "Mario Star",
      "url": "/sound/files/mario/songs/hurry-starman.mp3",
      "category": "category"
    },
    {
      "id": 3,
      "name": "Mario Overworld",
      "url": "/sound/files/mario/songs/overworld.mp3",
      "category": "category"
    },
    {
      "id": 4,
      "name": "Mario Stage 1",
      "url": "/sound/files/mario/songs/stage1.mp3",
      "category": "category"
    },
    {
      "id": 5,
      "name": "Mario Stage 2",
      "url": "/sound/files/mario/songs/stage2.mp3",
      "category": "category"
    }])

 
  const songRef = useRef()
  const [playing, setPlaying] = useState("play")
  const [currentSong, setCurrentSong]= useState(null)

  const loadSong = index => {
    songRef.current.src = url + songs[index].url;
    songRef.current.id = songs[index].id;
    console.log(songRef.current)
    songRef.current.play();
    setPlaying("pause")
    setCurrentSong(index)
  }


  const togglePlay = () => {
    setPlaying(playing === "pause" ? "play" : "pause")
    if (playing === "pause") {
      songRef.current.pause();
    } else {
      
      songRef.current.play();
    }
  }
 
  const prevSong = () => {
    let aux1;
    if (currentSong === 0){
      aux1 = songs.length -1
    } else {
      aux1 = currentSong -1
    }
    console.log(aux1)
    songRef.current.id = songs[aux1];
    songRef.current.src = url + songs[aux1].url;
    songRef.current.play();
    setCurrentSong(aux1)
  }
  const nextSong = () => {
    let aux2;
    if (currentSong === (songs.length -1)){
      aux2 = 0
    } else {
      aux2 = currentSong +1
    }
    console.log(aux2)
    songRef.current.id = songs[aux2];
    songRef.current.src = url + songs[aux2].url;
    songRef.current.play();
    setCurrentSong(aux2)
  }
  return (
    <div className="text-center ">
      <div>
        <Navbar />
      </div>
      <div className='bg-dark container'>
        <div >
          <img className="my-4" width={400} height={400} src="data:image/jpeg;base64,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" />

        </div>
        <div className=" w-100 overflow-y-scroll" >
          {
            songs.map((song, index) =>
              <div className="d-flex border-top border-secondary" key={index} onClick={() =>loadSong(index)}>
                <div className="col-1 text-white p-2"  >{song.id}</div>
                <div className="col-9 text-white text-start p-2">{song.name}</div>
              </div>
            )
          }
        </div>
      </div>
      <div className='sticky-bottom'>
        <Reproductor togglePlay={togglePlay} playing = {playing} nextSong= {nextSong} prevSong= {prevSong}/>
        <audio ref={songRef} id="myAudio" />
      </div>
    </div>
  );
};

export default Home;