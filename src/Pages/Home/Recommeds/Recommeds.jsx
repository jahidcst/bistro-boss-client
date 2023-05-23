import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import ChefCard from "./ChefCard";

const Recommeds = () => {

    const [spacial, setSpacial] = useState([])

    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => setSpacial(data))
    }, [])
    return (
        <section className="my-10">
            <SectionTitle
                subHeading={"Should Try"}
                heading={"CHEF RECOMMENDS"}
            ></SectionTitle>

            {
                <div className="grid md:grid-cols-3 ">
                    {
                        spacial.slice(0,3).map(item => <ChefCard
                            key={item._id}
                            item={item}
                        ></ChefCard>)
                    }
                </div>
                
            }
        </section>
    );
};

export default Recommeds;