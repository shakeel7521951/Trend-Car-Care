
import banner from '../assets/home/pricing_banner.png';
import PricingList from '../components/pricing/PricingList';

const Pricing = () => {
  return (
    <div>
        <img src={banner} alt='Pricing Banner' className='h-[85vh]'/>
        <PricingList/>
    </div>
  )
}

export default Pricing