
import {useState} from "react"
import "./Header.css"
import "../../global.css"


export const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

  const handleOnClick = ()=>{
    console.log("Kliknuto na menu");
    setIsOpen(!isOpen)
    
  }

  return (
      <header className="header">
        <div className="header__box">
          <div className='navBar'>
            <h2 className='navBar__burgerMenu' onClick={handleOnClick}>Menu ☰</h2>
            <ul className={isOpen ? "navBar__menu" : "navBar__menu navBar__menu--close"}>
              <li className='navBar__item'> <a onClick={handleOnClick} href="#info">Kontakt</a></li>
              <li className='navBar__item'><a onClick={handleOnClick} href="#info">Ordinační hodiny</a></li>
              <li className='navBar__item'><a onClick={handleOnClick} href="#pohotovost">Pohotovost</a></li>
              <li className='navBar__item'><a onClick={handleOnClick} href="#nasTym">Náš tým</a></li>
              <li className='navBar__item'><a onClick={handleOnClick} href="#sluzby">Služby</a></li>
            </ul>
          </div>

          <div className="header__title">
            <div className="header__titleBox">
              <h1 className="veterina">Veterina</h1>
              <h1 className="macek">Macek</h1>
            </div>
          </div>
        </div>
      </header> 
  );
};

