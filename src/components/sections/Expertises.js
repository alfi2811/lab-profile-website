import React from 'react'

const Expertises = () => {
    return (
        <div className="expert" id="exp">
            <div className="section-detail">
                <h1 className="title-section-shadow">OUR EXPERTISES</h1>
                <h1 className="title-section">OUR EXPERTISES</h1>
                <p className="desc-section">Proclub Telkom University consist of 3 main expertises</p>
            </div>
            <div className="overlay-card-group">
                <div className="overlay-card">
                    <div className="card-overlay">
                        <p>SE</p>
                    </div>
                    <p className="card-title">Software Engineer</p>
                </div>
                <div className="overlay-card">
                    <div className="card-overlay">
                        <p>PD</p>
                    </div>
                    <p className="card-title">Product Designer</p>
                </div>
                <div className="overlay-card">
                    <div className="card-overlay">
                        <p>BA</p>
                    </div>
                    <p className="card-title">Business Analyst</p>
                </div>
            </div>
        </div>
    )
}

export default Expertises
