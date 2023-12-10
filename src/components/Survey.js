import { useState } from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { Autocomplete } from "@mui/material";
import TextField from "@mui/material/TextField";

const Survey = ({ data }) => {

    const [slidePosition, setSlidePosition] = useState(0);
    const translateValue = -slidePosition * 100;
    const history = useHistory();

    const [mood, setMood] = useState('');
    const [artist, setArtist] = useState('');
    const [song, setSong] = useState('');
    const [genre, setGenre] = useState('');

    const handleSubmit = () => {

        if (mood !== '' && artist !== '' && song !== '' && genre !== '') {
            console.log("Uploaded");
            history.push('/dashboard');
        }

    }


    const [searchTerm, setSearchTerm] = useState('');

    const handleSearchChange = (event, value) => {
        setSearchTerm(value);
        setGenre(value);
        // You can implement your search logic here, e.g., filter the data based on the search term
    };
    return (
        <div className="survey-container">
            <div
                className="question-slides"
                style={{
                    transform: `translateX(${translateValue}%)`,
                }}>

                <div className="slide">
                    <span>1.What is your mood ?</span>
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
                    <span>2.At times like these, which </span>
                    <span>artist do you prefer listening to?</span>
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

                    <span>3.What sort of songs do </span>
                    <span>you want to listen?</span>
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
                    <span>Select gerne which you like</span>
                    <Autocomplete
                        options={data}
                        getOptionLabel={(option) => option} // Replace 'name' with the property you want to display
                        onChange={() => handleSearchChange()}
                        renderInput={(params) => (
                            <TextField {...params} label="Search" variant="outlined" className="gerne-input" />
                        )}
                    />

                </div>

            </div>
            <div className="navigation-button">
                <button
                    className="prev-button"
                    onClick={() => {
                        setSlidePosition((prev) => prev - 1);
                    }}
                    style={{
                        display: slidePosition > 0 ? 'block' : 'none',
                    }}>Previous</button>
                <button
                    className="next-button"
                    onClick={() => {
                        setSlidePosition((prev) => prev + 1);
                    }}
                    style={{
                        display: slidePosition < 3 ? 'block' : 'none',
                    }}>Next</button>
                <button
                    className="submit-button"
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