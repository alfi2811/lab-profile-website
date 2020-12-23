import { Grid } from '@material-ui/core'
import React from 'react'
import downArrow from "../modules/images/down-arrow.png"

const Hero = (props) => {
    return (
        <div container spacing={0} className="hero">
            <div class="hero-detail">
                <h3>Dream. <span>Think.</span> Code</h3>
                <p>A brotherhood of highly passionate and competitive student. A group of enthusiastic people in tech, business, design, and innovation.</p>
                <div class="down-arrow">
                    <a href="#exp">
                        <img src={downArrow} alt="arrow down" />
                        <img src={downArrow} alt="arrow down" />
                    </a>                
                </div>            
            </div>
        </div>
    )
}

export default Hero
