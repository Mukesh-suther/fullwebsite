import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./home.css";
import Slider from "react-slick";

import educationprogram1 from "./../../assets/images/front-view-children-playing-together-kindergarten@2x (1).jpg";
import educationprogram2 from "./../../assets/images/pexels-cottonbro-3662628@2x.jpg";
import educationprogram3 from "./../../assets/images/mother-daughter-having-fun-with-paint@2x.jpg";
import educationprogram4 from "./../../assets/images/pexels-cottonbro-3662803@2x.jpg";
import educationprogram5 from "./../../assets/images/pexels-cottonbro-3662800-1@2x.jpg";
import educationprogram6 from "./../../assets/images/front-view-children-playing-together-kindergarten@2x (1).jpg";
function Home() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1500,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };
  return (
    <div className="page-content">
      <section className="homepage_section1">
        <div className="videos_container" style={{marginBottom:'30px'}}>
        <h1>Meet Your Teachers</h1>
          <Slider {...settings}>
            {/* //video 1 */}
            <div>
              <div style={{ position: "relative" , paddingTop:'56.35%', margin:'0px 20px'}} className="margin-0mobile">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true"
                  loading="eager"
                  style={{
                    border: "0",
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  title="1"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* video2 */}
            <div>
              <div style={{ position: "relative" , paddingTop:'56.35%', margin:'0px 20px'}} className="margin-0mobile">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true"
                  loading="eager"
                  style={{
                    border: "0",
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  title="2"
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* video 3 */}
            <div>
              <div style={{ position: "relative" , paddingTop:'56.35%', margin:'0px 20px'}} className="margin-0mobile">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true"
                  loading="eager"
                  title="3"
                  style={{
                    border: "0",
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>{" "}
            {/* video 4 */}
            <div>
              <div style={{ position: "relative" , paddingTop:'56.35%', margin:'0px 20px'}} className="margin-0mobile">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true"
                  loading="eager"
                  title="4"
                  style={{
                    border: "0",
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* video 5 */}
            <div>
              <div style={{ position: "relative" , paddingTop:'56.35%', margin:'0px 20px'}} className="margin-0mobile">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true"
                  loading="eager"
                  title="5"
                  style={{
                    border: "0",
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            {/* video 6 */}
            <div>
              <div style={{ position: "relative" , paddingTop:'56.35%', margin:'0px 20px'}} className="margin-0mobile">
                <iframe
                  src="https://iframe.mediadelivery.net/embed/208370/7a592c6a-885d-4cfb-9940-d637499fe84d?autoplay=false&loop=false&muted=true&preload=false&responsive=true"
                  loading="eager"
                  title="6"
                  style={{
                    border: "0",
                    position: "absolute",
                    top: "0",
                    height: "100%",
                    width: "100%",
                  }}
                  allow="accelerometer;gyroscope;autoplay;encrypted-media;picture-in-picture;"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </Slider>
        </div>
        <div className="section_inner">
          <h1>Meet Your Teachers</h1>
        </div>
        <div className="homepage_gallery">
          <div className="homepagegalleryinner">
            <div className="masonry-item">
              <div>
                <img src={educationprogram1} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram2} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram3} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram4} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram5} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
            <div className="masonry-item">
              <div>
                <img src={educationprogram6} alt="dd" />
                <div className="masonry-item-content">
                  <div className="masonry-item-bgoverly"></div>
                  <h1>Educational Programs</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p>
          {" "}
          <span>Join us today and watch all the exercise videos!..</span>{" "}
        </p>
      </section>
    </div>
  );
}

export default Home;
