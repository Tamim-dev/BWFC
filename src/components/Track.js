import React, { useState } from "react";
import Container from "./layout/Container";
import Title from "./layout/Title";
import Heading from "./layout/Heading";
import Paragraph from "./layout/Paragraph";

const Track = () => {
    return (
        <section className=" bg-primary px-16 py-[75px] mt-24 ">
            <Container>
                <div className=" flex">
                    <div className="w-6/12">
                        <Title className={" text-white font-bold text-sm"} text="WHY CHOOSE US" />
                        <Heading className={" text-white w-[528px]"} text="Track your crytpo portfolio on the best way possible" />
                        <Paragraph className={" text-white w-[446px]"} text="End-to-end payments and financial management in a single solution. Meet the right platform to help realize." />
                    </div>
                    <div className="w-6/12 pl-16">
                        <input
                            placeholder="Email Address"
                            className="font-manFont block w-96 h-16 pl-5 rounded-md my-6 bg-[rgba(242,243,244,.20)]"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="font-manFont block w-96 h-16 pl-5 rounded-md my-6 bg-[rgba(242,243,244,.20)]"
                        />
                        <button className="w-96 font-manFont bg-btncolor py-4 rounded-md text-white font-bold text-base hover:bg-[#fb7550]">
                            GET STARTED
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Track;
