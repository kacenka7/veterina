import "./Map.css"
import "../../global.css"

export const Map = () => {
    return (

        <div className="footer__map">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2567.6558110123895!2d13.360302415692404!3d49.74363647936808!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470ba0e8c0b20691%3A0xdde2ec105d93d733!2sL%C3%ADskov%C3%A1%201356%2F35%2C%20312%2000%20Plze%C5%88!5e0!3m2!1scs!2scz!4v1620653076917!5m2!1scs!2scz" style={{border: 0, width: "100%", height: "200px"}} allowFullScreen loading="lazy">  </iframe>
        </div>
    )
}