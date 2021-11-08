import React, { useEffect } from 'react';

const Image = ({ data }) => {
    useEffect(() => {
        console.log("Image Data: ", data);
    }, [])
    return (
        <div>
            <img src={data} alt="Test" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
    )
}

export default Image
