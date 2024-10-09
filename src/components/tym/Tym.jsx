import "./Tym.css"
import "../../global.css"

import { employee } from './employee';


export const Tym = () => {
    return(
        <div className="nasTym" id='nasTym'>

            <div className="nasTym__headliner">
                <span className="material-symbols-outlined">pets</span>
                <h2> Náš tým</h2>
            </div>
            

            <div className='nasTym__slider'>
                <div className='nasTym__inner'>
                    {employee.map(({name, degree, position, about, photo}) => {
                        return (
                            <div className="nasTym__employee">
                                <img className='nasTym__photo' src={photo}  alt={name} />

                                <div className='nasTym__data'>
                                    <h3 className='nasTym__name'> {degree} {name}</h3>
                                    <p className='nasTym__position'> {position}</p>
                                    <div className='nasTym__box'>
                                        <p className='nasTym__about'> {about}</p>
                                    </div>
                                </div>
                            </div>
                         )
                     })}
                     </div>
            </div>
        </div>
    )
} 



