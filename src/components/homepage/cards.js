import topics from '../../data/common-topics.json'

const Cards = () => {
    return (
        <>
            {
                topics.map((card, index) =>
                    <div className="topics-card" key={index}>
                        <img src={process.env.PUBLIC_URL + '/images/' + card.icon} alt="" />
                        <h4>{card.label}</h4>
                    </div>
                )
            }
        </>
    );
}

export default Cards;