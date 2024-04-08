import * as React from "react";
import "./Home.css"
import{ useState, useEffect } from 'react';

function Homepage() {

    const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

   
  return (
    <> 
      <div className="divmain">
        
        <img   style={{
      backgroundSize: `calc(100% + ${scroll / 5}%)`,
      top: `calc(-${scroll / 20}%)`
    }} loading="lazy" alt=""  className="img" />
        <div className="div-2">
          <div className="div-3">
            Elevate Your online <br />
            Presence
          </div>
          <div className="div-4">
            Craft stunning websites with Kochi's top web design experts. Make
            your vmark <br />
            online!
          </div>
          <div className="div-5">Explore Now</div>

        </div>
        

        <div className="word"  data-aos="fade-up"
     data-aos-duration="2000">
        <span>
          <span >
            <font face="Inknut Antiqua, sans-serif" >
              Elevate Your Online Presence <br />
              with akweb in Kochi
            </font>
          </span>
        </span>
      </div>

      <div className="secndword"  >
        Craft stunning websites with Kochi's top web design experts. Make your
        vmark <br />
        online!
      </div>
   
      <img data-aos="zoom-in-up" data-aos-duration="1000"  loading="lazy" alt=""  src="https://akweb1.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1585247226801-bc613c441316%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxNnx8V2ViJTIwRGVzaWdufGVufDB8fHx8MTcwNjg5Mzk5NXww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90"  className="img-2" />



      <div className="container">
        <div className="container-2">
          <div className="column" data-aos="fade-right">
            <div className="container-3">
              <img
                loading="lazy"
                alt=""
                src="https://akweb1.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1547658719-da2b51169166%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHw3fHxXZWIlMjBEZXNpZ258ZW58MHx8fHwxNzA2ODkzOTk1fDA%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90"
                sizes="(max-width: 638px) 100vw, 27vw"
                className="image"
              />
              <div className="centered-box">
                <div className="title">
                  <p>Customized Web Designs</p>
                </div>
                <div className="subtitle">
                  <p>
                    Expertly tailored designs to reflect your brand identity and
                    engage your audience.
                  </p>
                </div>
              </div>
            </div>
          </div>


          <div className="column">
            <div className="container-3">
              <img
              alt=""
                loading="lazy"
                src="https://akweb1.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1512295767273-ac109ac3acfa%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxMHx8V2ViJTIwRGVzaWdufGVufDB8fHx8MTcwNjg5Mzk5NXww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90"
                sizes="(max-width: 638px) 100vw, 27vw"
                className="image"
              />
              <div className="centered-box">
                <div className="title">
                  <p>Responsive Layouts</p>
                </div>
                <div className="subtitle">
                  <p>
                  Ensure your website looks great on all devices with
                    responsive design techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="column" data-aos="fade-left">
            <div className="container-3">
            <img
                loading="lazy"
                alt=""
                src="https://akweb1.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1621839673705-6617adf9e890%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwxMnx8V2ViJTIwRGVzaWdufGVufDB8fHx8MTcwNjg5Mzk5NXww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90"
                sizes="(max-width: 638px) 100vw, 27vw"
                className="image"
              />
              <div className="centered-box">
                <div className="title">
                  <p>SEO Optimization</p>
                </div>
                <div className="subtitle">
                  <p>
                  Boost your online visibility and reach the top of search
                    engine results.
                  </p>
                </div>
              </div>
            </div>
          </div>
          



     
        </div>
      </div>



      <div className="custom-container"  data-aos="fade-up">
  <div className="custom-container-2">
    <div className="custom-column">
      <div className="custom-description">
        <div className="custom-text-description">
          <div className="custom-heading">
            About AK-WEB&nbsp;
            <br />
          </div>
          <div className="custom-description-text">
            <p>
              <span style={{ fontSize: "18px" }}>
                We are a group of dedicated individuals committed to
                providing the best. With years of experience in the
                industry, we strive to be the best in our field and put
                our customers first. We work hard to ensure that your
                experience with us is perfect, and we are here to help
                you. Thank you for choosing us as your go-to provider; we
                look forward to serving you!
              </span>
              ﻿
            </p>
          </div>
        </div>
        <div className="custom-call-to-actions">
          <div className="custom-cta-box" />
          <div className="custom-cta-box">
            <div className="custom-cta-label">Book Now</div>
          </div>
        </div>
      </div>
    </div>
    <div className="custom-column-2">
      <img loading="lazy" alt="" src="https://akweb1.mydurable.com/_next/image?url=https%3A%2F%2Fimages.unsplash.com%2Fphoto-1487014679447-9f8336841d58%3Fcrop%3Dentropy%26cs%3Dtinysrgb%26fit%3Dmax%26fm%3Djpg%26ixid%3DM3wyNjI5NjF8MHwxfHNlYXJjaHwyMXx8V2ViJTIwRGVzaWdufGVufDB8fHx8MTcwNjg5Mzk5NXww%26ixlib%3Drb-4.0.3%26q%3D80%26w%3D1080&w=1920&q=90" className="customimage" />
    </div>
  </div>
</div>



      </div>
   
    </>
  );
}
export default Homepage;