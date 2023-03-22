import Copyright from "../../Components/FooterSlideComponents/Copyright"
import "./footerSlideStyles.css"

function FooterSlide() {

    return (
            <div className="footerSlideMainDiv">
                <div className="footerBlocks">
                    <div className="block" id="block1">
                        <img src="/images/logoFooter.png" alt="company logo" id="footerLogo"/>
                        <h4>
                            We provide a full range of interior
                            design, architectural design.
                        </h4>
                        <div className="socialIcons">
                            <a href="https://www.facebook.com">
                                <img src="/images/fbLogo.png" alt="facebook icon"/>
                            </a>
                            <a href="https://twitter.com/">
                                <img src="/images/twLogo.png" alt="twitter icon"/>
                            </a>
                            <a href="https://www.linkedin.com">
                                <img src="/images/liLogo.png" alt="linkedin icon"/>
                            </a>
                            <a href="https://www.instagram.com">
                                <img src="/images/inLogo.png" alt="instagram icon"/>
                            </a>
                        </div>
                    </div>
                    <div className="block" id="block2and3">
                        <h3>Contacts</h3>
                        <a href="https://goo.gl/maps/JHpFAdbPZZPU7sQo6">
                            <h4>411 University St, Seattle, USA</h4>
                        </a>
                        <a href="mailto:theratio_interior@mail.com">
                            <h4>theratio_interior@mail.com</h4>
                        </a>
                        <a href="tel:+1 800 456 789 123">
                            <h4>+1 800 456 789 123</h4>
                        </a>
                    </div>
                    <div className="block" id="block2and3">
                        <h3>Latest Projects</h3>
                        <a href="https://design-page-template.vercel.app">
                            <h4>Stylish Family Appartment</h4>
                        </a>
                        <a href="https://design-page-template.vercel.app">
                            <h4>Modern Villa in Belgium</h4>
                        </a>
                        <a href="https://design-page-template.vercel.app">
                            <h4>Private House in Spain</h4>
                        </a>
                    </div>
                    <div className="block" id="block4">
                        <h3>Subscribe</h3>
                        <input placeholder="YOUR EMAIL"></input>
                        <img src="/images/sendIcon.png" alt="send icon" />
                        <p>Follow our newsletter to stay updated about agency.</p>
                    </div>
                </div>
                <Copyright/>
            </div>
    )

}

export default FooterSlide