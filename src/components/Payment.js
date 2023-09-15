import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";
import Title from "./layout/Title";
import Heading from "./layout/Heading";
import Paragraph from "./layout/Paragraph";

const Payment = () => {
    let [paymentData, setpaymentData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function pay() {
            let payData = await axios.get(
                "https://bwfc-api.vercel.app/payment"
            );
            setpaymentData(payData.data);
            setloding(false);
        }
        pay();
    }, []);

    if (loding) {
        return;
    }

    return (
        <section>
            <Container>
                <div className=" bg-third rounded-3xl px-16 py-[75px] flex">
                    <div className="w-6/12">
                        <Title text={paymentData.subTitle} />
                        <Heading text={paymentData.title} />
                        <Paragraph className={"w-[512px]"} text={paymentData.paragraph} />
                    </div>
                    <div className="w-6/12 pl-16">
                        <img
                            className=" relative bottom-24 left-[38rem]"
                            src={paymentData.paymentShape}
                        />
                        <h4 className="text-primary text-lg font-manFont font-extrabold">
                            Get Started for Free
                        </h4>
                        <input
                            placeholder="Email Address"
                            className="font-manFont block w-96 h-16 pl-5 rounded-md my-6"
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            className="font-manFont block w-96 h-16 pl-5 rounded-md my-6"
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

export default Payment;
