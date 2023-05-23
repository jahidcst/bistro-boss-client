import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import './featured.css'
import featured from '../../../assets/home/featured.jpg';
const Featured = () => {
    return (
        <div className="featured-item pt-8 bg-fixed">
            <SectionTitle
                subHeading={"Check it Out"}
                heading={"FEATURED ITEM"}
            ></SectionTitle>
            <div className="md:flex bg-slate-500 bg-opacity-30 justify-center items-cente py-16 px-36">
                <div>
                    <img src={featured} alt="" />
                </div>
                <div className="md:ml-10 space-y-2 text-white">
                    <p>Sep 09, 2003</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus excepturi, obcaecati placeat, ullam sequi ea amet suscipit optio asperiores ratione adipisci veniam molestias iste molestiae! Quibusdam cumque labore perferendis expedita impedit facilis odio ea deleniti vel nam ad enim veniam et repellat debitis dicta velit quas sequi, minus consequatur assumenda!</p>
                    <button className="btn btn-outline uppercase border-0 border-b-4 text-black">Order Now!!</button>

                </div>
            </div>
        </div>
    );
};

export default Featured;