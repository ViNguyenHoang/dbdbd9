import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Ayame from ".././static/ayame.png";
import Icon from "./Icon";

const sections = ["Home", "About", "Skills", "More"];

const LeftNav = () => {
    return (
        <div className="h-screen sticky top-0">
            <div className="flex justify-center bg-[#EB3C50] py-8">
                <div
                    className="avatar ring-2 ring-white"
                    style={{
                        backgroundImage: `url(${Ayame})`,
                    }}
                />
                <div />
            </div>

            <div className="flex justify-center my-32">
                <div>
                    {sections.map((section, index) => (
                        <div
                            key={index}
                            className="text-2xl font-semibold mt-4 hover:text-[#EB3C50]"
                        >
                            <a href={`#${section}`}>{section}</a>
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex justify-center text-xl font-semibold">
                Contact with me
            </div>

            <div className="flex justify-center mt-4">
                <div>
                    <div className="flex text-start">
                        <Icon
                            icon="envelope"
                            size="xl"
                            onClick={() => {
                                navigator.clipboard.writeText(
                                    "hoangvi0206@gmail.com"
                                );
                                toast("Copied Email to clipboard");
                            }}
                            className="cursor-pointer mr-2"
                        />

                        <div>hoangvi0206@gmail.com</div>
                    </div>

                    <div className="flex text-start mt-2">
                        <Icon
                            icon="phone"
                            size="xl"
                            onClick={() => {
                                navigator.clipboard.writeText("0948 737 517");
                                toast("Copied Phone Number to clipboard");
                            }}
                            className="cursor-pointer mr-2"
                        />

                        <div>+84 0948 737 517</div>
                    </div>
                </div>
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={3000}
                hideProgressBar={true}
            />
        </div>
    );
};

export default LeftNav;
