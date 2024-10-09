import "./Footer.css"
import "../../global.css"

export const Footer = () => {
    return (
        <footer className="footer">

        <div className="footer__info">
                <div className="footer__box">
                    <span className="material-symbols-outlined footer__icon">call</span>
                    <p className="footer__data">+420 789 456 123</p>
                </div>
                <div className="footer__box">
                    <span className="material-symbols-outlined footer__icon">schedule</span>
                    <p className="footer__data">Po - Pá: 10:00 - 18:00</p>
                    <p className="footer__data">So:  9:00-11:00</p>
                </div>

        </div>

            <p className="footer__sign"> © Kate Lenc 2024</p>
        </footer>
    )
}