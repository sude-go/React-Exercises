import PromoHeading from './Heading';
import PromoFooter from './Footer';
import './App.css';
// data flow is in one direction only parent to child (UNİDİRECTİONAL)
// Event -> state -> view-> event...  and the loop continues like this.
 

const data ={ 
  heading : " %80 off all items!",
  callToAction:"Everything must go"
};

function Promo(){
  return (
      <div>
          <PromoHeading
          heading={data.heading}
          callToAction={data.callToAction}
          />
          <PromoFooter
          callToAction={data.callToAction}
          />
      </div>
  );
};
export default Promo;