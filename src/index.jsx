import { createRoot } from 'react-dom/client';
import { Header } from './components/header/Header';
import { Info } from './components/Info/Info';
import { Onas } from './components/Onas/Onas';
import { Pohotovost } from './components/Pohotovost/Pohotovost';
import { Tym } from './components/tym/Tym';
import { Sluzby } from './components/sluzby/Sluzby';
import { Map } from './components/map/map';
import { Footer } from './components/footer/Footer';

import './global.css';
import "./components/header/Header.css";


createRoot(
  document.querySelector('#app'),
).render(
<>
<Header/>
<Info/>
<Onas/>
<Pohotovost/>
<Tym/>
<Sluzby/>
<Map/>
<Footer/>
</>
);
