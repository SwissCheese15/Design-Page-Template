import "./landingSlideStyles.css"
import NavHeader from "../../Components/LandingSlideComponents/NavHeader/NavHeader";
import SideBar from "../../Components/LandingSlideComponents/SideBar/SideBar";
import MainContent from "../../Components/LandingSlideComponents/MainContent/MainContent";
import BottomBar from "../../Components/LandingSlideComponents/BottomBar/BottomBar";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { rightArrow } from "../../Redux/Slices";

function LandingSlide() {

    // Carousel
    const currentPage = useSelector((state) => state.page.currentPage)
    const style = () => {
        if (currentPage === 1) {return "studio"}
        if (currentPage === 2) {return "design"}
        if (currentPage === 3) {return "quality"}
    }

    const dispatch = useDispatch()

    useEffect(() => {
        setTimeout(() => {
            dispatch(rightArrow())
        }, 4000)
    })


    return (
        <>
            <div className="landingPageMainDiv" id={style()}>
                <NavHeader/>
                <SideBar/>
                <MainContent/>
                <BottomBar/>
            </div>
        </>
    );
}

export default LandingSlide;