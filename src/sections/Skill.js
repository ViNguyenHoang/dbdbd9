import PageWrapper from "../components/PageWrapper";
import TechList from "../components/TechList";

const languages = [
    "devicon-csharp-plain",
    "devicon-javascript-plain",
    "devicon-typescript-plain",
    "devicon-css3-plain",
    "devicon-html5-plain",
];

const technologies = [
    "devicon-react-original",
    "devicon-redux-original",
    "devicon-dotnetcore-plain",
    "devicon-docker-plain",
];

const databases = [
    "devicon-mongodb-plain",
    "devicon-microsoftsqlserver-plain",
    "devicon-postgresql-plain",
    "devicon-mysql-plain",
];

const others = [
    "devicon-git-plain",
    "devicon-github-original",
    "devicon-gitlab-plain",
];

const Skill = () => {
    return (
        <PageWrapper title="Skills" className="mt-20">
            <TechList title="Language" list={languages} />

            <TechList title="Technology" list={technologies} />

            <TechList title="Database" list={databases} />

            <TechList title="Other" list={others} />
        </PageWrapper>
    );
};

export default Skill;
