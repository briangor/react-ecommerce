import Footer from "../components/Footer";
import mapImg from "../assets/images/ui-map-wireframe.png";

const Contact = () => {
  return (
    <>
      <div className="container contact">
        <div className="row">
          <div className="col side1">
            <h5 className="contact-title">Get in touch </h5>
            <form className="contact-form" action="">
              <label>
                <input
                  type="text"
                  placeholder="Name"
                  className="contact-input"
                />
              </label>
              <label>
                <input
                  type="text"
                  placeholder="Email"
                  className="contact-input"
                />
              </label>
              <textarea
                placeholder="Message"
                className="contact-input contact-textarea"
              ></textarea>
              <button className="btn contact-btn">Send</button>
            </form>
          </div>
          <div class="col contact-map">
            <img src={mapImg} alt="map" />
            <i class="bi bi-geo contact-geoloc"></i>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
