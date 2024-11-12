import React from "react";

const ProgressBar = ({progress}) => {

    return (
        <div>
            <div class="progress-bar">
                <div class="progress" style={{ width: `${progress}%`}}></div>
            </div>
        </div>
    );
}

export default ProgressBar;