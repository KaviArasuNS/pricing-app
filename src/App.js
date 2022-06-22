import logo from './logo.svg';
import './App.css';
import { PricingFree } from './PricingFree';
import {PricingPlus} from './PricingPlus';
import {PricingPro} from './PricingPro';


function App() {
  return (
    <div className='pricing-table'>
      <PricingFree/>
      <PricingPlus/>
      <PricingPro/>
    </div>
  );
}

export default App;



