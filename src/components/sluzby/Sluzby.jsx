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
                    <div className="sluzby__box"> <h4>Interní medicína</h4> </div>
                    <span className="material-symbols-outlined sluzby__icon">stethoscope</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h4>Kardiologie</h4> </div>
                    <span className="material-symbols-outlined sluzby__icon">ecg_heart</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h4>Stomatologie</h4> </div>
                    <span className="material-symbols-outlined sluzby__icon">dentistry</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h4>Chirurgie</h4> </div>
                    <span className="material-symbols-outlined sluzby__icon">surgical</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h4>Ortopedie</h4> </div>
                    <span className="material-symbols-outlined sluzby__icon">tibia_alt</span>
                </div>

                <div className="sluzby__item">
                    <div className="sluzby__box"> <h4>Prevence</h4> </div>
                    <span className="material-symbols-outlined sluzby__icon">prescriptions</span>
                </div>


            </div>
        </div>
    )

}
