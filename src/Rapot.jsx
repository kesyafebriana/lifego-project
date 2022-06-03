import background from './assets/bgLP.png';
import Logo from "./assets/logofix.png";
import { Link } from 'react-router-dom';
import Button from "./components/button";
import Report from "./assets/report.png";

function Rapot(props) {

  return (
    <>
    <div className="coba">
      <div className='Rapot'>
        <img src={background} className="background" alt=""/>
      </div>

      <div className="logoh">
        <img width="27%" src={Logo} />
      </div>

      <div className="rapot">
        <img width="80%" src={Report} className="report" alt=""/>
      </div>

      <div className="tombol">
        <Link to='/'><Button item="Exit">Back</Button></Link> 
      </div>
      </div>
    </>
  );
}

export default Rapot; 