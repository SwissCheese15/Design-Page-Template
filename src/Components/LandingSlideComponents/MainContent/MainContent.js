import "./mainContentStyles.css"
import { useSelector } from "react-redux";
import Studio from "./Studio";
import Design from "./Design";
import Quality from "./Quality";



function MainContent() {

    const currentPage = useSelector((state) => state.page.currentPage)

    return (
        <>
                <img src="/images/logo.svg" alt="company logo" id="logo"></img>
                    {currentPage === 1 ? <Studio/> : "" }
                    {currentPage === 2 ? <Design/> : "" }
                    {currentPage === 3 ? <Quality/> : "" }
                <div id="sideBarRight"></div>
        </>
    );
}

export default MainContent;