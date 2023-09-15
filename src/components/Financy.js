import axios from "axios";
import React, { useState,useEffect } from "react";
import Container from "./layout/Container";

const Financy = () => {
    let [financyData, setFinancyData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function data() {
            let fiData = await axios.get(
                "https://bwfc-api.vercel.app/residence"
            );
            setFinancyData(fiData.data);
            setloding(false);
        }
        data();
    }, []);

    if (loding) {
        return;
    }

    return (
        <section className=" mt-16 drop-shadow">
            <Container>
                <div className="flex gap-24 border items-center justify-center py-9 rounded-2xl">
                    <p className="text-second text-[22px] font-manFont w-[895px]">{financyData.text} </p>
                    <button
                        className="w-[172px] py-4 px-9 bg-btncolor font-manFont font-bold text-white rounded-3xl border border-btncolor flex items-center hover:bg-transparent hover:text-btncolor transition ease-in-out delay-150"
                        href="#"
                    >
                        {financyData.button.text}
                    </button>
                </div>
            </Container>
        </section>
    );
};

export default Financy;
