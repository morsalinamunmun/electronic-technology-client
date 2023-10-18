
import Navbar from '../../Shared/Navbar/Navbar';
const Banner = () => {
    return (
            <div className="bg-no-repeat bg-cover h-screen bg-center" style={{backgroundImage: 'url(https://i.ibb.co/LnnTWS7/banner.png)'}}>
                <Navbar></Navbar>
                    <div className="hero-content grid grid-cols-2 text-left text-neutral-content max-w-6xl mx-auto mt-48">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">Electronics technology</h1>
                                <p className="mb-5">This online retailer specializes in photography and video equipment, but they also offer a range of electronics, including smartphones and audio equipment.</p>
                                <button className="bg-amber-500 px-3 py-2 text-white">Get Started</button>
                                <button className="bg-gray-200 text-amber-500 px-3 py-2 ml-2">Learn More</button>
                        </div>
                        <div></div>
                    </div>
            </div>
    );
};

export default Banner;