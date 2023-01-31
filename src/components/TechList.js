const TechList = ({ title, list }) => {
    return (
        <div className="flex text-4xl font-semibold mt-8">
            <div className="self-center w-56">{title}</div>
            {list.map((object, index) => (
                <i key={index} className={`${object} colored text-7xl ml-8`} />
            ))}
        </div>
    );
};

export default TechList;
