import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";
import Title from "./layout/Title";
import Heading from "./layout/Heading";

const Choose = () => {
    let [chooseData, setChooseData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function data() {
            let fiData = await axios.get("https://bwfc-api.vercel.app/choose");
            setChooseData(fiData.data);
            setloding(false);
        }
        data();
    }, []);

    if (loding) {
        return;
    }

    return (
        <section>
            <Container>
                <div className="py-14 px-20 bg-third rounded-2xl relative">
                    <img className=" absolute -top-9" src="assets/46.png"/>
                        <Title className="flex justify-center items-center " text={chooseData.subTitle} />
                        <Heading className="w-full flex justify-center items-center " text={chooseData.title} />
                  
                    <div className=" flex justify-between flex-wrap gap-y-10 mt-16">
                        {chooseData.items.map(
                            (item) =>
                                item.visibility && (
                                    <div className="bg-white w-[666px] h-[350px] flex items-center justify-center rounded-2xl">
                                        <div className="relative w-6/12">
                                            <h3 className=" font-manFont font-extrabold text-2xl mb-6">
                                                {item.title}
                                            </h3>
                                            <p className="text-second text-lg font-manFont leading-8">{item.details}</p>
                                            <div
                                            style={{
                                                backgroundColor:
                                                    item.circleColor,
                                            }}
                                            className={`h-[58px] w-[58px] rounded-full  absolute top-[0] -left-[80px]`}
                                        ></div>
                                        </div>
                                        
                                    </div>
                                )
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Choose;
