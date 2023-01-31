const PageWrapper = ({ title, children, className }) => {
    return (
        <div id={title} className="h-screen pt-20">
            <div className="text-6xl font-semibold text-center">{title}</div>

            <div className="flex items-center justify-center">
                <div className={className}>{children}</div>
            </div>
        </div>
    );
};

export default PageWrapper;
