import React from "react";
import { Link } from "react-router-dom/dist";
import AskQuestion from "./ask-question";

const SideBar = ({ data }) => {
    if (!data) return;

    return (
        <>
            <h2 className="text-dark">HELPFUL TOPICS</h2>
            <ul className="sidebar-content">
                {
                    !Array.isArray(data) && <>
                        {data.topics.map((topic, index) => <li key={index}>
                            <Link to={`/unpuzzle-help-centre/topic${topic.path}`}><p>{topic.label}</p></Link>
                        </li>)}
                    </>
                }
            </ul>
            <AskQuestion />
        </>
    );
}

export default SideBar;