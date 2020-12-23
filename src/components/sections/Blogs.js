import React from 'react'
import maskImg from '../../modules/images/Mask.png'

const Blogs = () => {
    return (
        <div class="blog">
        <div class="section-detail">
            <h1 class="title-section-shadow">OUR BLOG</h1>
            <h1 class="title-section">OUR BLOG</h1>
            <p class="desc-section">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Iaculis mauris etiam at risus, viverra ac pulvinar.</p>            
        </div>
        <div class="header">
            <div class="hot-news">
                <p class="news-date">Friday, 15 Mei 2020</p>
                <h2 class="news-title">Truk Towing Angkut Mobil, Satu Keluarga Ketahuan Berusaha Mudik</h2>
            </div>
            <div class="side-news feature-1">
                <p class="news-date">Friday, 15 Mei 2020</p>
                <h2 class="news-title">Truk Towing Angkut Mobil, Satu Keluarga Ketahuan Berusaha Mudik</h2>
            </div>
            <div class="side-news feature-2">
                <p class="news-date">Friday, 15 Mei 2020</p>
                <h2 class="news-title">Truk Towing Angkut Mobil, Satu Keluarga Ketahuan Berusaha Mudik</h2>
            </div>
        </div>
        <div class="blog-news">            
            <div class="card-group">
                <div class="card">
                    <img src={maskImg} alt="" />
                    <div class="card-detail">  
                        <p class="card-date">Tue, 14 May 2020</p>                  
                        <p class="card-title">How To Train Your Dragon 2</p>
                        <p class="card-desc">Hiccup (Jay Baruchel) is a Norse teenager from the island of Berk ...</p>                  
                        <button class="btn-view">View More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={maskImg} alt="" />
                    <div class="card-detail">   
                        <p class="card-date">Tue, 14 May 2020</p>                 
                        <p class="card-title">How To Train Your Dragon 2</p>
                        <p class="card-desc">Hiccup (Jay Baruchel) is a Norse teenager from the island of Berk ...</p>                  
                        <button class="btn-view">View More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={maskImg} alt="" />
                    <div class="card-detail">  
                        <p class="card-date">Tue, 14 May 2020</p>                  
                        <p class="card-title">How To Train Your Dragon 2</p>
                        <p class="card-desc">Hiccup (Jay Baruchel) is a Norse teenager from the island of Berk ...</p>                  
                        <button class="btn-view">View More</button>
                    </div>
                </div>
                <div class="card">
                    <img src={maskImg} alt="" />
                    <div class="card-detail">    
                        <p class="card-date">Tue, 14 May 2020</p>                
                        <p class="card-title">How To Train Your Dragon 2</p>
                        <p class="card-desc">Hiccup (Jay Baruchel) is a Norse teenager from the island of Berk ...</p>                  
                        <button class="btn-view">View More</button>
                    </div>
                </div>
            </div>
            <div class="show-more">
                <button class="btn-show-view">Show More</button>
            </div>
        </div>
    </div>
    )
}

export default Blogs
