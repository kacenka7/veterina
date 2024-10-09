import "./Pohotovost.css"
import "../../global.css"

export const Pohotovost = () => {
    return(
        <div className="pohotovost" id="pohotovost">
            
            <div className="pohotovost__headliner">
                <span className="material-symbols-outlined">medical_services</span>
                <h2> Pohotovost</h2>
            </div>
            
            <p className="pohotovost__text"> Mimo ordinační dobu poskytujeme nonstop pohotovostní službu pro naše stálé pacienty. Pohotovost je určena primárně pro akutně vzniklé a život ohrožující případy. </p>
        </div>
    )
}