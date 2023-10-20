import Brands from "../../Brand/Brands";
import Comment from "../../Comment/Comment";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Comment></Comment>
        </div>
    );
};

export default Home;