import { Parallax } from 'react-parallax';


const Cover = ({ img, title, description }) => {
    return (

        <Parallax
            blur={{ min: -50, max: 40 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className="hero h-[510px]">
                <div className="hero-overlay bg-opacity-40"></div>
                <div className="hero-content text-center bg-black px-56 opacity-50 py-10 ">
                    <div className="max-w-md text-white">
                        <h1 className="mb-6 text-5xl font-bold uppercase">{title}</h1>
                        <p className="mb-5 uppercase">{description}</p>
                    </div>
                </div>
            </div>
            
        </Parallax>
        


    );
};

export default Cover;