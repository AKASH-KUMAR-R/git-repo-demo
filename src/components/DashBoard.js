import { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

const DashBoard = () => {

    const [topArtist, setTopArtist] = useState('Alan Walker');
    const [popularArtist, setPopularArtist] = useState('Ariana Grande');


    return (
        <div className="dashboard">
            <div className="playlist">
                <div className="playlistcard">
                    <div className="image-section">
                        Hello
                    </div>
                    <div className="playlist-details">
                        <h4>General Songs</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facere, ipsum dolorem aliquid laborum natus</p>
                        <Link to="/playlist"><button className="button-configuration">View Playlist</button></Link>
                    </div>
                </div>
                <div className="playlistcard">
                    <div className="image-section">
                        Hello
                    </div>
                    <div className="playlist-details">
                        <h4>General Songs</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facere, ipsum dolorem aliquid laborum natus</p>
                        <Link to="/playlist"><button className="button-configuration">View Playlist</button></Link>
                    </div>
                </div>
                <div className="playlistcard">
                    <div className="image-section">
                        Hello
                    </div>
                    <div className="playlist-details">
                        <h4>General Songs</h4>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Facere, ipsum dolorem aliquid laborum natus</p>
                        <Link to="/playlist"><button className="button-configuration">View Playlist</button></Link>
                    </div>
                </div>
            </div>
            <div className="artist-popularity">
                <div className="left-container">

                    <div className="inner-container"><p>Your Top Artist</p>
                        {topArtist && <p>{topArtist}</p>}</div>
                </div>
                <div className="right-container">
                    <div className="inner-container"><p>Most Popular Artist</p>
                        {popularArtist && <p>{popularArtist}</p>}</div>
                </div>
            </div>

            <div className="premium-container">
                <div className="premium-heading"><h2>Premium Features</h2></div>
                <div className="content-container">
                    <div><img className="tick-image" src="./checkmark.png" alt="tick-mark"></img><p>Unlimited mood playlist</p></div>
                    <div><img className="tick-image" src="./checkmark.png" alt="tick-mark"></img><p>Personalized mood enhancer</p></div>
                    <div><img className="tick-image" src="./checkmark.png" alt="tick-mark"></img><p>Ad-free music listening</p></div>
                    <div><img className="tick-image" src="./checkmark.png" alt="tick-mark"></img><p>Personalised music experience</p></div>
                </div>
            </div>
        </div>
    );
};


export default DashBoard;