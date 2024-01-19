import React, {useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";
import heroImage from "../../assets/Hero-img.jpg";
import financeImg from "../../assets/businessman-showing-key.jpg"
import testDriveImg from "../../assets/steering wheel.jpeg"
import aboutUsImage from "../../assets/aboutus.jpg";
import CircularImage from "../CircularImage/CircularImage";
import ContactInfo from "../ContactInfo/ContactInfo";
import BodyTypeSelector from "../BodyTypeSelector/BodyTypeSelector";

function Home() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []); 
  return (
    <div className={styles.home_container}>
      <div className={styles.hero_container}>
        <img
          className={styles.hero_img}
          src={heroImage}
          alt=""
          width={"100%"}
          height={"20%"}
        />
        <div className={styles.overlay}></div>
        <div className={styles.txt_overlay_container}>
          <div className={styles.hero_txt_main}>NEED SOME NEW</div>
          <div className={styles.hero_txt_main}> WHEELS?</div>
          <div className={styles.hero_txt_secondary}>
            View our Large Selection of Quality Used Vehicles.
          </div>
          <Link to="/inventory" style={{ textDecoration: "none" }}>
            <div>
              <button className={styles.hero_btn}>View Inventory</button>
            </div>
          </Link>
        </div>
      </div>

<BodyTypeSelector/>


      <div className={styles.inventory_search_container}></div>

      <div>
        <div className={styles.about_us_container}>
          <img
            src={aboutUsImage}
            className={styles.about_us_img}
            width={"100%"}
            height={"10%"}
            alt=""
          />
          <div className={styles.overlay}></div>
          <div className={styles.about_us_txt_overlay_container}>
            <span>A Decade of Trusted Experience</span>
            <p>
              Gofer Motors LLC offers an extensive range of top-quality used
              cars, each meticulously inspected and serviced to ensure our
              customers receive the best value for their investment. Our
              deep-rooted commitment to excellence, combined with our rich
              experience of over 10 years, makes us the go-to choice for those
              looking for their next vehicle. At Gofer Motors LLC, we don't just
              sell cars; we sell trust, quality, and a lasting relationship.
            </p>
          </div>
          
        </div>
        <div className={styles.contact_section}>
          <span className={styles.image_container}>
            <CircularImage imageUrl={financeImg}  />
         <h1>In House Financing Available!</h1>
         <p>Our commitment to excellence extends to making the financing process seamless, whether you're eyeing a sleek sedan or a robust SUV. Let us tailor a financing solution that aligns with your unique needs.</p>
         <Link to="/contact" style={{ textDecoration: "none" }}>
         <button className={styles.contact_btn}>Contact us now!</button>
         </Link>
          </span>
          <span>
            <span className={styles.line_box}></span>
          </span>
          <span className={styles.image_container}>
          <h1>Schedule a Test Drive!</h1>
         <p>Dive into the world of quality and precision with our carefully inspected used cars. Schedule a test drive today and let the road reveal the unmatched performance of our vehicles.</p>
            <CircularImage imageUrl={testDriveImg} />
            <div>
  <Link to="/contact" style={{ textDecoration: "none" }}>
    <button className={styles.contact_btn}>Schedule a test drive!</button>
  </Link>
</div>

          </span>
        </div>

        <div className={styles.reviews_container}>
        <hr/>
        <div className="elfsight-app-f758bd66-983b-415b-97cd-0c676468ba9f" data-elfsight-app-lazy>
</div>
        </div>
                <hr/>

        <div className={styles.contact_container}>
                  <hr/>

        <ContactInfo className={styles.ContactInfo_Component}/>
        <iframe className={styles.google_map}
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28633.888531722707!2d-98.1018341!3d26.2215181!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86659f5b93e0b6d5%3A0x948d328f2ce5f191!2sGofer%20Motors%2C%20LLC!5e0!3m2!1sen!2sus!4v1697062032696!5m2!1sen!2sus" 
                    width="600" 
                    height="450" 
                    style={{ border: "0" }} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Gofer Motors Location" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
                </div>
      </div>


    </div>
  );
}

export default Home;
