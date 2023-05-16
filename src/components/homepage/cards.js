import topics from '../../data/common-topics.json';
import { Link } from "react-router-dom/dist";

const Cards = () => {
    return (
        <>
            {
                topics.map((card, index) =>
                    <Link className="topics-card" key={index} to={`/unpuzzle-help-centre/topic${card.path}`} role="link" aria-label={`Navigate to ${card.label} topic`}>
                        <img src={process.env.PUBLIC_URL + '/images/topics/' + card.icon} alt="" />
                        <h4>{card.label}</h4>
                    </Link>
                )
            }
        </>
    );
}

export default Cards;