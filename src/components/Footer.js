import React from 'react'
import logoProclub from '../modules/images/logo.png'
import loveImg from '../modules/images/love.png';
import fireImg from '../modules/images/fire.png';

const Footer = () => {
    return (
        <footer class="footer">
            <div class="detail-footer">
                <div class="logo-footer">
                    <img src={logoProclub} alt="" />
                </div>
                <div class="contact">
                    <div class="email">
                        <p>Contact us at</p>
                        <p>sayhi@proclub.tech</p>
                    </div>
                    <div class="sosmed">
                        <p>Or find us through social media</p>
                        <p>@helloproclub</p>
                    </div>
                </div>
            </div>
            <div class="copyright">
                <p>Made with </p><img src={loveImg} alt="" /> <p> not with </p> <img src={fireImg} alt="" /> <p> by Proclub Telkom University</p>
            </div>
        </footer>
    )
}

export default Footer
