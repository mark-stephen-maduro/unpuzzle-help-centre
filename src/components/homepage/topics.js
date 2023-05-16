import GridLayout from '../layout/grid-layout';
import Cards from './cards'
import '../../assets/styles/components/topics.scss';

const Topics = () => {
    return (
        <GridLayout>
            <h3 className="topics-heading">Common Help Topics</h3>
            <div className="topics-card-container">
                <Cards />
            </div>
        </GridLayout>
    );
}

export default Topics;