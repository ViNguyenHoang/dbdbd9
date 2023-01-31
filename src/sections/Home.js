import React from "react";

// Components
import PageWrapper from "../components/PageWrapper";
import Icon from "../components/Icon";

const Home = () => {
    return (
        <PageWrapper title="Home" className="mt-40">
            <div className="font-semibold inline-block text-5xl mb-4">
                <div className="text-[#EB3C50] inline-block">
                    Kon nakiri!&nbsp;
                </div>
                I’m Nguyen Hoang Vi
            </div>
            <div className="max-w-[50rem] text-2xl">
                I’m a web developer, a gamer and a wibu. Now i’m studying and
                living at Can Tho City, Viet Nam.
            </div>

            <div className="flex justify-end">
                <a href="#About">
                    <button className="justify-end rounded-full border-2 border-black bg-[#EB3C50] text-white text-2xl mt-8 px-4 p-2">
                        More about me <Icon icon="arrow-right" />
                    </button>
                </a>
            </div>
        </PageWrapper>
    );
};

export default Home;
