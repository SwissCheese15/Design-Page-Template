import "./teamSlideStyles.css"
import data from "./sample.json"
import { useState } from "react";

function TeamSlide() {

    const [currentTeam, setCurrentTeam] = useState(1)

    const handlePoint1Click = () => {
        setCurrentTeam(1)
    }

    const handlePoint2Click = () => {
        setCurrentTeam(2)
    }

    return(
        <div className="mainTeamSlideDiv">
            <div className="titleTextDiv">
                <h4>&#91; Our professionals &#93;</h4>
                <h3>Meet Our Skilled Team</h3>
                <div className="dots"></div>
            </div>
            <div id={currentTeam === 1 ? "team1" : "team2"} className="team">
            {data.map(d => (
                        <div className="teamMember" key={d.description}>
                            <div className="memberInfo">
                                <h4>{d.first_name} {d.last_name}</h4>
                                <h3>+</h3>
                                <h5>&#91; {d.job_title} &#93;</h5>
                            </div>
                            <img className="teamImage" src={d.profile_picture} alt="profile image worker" />
                        </div>
                    ))}
            </div>
            <div className="optionPointDiv">
                <div className={currentTeam === 1 ? "pointBorderVisible" : "pointBorderHidden"} onClick={handlePoint1Click}>
                    <p>.</p>
                </div>
                <div className={currentTeam === 2 ? "pointBorderVisible" : "pointBorderHidden"} onClick={handlePoint2Click}>
                    <p>.</p>
                </div>
            </div>
        </div>
    )

}

export default TeamSlide