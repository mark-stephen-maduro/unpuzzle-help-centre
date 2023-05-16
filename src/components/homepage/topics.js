import Cards from './cards'

const Topics = () => {
    return (
        <div className="container">
            <div className="content">
                <div className="wrapper">
                    <h3 className="topics-heading">Common Help Topics</h3>

                    <div className="topics-card-container">
                        <Cards />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Topics;