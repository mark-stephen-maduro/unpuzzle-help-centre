const TopicLayout = ({ content, sidebar }) => {
    return (
        <div className="topics-layout">
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