import axios from "axios";
import React, { useState } from "react";
import Container from "./layout/Container";
import Title from "./layout/Title";
import Heading from "./layout/Heading";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowLeft,BsArrowRight } from "react-icons/bs";

const Testimonials = () => {
    let [test, setTest] = useState({});
    let [loding, setloding] = useState(true);

    useState(() => {
        async function test() {
            let testData = await axios.get(
                "https://bwfc-api.vercel.app/client"
            );
            setTest(testData.data);
            setloding(false);
        }
        test();
    }, []);

    if (loding) {
        return;
    }

    return (
        <section>
            <Container>
                <Title text={test.subTitle} />
                <Heading text={test.title} />
                <div className="flex">
                    <div className="w-3/6">
                        {test.sliderItem.map((item) => (
                            <img className="mt-10" src={item.image} />
                        ))}
                    </div>
                    <div className="w-3/6">
                        {test.sliderItem.map((item) => (
                            <div className="mt-10">
                                <div className=" text-btncolor w-8 text-[46px] font-bold">
                                    {item.symbol}
                                </div>
                                <h4 className=" text-[20px] font-extrabold w-[290px] leading-7 font-manFont">
                                    {item.heading}
                                </h4>
                                <p className="w-[444px] font-manFont text-base text-second mt-4">
                                    {item.paragraph}
                                </p>
                                <div className="flex mt-3">
                                    <AiTwotoneStar className="text-btncolor text-lg" />
                                    <AiTwotoneStar className="text-btncolor text-lg" />
                                    <AiTwotoneStar className="text-btncolor text-lg" />
                                    <AiTwotoneStar className="text-btncolor text-lg" />
                                    <AiTwotoneStar className="text-btncolor text-lg" />
                                </div>
                                <p className="font-manFont text-base font-extrabold mt-2">
                                    {item.name}
                                </p>
                                <p className=" font-manFont text-base text-second mt-2">
                                    {item.designation}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="flex justify-center">
                <BsArrowLeft className=" text-black w-9 h-9 rounded-full mr-8 p-1.5 hover:bg-primary hover:text-white"/>
                <BsArrowRight className=" text-black w-9 h-9 rounded-full p-1.5 hover:bg-primary hover:text-white"/>
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
