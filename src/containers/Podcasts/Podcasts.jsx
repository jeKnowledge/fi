import React , {useState, useEffect} from 'react'
import './Podcasts.css'
import images from '../../constants';



function Podcasts() {

  const [podcasts, setPodcasts] = useState([]);
  const [mostRecentPodcast, setMostRecentPodcast] = useState([]);

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
          const mostRecent = data.podcasts[data.podcasts.length - 1];
          setMostRecentPodcast(mostRecent);
          console.log(mostRecent)
          console.log(mostRecentPodcast.guests && mostRecentPodcast.guests.map(guest => guest.name).join(" e "))
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
            <img src = {mostRecentPodcast.image}  alt="ep_img"/>
          </div>
          <div className="ep_info">
          <h3>{mostRecentPodcast.name}</h3>
          <p>{mostRecentPodcast.description}</p>
          <p>Convidados:</p>
           <p className="guests_name">{mostRecentPodcast.guests && mostRecentPodcast.guests.map(guest => guest.name).join(" e ")}</p>
          </div>
        <div className="ep_socials">
          <img src = {images.spotify} href= {mostRecentPodcast.spotify_link}/>
          <img src = {images.youtube} href= {mostRecentPodcast.youtube_link}/>
          <span onClick={() => handleExpand(0)}>{expanded[0] ? '-' : '+'}</span>
        </div>
        </div>
        {expanded[0] &&
            <div className='expanded_info'>
              {mostRecentPodcast.guests.map((guest, index) => (
                <div key={guest.id} className='guest guest_box'>
                      <div className="guest_info">
                        <h1>{guest.name}</h1>
                        <p>{guest.description}</p>
                        <img src={images.linkedin} href={guest.socials} />
                        </div>
                        <div className="guest_img">
                          <img src={guest.photo_link} alt="guest_img"/>
                          </div>
                  </div>
              ))}
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
            <img src= {podcast.image}  alt="ep_img"/>
          </div>
            <div className='ep_info'>
              <h3>{podcast.name}</h3>
              <p>{podcast.description}</p>
              <p>Convidados:</p>
              <p className='guests_name'>{mostRecentPodcast.guests && mostRecentPodcast.guests.map(guest => guest.name).join(" e ")}</p>
            </div>
            <div className='ep_socials'>
              <img src={images.spotify} href={podcast.spotify_link} />
              <img src={images.youtube} href={podcast.youtube_link} />
              <span onClick={() => handleExpand(index+1)}>{expanded[index + 1] ? '-' : '+'}</span>
            </div>
            </div>
            {expanded[index+1] &&
            <div className='expanded_info'>
              {podcast.guests.map((guest, index) => (
                <div key={guest.id} className='guest guest_box'>
                      <div className="guest_info">
                        <h1>{guest.name}</h1>
                        <p>{guest.description}</p>
                        <img src={images.linkedin} href={guest.socials} />
                        </div>
                        <div className="guest_img">
                          <img src={guest.photo_link} alt="guest_img"/>
                          </div>
                  </div>
              ))}
            </div>
          }
          </div>
        ))}
      </div>
  </div>
   );
}  

export default Podcasts;
