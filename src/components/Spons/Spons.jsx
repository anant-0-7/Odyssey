import "./Spons.css";
import Mankind from '../../assets/mankind.svg';
import Nodwin from '../../assets/nodwin.svg'; 
import ICICI from '../../assets/icici.svg';
import Quelica from '../../assets/quelica.svg';
import Mercy from '../../assets/mercy_for_animals.svg';



export default function Spons(){
    return (<>
    <div className="spons-container ">
        <div className="main-heading">
            <h1 className="main-title">OUR SPONSORS</h1>
        </div>
        <div className="heading">
            <p className="small-heading">Our Partners in Celebration!</p>
        </div>
        <div className="heading">
            <p className="description">A heartfelt thank you to our sponsors for making Odyssey possible! We extend our gratitude to these organizations for their support and commitment to fostering creativity and culture. Explore our sponsors' page to learn more about the fantastic companies that believe in the power of celebration.</p>
        </div>
        <div className="cards">
            <div className="items" style={{backgroundColor : "#FFFFFF"}}><img src ={Mankind} /></div>
            <div className="items" style={{backgroundColor : "#FFFFFF"}}><img src ={Nodwin} /></div>
            <div className="items" style={{backgroundColor : "#FFFFFF"}}><img src ={ICICI} /></div>
            <div className="items" style={{backgroundColor : "#FFFFFF"}}><img src ={Quelica} /></div>
            <div className="items" style={{backgroundColor : "#FFFFFF"}}><img src ={Mercy} /></div>
        </div>

    </div>
    
    
    </>);
}