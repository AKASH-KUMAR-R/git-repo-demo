import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Survey = () => {

    const [slidePosition, setSlidePosition] = useState(0);
    const translateValue = -slidePosition * 100;
    const history = useHistory();

    const [mood, setMood] = useState('');
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [genre, setGenre] = useState('abcd');

    const handleSubmit = () => {

        if (mood !== '' && artist !== '' && song !== '' && genre !== '') {
            console.log("Uploaded");
            history.push('/dashboard');
        }

    }

    return (
        <div className="survey-container">
            <div
                className="question-slides"
                style={{
                    transform: `translateX(${translateValue}%)`,
                }}>

                <div className="slide">
                    <h4>1.What is your mood ?</h4>
                    <div className="slide-content">
                        <div className="options">
                            <div><input type="radio" name="mood" value='Happy'
                                onChange={(e) => {
                                    setMood(e.target.value);
                                }}></input><label htmlFor="happy">Happy</label></div>
                            <div><input type="radio" name="mood" value='Sad'
                                onChange={(e) => {
                                    setMood(e.target.value);
                                }}></input><label htmlFor="sad">Sad</label></div>
                            <div><input type="radio" name="mood" value='Love'
                                onChange={(e) => {
                                    setMood(e.target.value);
                                }}></input><label htmlFor="love">Love</label></div>
                            <div><input type="radio" name="mood" value='Depressed'
                                onChange={(e) => {
                                    setMood(e.target.value);
                                }}></input><label htmlFor="depressed">Depressed</label></div>
                        </div>
                        <div>
                        </div>
                    </div>
                </div>
                <div className="slide">
                    <h4>2.At times like these, which </h4>
                    <h4>artist do you prefer listening to?</h4>
                    <div className="slide-content">
                        <input
                            type="text"
                            className="artist"
                            placeholder="Artist name"
                            value={artist}
                            onChange={(e) => {
                                setArtist(e.target.value);
                            }}
                            required></input>
                    </div>
                </div>
                <div className="slide">

                    <h4>3.What sort of songs do </h4>
                    <h4>you want to listen?</h4>
                    <input
                        type="text"
                        className="song"
                        placeholder="Song name"
                        value={song}
                        onChange={(e) => {
                            setSong(e.target.value);
                        }}
                        required></input>
                </div>
                <div className="slide">
                    <h4>Select gerne which you like</h4>

                </div>

            </div>
            <div className="navigation-button">
                <button
                    className="navigation-slide-button"
                    onClick={() => {
                        setSlidePosition((prev) => prev - 1);
                    }}
                    style={{
                        display: slidePosition > 0 ? 'block' : 'none',
                    }}>Previous</button>
                <button
                    className="navigation-slide-button"
                    onClick={() => {
                        setSlidePosition((prev) => prev + 1);
                    }}
                    style={{
                        display: slidePosition < 3 ? 'block' : 'none',
                    }}>Next</button>
                <button
                    className="navigation-slide-button"
                    style={{
                        display: slidePosition === 3 ? 'block' : 'none',
                    }}
                    onClick={() => {
                        handleSubmit();
                    }}
                >Submit</button>
            </div>
        </div >
    );
}

export default Survey;