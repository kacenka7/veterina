import "./Sluzby.css"
import "../../global.css"

export const Sluzby = () => {
    return (
        <div className="sluzby" id="sluzby">
            <div className="sluzby__headliner">
            <span className="material-symbols-outlined">vaccines</span>
                <h2> Služby</h2>
            </div>

            <div className="sluzby__container">

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h3>Interní medicína</h3> </div>
                    <span className="material-symbols-outlined sluzby__icon">stethoscope</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h3>Kardiologie</h3> </div>
                    <span className="material-symbols-outlined sluzby__icon">ecg_heart</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h3>Stomatologie</h3> </div>
                    <span className="material-symbols-outlined sluzby__icon">dentistry</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h3>Chirurgie</h3> </div>
                    <span className="material-symbols-outlined sluzby__icon">surgical</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h3>Ortopedie</h3> </div>
                    <span className="material-symbols-outlined sluzby__icon">tibia_alt</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h3>Prevence</h3> </div>
                    <span className="material-symbols-outlined sluzby__icon">prescriptions</span>
                </div>


            </div>
        </div>
    )

}
