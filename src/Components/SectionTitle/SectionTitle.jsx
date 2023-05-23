
const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className=" md:w-4/12 mx-auto text-center my-6">
            <p className= "italic text-orange-500 text-lg mb-2" >--- {subHeading} ---</p>
            <h2 className="text-3xl uppercase border-y-4 py-4">{heading}</h2>
        </div>
    );
};

export default SectionTitle;