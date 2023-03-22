import "./offerStyles.css"

function Offer() {

    return(
        <div className="offerMainDiv">
            <div id="leftEmptySideBar"/>
            <div id="middleEmptyDiv"/>
            <div id="rightEmptySideBar"/>
            <div className="offerContent">
                <div className="offerTitle">
                    <h4>&#91; Our services &#93;</h4>
                    <h3>What Can We Offer</h3>
                    <div className="dots"></div>
                </div>
                <div className="offers">
                    <div className="borderDiv">
                        <div className="offerPanel" id="panelOne">
                            <img src="/images/iconbox1.2.png" alt="Design Logo" className="offerImage"/>
                            <h3>Design & Planning</h3>
                            <p>We will help you to get the result you dreamed of.</p>
                            <h5>read more</h5>
                        </div>
                    </div>
                    <div className="borderDiv">
                        <div className="offerPanel" id="panelTwo">
                            <img src="/images/iconbox1.1.png" alt="Solution Logo" className="offerImage"/>
                            <h3>Custom Solutions</h3>
                            <p>Individual, aesthetically stunning solutions for customers.</p>
                            <h5>read more</h5>
                        </div>
                    </div>
                    <div className="borderDiv">
                        <div className="offerPanel" id="panelThree">
                            <img src="/images/iconbox1.3.png" alt="Decor Logo"  className="offerImage"/>
                            <h3>Furniture & Decor</h3>
                            <p>We create and produce our product design lines.</p>
                            <h5>read more</h5>
                        </div>
                    </div>
                </div>
                <div className="statsDiv">
                    <div className="stat">
                        <h4>&#91;180 +&#93;</h4>
                        <h5>CURRENT CLIENTS</h5>
                    </div>
                    <div className="stat">
                        <h4>&#91;10 +&#93;</h4>
                        <h5>YEARS OF EXPERIENCE</h5>
                    </div>
                    <div className="stat">
                        <h4>&#91;35 +&#93;</h4>
                        <h5>AWARDS WINNING</h5>
                    </div>
                    <div className="stat">
                        <h4>&#91;5 +&#93;</h4>
                        <h5>OFFICES WORLDWIDE</h5>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Offer