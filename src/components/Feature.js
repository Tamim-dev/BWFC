import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";
import Button from "./layout/Button";
import Title from "./layout/Title";
import Heading from "./layout/Heading";
import Paragraph from "./layout/Paragraph";

const Feature = () => {
    let [featureData, setfeatureData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function fea() {
            let feature = await axios.get(
                "https://bwfc-api.vercel.app/feature"
            );
            setfeatureData(feature.data);
            setloding(false);
        }
        fea();
    }, []);

    if (loding) {
        return;
    }
    return (
        <section>
            <Container>
                <div className="flex mt-24 relative bg-no-repeat"
                style={{ backgroundImage: `url(${featureData.featureShape})` }}>
                    <div className="w-6/12">
                        <img src={featureData.featureImage} />
                    </div>
                    <div className="w-6/12">
                        <Title text={featureData.subTitle} />
                        <Heading text={featureData.title}/>
                        <Paragraph className={"w-[512px]"} text={featureData.paragraph}/>
                        <Button>{featureData.button.text}</Button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Feature;
