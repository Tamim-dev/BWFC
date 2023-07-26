import axios from "axios";
import React, { useEffect, useState } from "react";
import { FaAngleDown } from "react-icons/fa";
import Container from "./layout/Container";

const Navbar = () => {
    let [navberData, setNavberData] = useState({});
    let [loding, setloding] = useState(true);

    useEffect(() => {
        async function nav() {
            let navData = await axios.get("https://bwfc-api.vercel.app/navbar");
            setNavberData(navData.data);
            setloding(false);
        }
        nav();
    }, []);

    if (loding) {
        return;
    }

    return (
        <section>
            <Container>
                <div className="items-center h-14 flex">
                    <div className="w-3/12 flex">
                        <img src={navberData.logo} />
                    </div>
                    <div className="w-[41%]">
                        <ul className="flex items-center gap-20 font-manFont font-bold text-sm">
                            {navberData.navItems.map((titem) => (
                                <li
                                    key={titem.item}
                                    className="hover:text-primary transition ease-in-out delay-150 group relative cursor-pointer"
                                >
                                    {titem.item}
                                    {titem.dropDownItem && (
                                        <>
                                            <FaAngleDown className=" absolute top-1 left-16"/>

                                            <ul className=" w-32 p-5 bg-white absolute drop-shadow-md group-hover:text-black rounded-lg invisible opacity-0 group-hover:visible group-hover:opacity-100 z-10">
                                                {titem.dropDownItem.map(
                                                    (nitem) => (
                                                        <li
                                                            key={nitem.dropItem}
                                                            className="font-manFont my-1"
                                                        >
                                                            {nitem.dropItem}
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </>
                                    )}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="w-[34%] gap-2 flex justify-end">
                        {navberData.buttonOne.visibility && (
                            <a
                                href="#"
                                className="font-manFont text-sm font-semibold py-4 px-9 hover:bg-primary hover:text-white rounded-lg transition ease-in-out delay-150"
                            >
                                {navberData.buttonOne.text}
                            </a>
                        )}
                        {navberData.buttonTwo.visibility && (
                            <a
                                href="#"
                                className="bg-primary text-white font-manFont text-sm font-semibold py-4 px-9 rounded-lg border border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150"
                            >
                                {navberData.buttonTwo.text}
                            </a>
                        )}
                        {navberData.buttonThree.visibility && (
                            <a
                                href="#"
                                className="bg-primary text-white font-manFont text-sm font-semibold py-4 px-9 rounded-lg border border-primary hover:bg-transparent hover:text-primary transition ease-in-out delay-150"
                            >
                                {navberData.buttonThree.text}
                            </a>
                        )}
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Navbar;
