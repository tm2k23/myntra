import React from 'react'
import Lottie from 'lottie-react-web'
import animation from '../../assets/lottie-json/404.json'
import './404.css'
export default function Page404() {
    return (
        <div className="emptypage" >
            <div className="emptypage-insider" >
                <Lottie
                    options={{
                    animationData: animation
                    }}
                />
            </div>
        </div>
    )
}
