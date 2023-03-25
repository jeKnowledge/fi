import React , {useState, useEffect} from 'react'
import './Podcasts.css'
import images from '../../constants';



function Podcasts() {

  const [podcasts, setPodcasts] = useState([]);
  const [mostRecentPodcast, setMostRecentPodcast] = useState(null);

  const [expanded, setExpanded] = useState([]);

  function handleExpand(index) {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  }

  useEffect(() => {
      async function fetchPodcasts() {
          const response = await fetch("http://127.0.0.1:8000/podcast/getall");
          const data = await response.json();
          setPodcasts(data.podcasts);

          // Get the most recent podcast from the data
          const mostRecent = data.podcasts[0];
          setMostRecentPodcast(mostRecent);

          // Initialize expanded state for each box to false
          setExpanded(new Array(data.podcasts.length).fill(false));
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
        <div className="small_box">   
          <div className="ep_img">
            <img href="//imgur.com/a/cGM3ZIL"  alt="ep_img"/>
          </div>
          <div className="ep_info">
          <h3>{mostRecentPodcast.name}</h3>
          <p>{mostRecentPodcast.description}</p>
          <p>Convidados:</p>
           <p className="guests_name">{mostRecentPodcast.guests}</p>
          </div>
        <div className="ep_socials">
          <img src = {images.spotify} href= {mostRecentPodcast.spotify_link}/>
          <img src = {images.youtube} href= {mostRecentPodcast.youtube_link}/>
          <span onClick={() => handleExpand(0)}>+</span>
        </div>
        </div>
        {expanded[0] &&
            <div className='expanded_info'>
              <p>HOOLALALALAL</p>
            </div>
          }
        </div>
      </div>
    )}

    <div className='eps_container'>
        <h2>Todos os episódios</h2>
        {podcasts.map((podcast, index) => (
          <div key={podcast.id} className='episode box'>
            <div className="small_box">            
            <div className="ep_img">
            <img href="//imgur.com/a/cGM3ZIL"  alt="ep_img"/>
          </div>
            <div className='ep_info'>
              <h3>{podcast.name}</h3>
              <p>{podcast.description}</p>
              <p>Convidados:</p>
              <p className='guests_name'>{podcast.guests}</p>
            </div>
            <div className='ep_socials'>
              <img src={images.spotify} href={podcast.spotify_link} />
              <img src={images.youtube} href={podcast.youtube_link} />
              <span onClick={() => handleExpand(index+1)}>+</span>
            </div>
            </div>
            {expanded[index+1] &&
            <div className='expanded_info'>
              <p>HOOLALALALAL</p>
            </div>
          }
          </div>
        ))}
      </div>
  </div>
   );
}  

export default Podcasts;
