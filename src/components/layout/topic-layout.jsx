const TopicLayout = ({ content, sidebar, classes }) => {
    return (
        <div className={`topics-layout ${classes}`}>
            <div className="card">
                {content}
            </div>
            <div className="sidebar">
                {sidebar}
            </div>
        </div>
    )
}

export default TopicLayout;