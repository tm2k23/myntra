import React from 'react'
import Lottie from 'lottie-react-web'
import animation from '../../assets/lottie-json/empty.json'
import './Empty.css'
export default function Empty() {
    return (
        <div className="empty-container center" >
            <div className="empty-insider" >
                <Lottie
                    options={{
                        animationData: animation
                    }}
                />
            </div>
        </div>
    )
}
