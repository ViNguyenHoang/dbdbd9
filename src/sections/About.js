import Icon from "../components/Icon";
import PageWrapper from "../components/PageWrapper";

const About = () => {
    return (
        <PageWrapper title="About" className="mt-32">
            <div className="max-w-[60rem] inline-block text-2xl">
                I’m a
                <div className="font-semibold inline-block">
                    &nbsp;FPT Can Tho University student
                </div>
                , major is
                <div className="font-semibold inline-block">
                    &nbsp;Software Engineering
                </div>
                . I have almost 2 years of developing
                <div className="font-semibold inline-block">
                    &nbsp;Front-End&nbsp;
                </div>
                Web with
                <div className="font-semibold inline-block">
                    &nbsp;React&nbsp;
                </div>
                framework and
                <div className="font-semibold inline-block">
                    &nbsp;Net-related&nbsp;
                </div>
                technologies at school.
            </div>

            <div className="max-w-[60rem] text-2xl mt-4">
                I have good
                <div className="font-semibold inline-block">
                    &nbsp;English&nbsp;
                </div>
                to communicate, study and work. Besides that I also have basic
                knowledge of
                <div className="font-semibold inline-block">&nbsp;Japanese</div>
                . I love learning new technologies and always try my best to
                become a better engineer.
            </div>

            <div className="max-w-[60rem] inline-block text-2xl mt-4">
                Here is my
                <div className="font-semibold inline-block">&nbsp;CV&nbsp;</div>
                if you are interested: &nbsp;
                <a
                    href="https://drive.google.com/file/d/1O_0M6YQmvFy1xo3UcgXqF4ErzFLyqop2/view?usp=sharing"
                    className="text-[#EB3C50]"
                >
                    Hoang Vi CV
                </a>
            </div>

            <div className="flex justify-start mt-20">
                <button className="justify-end rounded-full border-2 border-black bg-[#EB3C50] text-white text-2xl px-4 p-2">
                    Contact with me <Icon icon="phone" />
                </button>
            </div>
        </PageWrapper>
    );
};

export default About;
