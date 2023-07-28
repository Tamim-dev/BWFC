import React from "react";
import Container from "./layout/Container";
import Paragraph from "./layout/Paragraph";
import List from "./layout/List";

const Footer = () => {
    return (
        <section className="bg-[#1B1C31] pt-24 pb-6">
            <Container>
                <div className="flex">
                    <div className=" w-6/12">
                        <img className=" mb-5" src="assets/BWFC.png" />
                        <Paragraph
                            className={"w-[520px]"}
                            text={
                                "Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment."
                            }
                        />
                    </div>
                    <div className=" w-6/12 text-white flex justify-between">
                        <ul>
                            <List
                                className=" font-manFont text-xl font-bold mb-9"
                                text="Company"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="About Us"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Careers"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Blog"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Pricing"
                            />
                        </ul>
                        <ul>
                            <List
                                className=" font-manFont text-xl font-bold mb-9"
                                text="Product"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Invoicing Platform"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Accounting Plateform"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Create Proposal"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Contracts"
                            />
                        </ul>
                        <ul>
                            <List
                                className=" font-manFont text-xl font-bold mb-9"
                                text="Resources"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Proposal Template"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Invoice Template"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="Tuturoial"
                            />
                            <List
                                className=" mb-5 font-manFont font-medium text-base"
                                text="How to write a contract"
                            />
                        </ul>
                    </div>
                </div>
                <div className=" border border-neutral-800 mt-32"></div>
                <div className=" flex mt-5">
                    <div className=" w-6/12">
                        <p className=" mb-5 font-manFont font-medium text-base text-white">
                            2023 Tamim-dev. All rights reserved. -- Privacy
                            Policy - Terms of Services
                        </p>
                    </div>
                    <div className=" w-6/12 flex justify-end">
                        <p className=" mb-5 font-manFont font-medium text-base text-white">
                            Supported by Microsoft Startup
                        </p>
                    </div>
                </div>
            </Container>
        </section>
    );
};

export default Footer;
