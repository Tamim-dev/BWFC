import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";
import Title from "./layout/Title";
import Heading from "./layout/Heading";
import { AiTwotoneStar } from "react-icons/ai";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Testimonials = () => {
    // <div className="flex">
    //                 <div className="w-3/6">
    //                     {test.sliderItem.map((item) => (
    //                         <img className="mt-10" src={item.image} />
    //                     ))}
    //                 </div>
    //                 <div className="w-3/6">
    //                     {test.sliderItem.map((item) => (
    //                         <div className="mt-10">
    //                             <div className=" text-btncolor w-8 text-[46px] font-bold">
    //                                 {item.symbol}
    //                             </div>
    //                             <h4 className=" text-[20px] font-extrabold w-[290px] leading-7 font-manFont">
    //                                 {item.heading}
    //                             </h4>
    //                             <p className="w-[444px] font-manFont text-base text-second mt-4">
    //                                 {item.paragraph}
    //                             </p>
    //                             <div className="flex mt-3">
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                             </div>
    //                             <p className="font-manFont text-base font-extrabold mt-2">
    //                                 {item.name}
    //                             </p>
    //                             <p className=" font-manFont text-base text-second mt-2">
    //                                 {item.designation}
    //                             </p>
    //                         </div>
    //                     ))}
    //                 </div>
    //             </div>
    // <div className="flex mt-3">
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                                 <AiTwotoneStar className="text-btncolor text-lg" />
    //                             </div>

    let [test, setTest] = useState({});
    let [loding, setloding] = useState(true);
    let [activeDot, setActiveDot] = useState(0);
    const slider = React.useRef(null);

    const settings = {
        dots: true,
        fade: true,
        autoplay: true,
        infinite: true,
        arrows: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (prev, next) => {
            setActiveDot(next);
        },

        appendDots: (dots) => (
            <div
                style={{
                    position: "absolute",
                    top: "50%",
                    cursor: "pointer",
                    transform: "translateY(-50%)",
                }}
            >
                <ul style={{ margin: "0px" }}> {dots} </ul>
            </div>
        ),
        customPaging: (i) => (
            <div
                style={
                    i === activeDot
                        ? {
                              width: "30px",
                              color: "#262626",
                              borderRight: "3px #262626 solid",
                              padding: "10px 0",
                          }
                        : {
                              width: "30px",
                              color: "#262626",
                              borderRight: "3px #abc5d9 solid",
                              padding: "10px 0",
                              color: "transparent",
                          }
                }
            >
                0{i + 1}
            </div>
        ),
    };

    useEffect(() => {
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
                <Slider  ref={slider} {...settings} >
                <>
                <div className="flex">
                    <div className=" w-2/4">
                        {test.sliderItem.slice(0, 1).map((item) => (
                            <img className="mt-10" src={item.image} />
                        ))}
                    </div>
                    <div className=" w-2/4">
                        {test.sliderItem.slice(0, 1).map((item) => (
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
                                <p className="font-manFont text-base font-extrabold mt-2">
                                    {item.rating}
                                </p>
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
                </>
                <>
                <div className="flex">
                    <div className=" w-2/4">
                        {test.sliderItem.slice(1, 2).map((item) => (
                            <img className="mt-10" src={item.image} />
                        ))}
                    </div>
                    <div className=" w-2/4">
                        {test.sliderItem.slice(1, 2).map((item) => (
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
                                <p className="font-manFont text-base font-extrabold mt-2">
                                    {item.rating}
                                </p>
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
                </>
                <>
                <div className="flex">
                    <div className=" w-2/4">
                        {test.sliderItem.slice(2, 3).map((item) => (
                            <img className="mt-10" src={item.image} />
                        ))}
                    </div>
                    <div className=" w-2/4">
                        {test.sliderItem.slice(2, 3).map((item) => (
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
                                <p className="font-manFont text-base font-extrabold mt-2">
                                    {item.rating}
                                </p>
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
                </>
                </Slider>
                <div className="flex mt-6">
                    <BsArrowLeft onClick={() => slider?.current?.slickPrev()} className=" text-black w-9 h-9 rounded-full mr-8 p-1.5 hover:bg-primary hover:text-white" />
                    <BsArrowRight onClick={() => slider?.current?.slickNext()} className=" text-black w-9 h-9 rounded-full p-1.5 hover:bg-primary hover:text-white" />
                </div>
            </Container>
        </section>
    );
};

export default Testimonials;
