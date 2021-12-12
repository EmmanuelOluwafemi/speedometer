import React, {useEffect, useRef, useState} from 'react'

import { StyledSpeedometer } from '../styles/SpeedometerStyle.style'
import { Wrapper } from '../styles/Wrapper.style'

const Speedometer = () => {

    const [speed, setSpeed] = useState(40.5)

    const turnRef = useRef(null)
    const sliderRef = useRef(null)

    // generates a random number between 0 and 35 every second
    useEffect(() => {
        setInterval(function(){   
            console.log(Math.floor((Math.random()*35)+1)); 
            setSpeed(Math.floor((Math.random()*35)+1)); 
        }, 1000);
    }, [])

    useEffect(() => {
        const turn = speed >= 37.5 ? ((12.5 + 37.5) / 100) : ((12.5 + speed) / 100)

        turnRef.current.style.transform = `rotate(${turn}turn)`
        sliderRef.current.style.transform = `rotate(${turn + 0.25}turn)`
    }, [speed])

    return (
        <Wrapper>
            <StyledSpeedometer>
                <div className="guage_body">
                    <div className="guage_body_fill" ref={turnRef} />
                    <div className="guage_body_cover">
                        <div className="guage_indicator_slider" ref={sliderRef} />
                    </div>
                    <div className="guage_indicator" />
                    <div className="text_content">
                        <h3>{speed}</h3>
                        <p>Mbps</p>
                    </div>
                </div>

            </StyledSpeedometer>
        </Wrapper>
    )
}

export default Speedometer
