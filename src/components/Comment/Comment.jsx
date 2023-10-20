import img1 from '../../assets/pink-apple.jpg'
import img2 from '../../assets/Intel_UHD_Graphics.jpg'
import img3 from '../../assets/samsung-refrigerator.jpg'
import img4 from '../../assets/apple-headphones.png' 
const Comment = () => {
    return (
        <div className="flex flex-col lg:flex-row max-w-4xl mx-auto gap-10 my-20">

             <form className="">
                <h2 className='text-2xl font-semibold py-7 text-blue-900'>Give your important opinion here</h2>
                    <input type="email" name="" id=""placeholder="Email" className="py-2 px-3 border-2 my-5 rounded-full border-blue-800 w-full"/>
                    <br/>
                    <textarea className="textarea textarea-bordered mt-5 border-2 rounded-full border-blue-800 w-full" placeholder="Comment"></textarea>
                     <br />
                    <button className="bg-blue-900 text-white px-5 py-3 my-5 rounded-full">Submit</button>
            </form>
            <div className='grid grid-cols-2 gap-2 bg-gray-300'>
                <img className='w-56' src={img2} alt="" />
                <img className='w-56' src={img3} alt="" />
                <img className='w-56' src={img1} alt="" />
                <img className='w-56' src={img4} alt="" />
            </div>
        </div>
    );
};

export default Comment;