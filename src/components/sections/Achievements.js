import React from 'react'
import achievementImg from '../../modules/images/win.png';

const Achievements = () => {
    return (
        <div class="achievement">
            <div class="section-detail">
                <h1 class="title-section-shadow">OUR ACHIEVEMENT</h1>
                <h1 class="title-section">OUR ACHIEVEMENT</h1>
                <p class="desc-section">Proclub Telkom University has won many National and International Competition</p>
            </div>
            <div class="card-group">
                <div class="card">
                    <img src={achievementImg} alt="" />
                    <div class="card-detail">
                        <p class="card-title">Microsoft Azure Cup Hackathon 2020</p>
                        <p class="card-desc">1st Place Winner</p>
                        <button class="btn-view">View More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={achievementImg} alt="" />
                    <div class="card-detail">
                        <p class="card-title">Microsoft Azure Cup Hackathon 2020</p>
                        <p class="card-desc">1st Place Winner</p>
                        <button class="btn-view">View More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={achievementImg} alt="" />
                    <div class="card-detail">
                        <p class="card-title">Microsoft Azure Cup Hackathon 2020</p>
                        <p class="card-desc">1st Place Winner</p>
                        <button class="btn-view">View More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={achievementImg} alt="" />
                    <div class="card-detail">
                        <p class="card-title">Microsoft Azure Cup Hackathon 2020</p>
                        <p class="card-desc">1st Place Winner</p>
                        <button class="btn-view">View More</button>
                    </div>
                </div>
            </div>
            <div class="show-more">
                <button class="btn-show-view">Show More</button>
            </div>
        </div>
    )
}

export default Achievements
