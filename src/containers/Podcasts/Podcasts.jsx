import React , {useState, useEffect} from 'react'
import './Podcasts.css'
import images from '../../constants';



function Podcasts() {

    const [podcasts, setPodcasts] = useState([]);
    const [mostRecentPodcast, setMostRecentPodcast] = useState(null);

    const [expanded, setExpanded] = useState({});

    useEffect(() => {
        async function fetchPodcasts() {
            const response = await fetch("http://127.0.0.1:8000/podcast/getall");
            const data = await response.json();
            console.log("ESTA DATA::::::::::::::::::::::::::::::")
            console.log(data);
            setPodcasts(data.podcasts);

            // Get the most recent podcast from the data
            const mostRecent = data.podcasts[0];
            console.log("MOST RECENT::::::::::::::::::::::::::::::")
            console.log(mostRecent)
            setMostRecentPodcast(mostRecent);
        }

        fetchPodcasts();
    }, []);


    

    return ( 
    <div className="podcast">
      <h1>PODCAST</h1>

      {mostRecentPodcast && (
        <div className='eps_container'>
          <h2>Ultimo episódio</h2>
          <div className='episode box'>

            <div className="ep_info">
            <h3>{mostRecentPodcast.name}</h3>
            <p>{mostRecentPodcast.description}</p>
            </div>
          <div className="ep_socials">
            <img src = {images.spotify} href= {mostRecentPodcast.spotify_link}/>
            <img src = {images.youtube} href= {mostRecentPodcast.youtube_link}/>
          </div>
          </div>
        </div>
      )}

      <div className='eps_container'>
        <h2>Todos os episódios</h2>
        {podcasts.map((podcast) => (
          <div key={podcast.id} className="episode box">
            <div className="ep_info">
            <h3>{mostRecentPodcast.name}</h3>
            <p>{mostRecentPodcast.description}</p>
            </div>
          <div className="ep_socials">
            <img src = {images.spotify} href= {mostRecentPodcast.spotify_link}/>
            <img src = {images.youtube} href= {mostRecentPodcast.youtube_link}/>
          </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Podcasts;
