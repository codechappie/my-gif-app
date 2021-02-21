import React from 'react'

const GifCard = ({id, title, imageUrl}) => {
    return (
        <div className="grid-card animate__bounceIn">
            <div className="image">
                <img src={imageUrl} alt=""/>
            </div>
            {
            title && (
                <h3>{title}</h3>
            )
            }
        </div>
    )
}

export default GifCard
