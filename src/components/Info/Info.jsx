import "./Info.css"
import "../../global.css"


export const Info = () => {
    return(
        <div className="info" id="info">
        <div className="info__container">

            <div className="info__box">
                <div className="info__icon">
                    <span className="material-symbols-outlined">call</span>
                </div>

                <div className="info__data">
                    <h3 className="info__headliner">Telefonní číslo</h3>
                    <p>+420 789 456 123</p>
                </div>
            </div>

            <div className="info__box">
                <div className="info__icon">
                    <span className="material-symbols-outlined">schedule</span>
                </div>

                <div className="info__data">
                    <h3 className="info__headliner">Ordinační doba</h3>
                    <p>Po - Pá: 10:00 - 18:00</p>
                    <p>So:  9:00-11:00</p>
                </div>
                
            </div>

            <div className="info__box">
                <div className="info__icon">
                    <span className="material-symbols-outlined">location_on</span>
                </div>
                
                <div className="info__data">
                    <h3 className="info__headliner">Adresa</h3>
                    <p>Lísková 1356/35</p>
                    <p>Plzeň, 312 00 </p>
                </div>

            </div>

        </div>
        </div>
    )
} 