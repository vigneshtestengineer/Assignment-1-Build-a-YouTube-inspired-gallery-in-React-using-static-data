import logo from './logo.svg';
import './App.css';
import videos from './datas';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <div class="navbar">
        <img class="youtubelogo" src='https://www.freeiconspng.com/uploads/youtube-logo-png-transparent-image-5.png'></img>
        <input type='search' value={'Sony Music South'} id="search"></input>
       </div>
      </header>


      <div class="card-conatiner" id="clothingCards">
      {videos.map((video) => (
          <><div class="card" id={video.id}>
          <a>
            <div class="img">
              <img class="thumbnail" src={video.thumbnail_Url}></img>
            </div>
            <div class="details">
              <h3>{video.title}</h3>
              <div className='channel_detail'>
                <img className='channel_logo' src={video.channelLogoUrl}></img>
                <h4>{video.channelName}</h4>
              </div>
              <div className='likesandviews'>
                <h5>{video.views}</h5>
                <h5>{video.likes}</h5>
              </div>
            </div>
          </a>
        </div>
          
          </>



))}
    </div>   
         </div>
  );
}

export default App;


