import React from 'react'
import './ViewSimilarButton.css'
export default function ViewSimilarButton({item , externalClassName}) {
    return (
        <div className={`view-similar-button ${externalClassName} `}>
            View Similar
        </div>
    )
}
