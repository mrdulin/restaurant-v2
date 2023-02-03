import React, { useState } from 'react';

const HideShow = () => {
    const [isHidden, setIsHidden] = useState(false);

    // Hide Button event handler
    const handleHideButtonClick = () => {
        setIsHidden(true);
    };

    // Show Button event handler
    const handleShowButtonClick = () => {
        setIsHidden(false);
    };

    return (
        <div>
            <button id="hideButton" onClick={handleHideButtonClick}>
                Hide
            </button>
            <button id="showButton" onClick={handleShowButtonClick}>
                Show
            </button>
            {!isHidden && (
                <div id="newpost">
                    Test text
                </div>
            )}
        </div>
    );
};

export default HideShow;