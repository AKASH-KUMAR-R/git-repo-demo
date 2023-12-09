import { useState } from "react";

const Survey = () => {

    const [slidePosition, setSlidePosition] = useState(0);

    const translateValue = -slidePosition * 100;

    return (
        <div className="survey-container">
            <div
                className="question-slides"
                style={{
                    transform: `translateX(${translateValue}%)`,
                }}>
                <div className="slide">
                    Hello
                </div>
                <div className="slide">
                    Hey
                </div>
                <div className="slide">Hai</div>
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
                        display: slidePosition < 2 ? 'block' : 'none',
                    }}>Next</button>
            </div>
        </div>
    );
}

export default Survey;