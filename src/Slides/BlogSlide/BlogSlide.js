import "./blogSlideStyles.css"

function BlogSlide() {

    return (
            <div className="blogSlideMainDiv">
                <div id="leftEmptySideBar"/>
                <div id="middleEmptyDiv"/>
                <div id="rightEmptySideBar"/>
                <div className="blogContent">
                    <div className="titleSubtitleButton">
                    <div className="titleSubtitle">
                        <h4>&#91; Our blog &#93;</h4>
                        <a href="https://design-page-template.vercel.app">Read Our Latest News</a>
                        <div className="dots"></div>
                    </div>
                        <button id="viewAllButton">
                            VIEW ALL
                        </button>
                    </div>
                    <div className="blogs">
                            <div className="blogPanel" id="blogPanelOne">
                                <div className="blogImageDiv">
                                    <img src="/images/grid1.jpeg" alt="image of nice kitchen" className="blogImage"/>
                                    <h4>INTERIOR</h4>
                                </div>
                                <div className="dateDotsAuthor">
                                    <h5>March 19, 2020</h5>
                                    <h4>..</h4>
                                    <h5>Tom Black</h5>
                                </div>
                                <a href="https://design-page-template.vercel.app">Top 10 Tips for Your Kitchen Interior Design</a>
                                <p>A faceting effect livens up and...</p>
                            </div>
                            <div className="blogPanel" id="blogPanelTwo">
                                <div className="blogImageDiv">
                                    <img src="/images/grid2.jpeg" alt="image of blueprints" className="blogImage"/>
                                    <h4>INTERIOR</h4>
                                </div>
                                <div className="dateDotsAuthor">
                                    <h5>March 19, 2020</h5>
                                    <h4>..</h4>
                                    <h5>Tom Black</h5>
                                </div>
                                <a href="https://design-page-template.vercel.app">The Golden Ratio Rules for Best 2D Sketch</a>
                                <p>A faceting effect livens up and...</p>
                            </div>
                            <div className="blogPanel" id="blogPanelThree">
                                <div className="blogImageDiv">
                                    <img src="/images/grid3.jpeg" alt="image of happy worker" className="blogImage"/>
                                    <h4>INTERIOR</h4>
                                </div>
                                <div className="dateDotsAuthor">
                                    <h5>March 19, 2020</h5>
                                    <h4>..</h4>
                                    <h5>Tom Black</h5>
                                </div>
                                <a href="https://design-page-template.vercel.app">Use Pastel Colors & Natural Materials</a>
                                <p>A faceting effect livens up and...</p>
                            </div>
                    </div>
                </div>
            </div>
    )

}

export default BlogSlide