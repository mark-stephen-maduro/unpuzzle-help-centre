import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";

import '../../assets/styles/components/topics.scss';

const AccountCreationTopic = () => {
    useScrollToTop();

    return (
        <GridLayout gradient marginTop marginBottom>
            <div className="topics">
                <div className="topics-header-underline">
                    <h1>Unpuzzle Connect Overview</h1>
                </div>

                <p>Unpuzzle Connect is an email and SMS campaign system that assists our clients in sending marketing and transactional communications to their customers. The platform includes real-time performance monitoring, email delivery notifications, and support service to ensure our clients get the most out of their accounts. 
                <br /><br />With Unpuzzle Connect, we support our clients in better communicating with their customers and boosting consumer engagement</p>

                <GridLayout wrapper contentClass="grid-start-1 grid-end-13">
                    <div>CARD</div>
                    <div>CARD 2</div>
                </GridLayout>
            </div>
        </GridLayout>
    );
}

export default AccountCreationTopic;