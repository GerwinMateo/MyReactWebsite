import React, { useState, useCallback } from 'react';
import "./Error.css"

function Error() {
    const [count, setCount] = useState(0);
    const [position, setPosition] = useState({ top: '50%', left: '50%' });

    const handleClick = useCallback(() => {
        setCount(prev => prev + 1);
        const newTop = `${Math.floor(Math.random() * 50) + 30}%`;
        const newLeft = `${Math.floor(Math.random() * 90) + 10}%`;
        setPosition({ top: newTop, left: newLeft });
    }, []);

    return (
        <>
            <div className="main-content">
                <h1 className="404head">404 ERROR: The requested URL was not found</h1>
                <p className="404big">
                    Gerwin here – I'm SORRY!
                    Let me entertain you with something fun while you're here.
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
