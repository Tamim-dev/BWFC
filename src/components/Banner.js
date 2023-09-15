import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaPlay } from "react-icons/fa";
import Container from "./layout/Container";
import Button from "./layout/Button";

const Banner = () => {
    let [bannerData, setbannerData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function ban() {
            let baData = await axios.get("https://bwfc-api.vercel.app/banner");
            setbannerData(baData.data);
            setloding(false);
        }
        ban();
    }, []);

    if (loding) {
        return(
            <p>loding....</p>
        )
    }

    return (
        <section>
            <Container>
                <div className=" flex relative bg-no-repeat"
                style={{ backgroundImage: `url(${bannerData.bannerbgshape})` }}>
                    <div className="w-3/6 mt-24">
                        <h1 className="font-manFont leading-[80px] w-[644px] text-6xl font-extrabold tracking-tighter">
                            {bannerData.bannerheading}
                        </h1>
                        <p className="font-manFont text-[#64607D] w-[461px] text-xl my-6">
                            {bannerData.bannerparagraph}
                        </p>
                        <div className="flex">
                            <Button>{bannerData.bannerButton.text}</Button>
                            <a
                                className="flex items-center  ml-12 group"
                                href={bannerData.video.link}
                                target="_blank"
                            >
                                <span className="w-16 h-16 bg-[#22D497] flex items-center justify-center rounded-[50%] mr-2.5 group-hover:bg-emerald-500 transition ease-in-out delay-150">
                                    <FaPlay className="text-white text-2xl" />
                                </span>
                                {bannerData.video.text}
                            </a>
                        </div>
                    </div>
                    <div className="w-3/6">
                        <img className="relative top-16" src={bannerData.bannerrightimg} />
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Banner;
