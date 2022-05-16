import Footer from "../components/Footer";
import signature from "../assets/images/signature_moments.png";

const About = () => {
    return ( 
        <>
        <div className="about">
            <h5>About</h5>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Cras semper auctor neque vitae. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper malesuada. Ac felis donec et odio pellentesque diam volutpat. Tempor nec feugiat nisl pretium fusce id velit. Amet purus gravida quis blandit turpis cursus in hac. Velit euismod in pellentesque massa placerat. Rhoncus aenean vel elit scelerisque. Dolor morbi non arcu risus quis varius quam quisque id. Sit amet massa vitae tortor. Nibh nisl condimentum id venenatis a condimentum vitae sapien. Mi in nulla posuere sollicitudin aliquam ultrices. In arcu cursus euismod quis viverra nibh cras pulvinar. Nullam ac tortor vitae purus faucibus ornare suspendisse. In pellentesque massa placerat duis ultricies lacus. In iaculis nunc sed augue lacus viverra vitae.
            </p>
            {/* <p>
            Consequat interdum varius sit amet mattis vulputate enim. Dignissim diam quis enim lobortis. At erat pellentesque adipiscing commodo elit at imperdiet. Suscipit tellus mauris a diam maecenas sed. Enim facilisis gravida neque convallis a cras. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Rutrum tellus pellentesque eu tincidunt tortor aliquam nulla. Pretium quam vulputate dignissim suspendisse in. Eleifend mi in nulla posuere sollicitudin aliquam. Sit amet aliquam id diam. Pulvinar elementum integer enim neque volutpat ac tincidunt. Id venenatis a condimentum vitae sapien. Urna nunc id cursus metus aliquam eleifend mi.
            </p> */}
            <img src={signature} alt="signed" className="about-signature"/>
        </div>
        <Footer />
        </>
     );
}
 
export default About;