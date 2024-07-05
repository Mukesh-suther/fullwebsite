import React from 'react'
import './home.css'
import educationprogram1 from './../../assets/images/front-view-children-playing-together-kindergarten@2x (1).jpg'
import educationprogram2 from './../../assets/images/pexels-cottonbro-3662628@2x.jpg'
import educationprogram3 from './../../assets/images/mother-daughter-having-fun-with-paint@2x.jpg'
import educationprogram4 from './../../assets/images/pexels-cottonbro-3662803@2x.jpg'
import educationprogram5 from './../../assets/images/pexels-cottonbro-3662800-1@2x.jpg'
import educationprogram6 from './../../assets/images/front-view-children-playing-together-kindergarten@2x (1).jpg'
function Home() {
  return (
    <div className="page-content">
    <section className="homepage_section1">
        <div className="section_inner">
            <h1>Meet Your Teachers</h1>
        </div>
        <div className="homepage_gallery">
            <div className="homepagegalleryinner">
                <div className="masonry-item">
                   <div>
                    <img src={educationprogram1} alt="dd"/>
                    <div className="masonry-item-content">
                        <div className="masonry-item-bgoverly"></div>
                        <h1>Educational Programs</h1>
                    </div>
                   </div>
                </div>
                <div className="masonry-item">
                    <div>
                        <img src={educationprogram2} alt="dd"/>
                    <div className="masonry-item-content">
                        <div className="masonry-item-bgoverly"></div>
                        <h1>Educational Programs</h1>
                    </div>
                    </div>
                </div>
                <div className="masonry-item">
                   <div>
                    <img src={educationprogram3} alt="dd"/>
                    <div className="masonry-item-content">
                        <div className="masonry-item-bgoverly"></div>
                        <h1>Educational Programs</h1>
                    </div>
                   </div>
                </div>
                <div className="masonry-item">
                    <div>
                        <img src={educationprogram4} alt="dd"/>
                    <div className="masonry-item-content">
                        <div className="masonry-item-bgoverly"></div>
                        <h1>Educational Programs</h1>
                    </div>
                    </div>
                </div>
                <div className="masonry-item">
                   <div>
                    <img src={educationprogram5} alt="dd"/>
                    <div className="masonry-item-content">
                        <div className="masonry-item-bgoverly"></div>
                        <h1>Educational Programs</h1>
                    </div>
                   </div>
                </div>
                <div className="masonry-item">
                    <div>
                        <img src={educationprogram6} alt="dd"/>
                    <div className="masonry-item-content">
                        <div className="masonry-item-bgoverly"></div>
                        <h1>Educational Programs</h1>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        <p> <span>Join us today and watch all the exercise videos!..</span> </p>
    </section>
</div>
  )
}

export default Home