import React, { useState } from 'react';
import "./Error.css"

function Error() {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const handleClick = () => {
        setCount(count + 1);
        const newTop = Math.floor(Math.random() * 50) + 30 + '%'; // Random position between 5% and 95%
        const newLeft = Math.floor(Math.random() * 90) + 10 + '%'; // Random position between 5% and 95%
        setPosition({ top: newTop, left: newLeft });
    };

    return (
        <>
            <div className="main-content">
                <h1 className="404head">404 ERROR: The requested URL was not found</h1>
                <p className="404big">
                    Gerwin here – I’m SORRY!
                    Let me entertain you with something fun while you’re here.
                    Try to click the button that appears!
                </p>
                <button
                    className="random-button"
                    style={{ top: position.top, left: position.left }}
                    onClick={handleClick}
                >
                    Click me! Count: {count}
                </button>
            </div>
        </>
    );
}

export default Error;
