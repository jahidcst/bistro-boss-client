import chef from '../../../assets/home/chef-service.jpg'
const About = () => {
    return (
        <div>
            <div className="hero max-h-screen">
                <img className='h-[370px] w-[1320px]' src={chef} alt="" />

                <div className="hero-content text-center text-neutral-content px-20">
                    <div className=" bg-black py-8 bg-opacity-30 ">
                        <h1 className='text-4xl font-semibold mb-3 uppercase'>Bistro Boss</h1>
                        <p className="mb-5  px-24 ">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;