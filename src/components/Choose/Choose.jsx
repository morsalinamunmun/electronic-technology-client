import { GrMapLocation } from 'react-icons/gr';
import { MdOnlinePrediction } from 'react-icons/md';
import { GiParachute } from 'react-icons/gi';
const Choose = () => {
    return (
        <div className='my-28 max-w-4xl mx-auto'>
            <h2 className="text-2xl font-bold text-blue-900 text-center mb-16">Why Choose Us</h2>
            <div className="flex flex-col md:flex-row gap-10">
                <div className='text-center'>
                    <GrMapLocation className='text-3xl flex mx-auto mb-3'></GrMapLocation>
                    <h3 className='font-semibold text-xl'>Our location</h3>
                    <p>road-523, niskaton-11 Mirpur Dhaka Bnagladessh</p>
                </div>
                <div className='text-center'>
                    <MdOnlinePrediction className='text-3xl flex mx-auto mb-3'></MdOnlinePrediction>
                    <h3 className='font-semibold text-xl'>Online Services</h3>
                    <p>These services often provide features for browsing products, making purchases, and tracking orders.</p>
                </div>
                <div className='text-center'>
                    <GiParachute className='text-3xl flex mx-auto mb-3'></GiParachute>
                    <h3 className='font-semibold text-xl'>Best Price Guarantee</h3>
                    <p>The goal of a Best Price Guarantee is to instill confidence in customers that they are getting the best deal available.</p>
                </div>
            </div>
        </div>
    ); 
};

export default Choose;