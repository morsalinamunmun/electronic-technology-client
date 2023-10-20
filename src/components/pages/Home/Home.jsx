import Brands from "../../Brand/Brands";
import Choose from "../../Choose/Choose";
import Comment from "../../Comment/Comment";
import Banner from "../Banner/Banner";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Brands></Brands>
            <Choose></Choose>
            <Comment></Comment>
        </div>
    );
};

export default Home;