import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import PasswordLinkImage from '../../assets/images/topics/account-creation-password-link.png';
import SignInImage from '../../assets/images/topics/account-creation-sign-in.png';
import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";

const AccountCreationTopic = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - Account Creation`);

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">Account Creation</h2>
                <p className="margin-top-60 margin-top-mobile-30">You will need to have a valid email to create an account. Once the Admin has created your account, you will receive an email to set up your password. You will need to go through these steps: </p>

                <div className="topics-counter-section">
                    <p>Click the Create Your Password link.</p>
                    <img className="topics-step-image" src={PasswordLinkImage} alt="" />
                </div>
                <div className="topics-counter-section">
                    <p>You will be directed to the Unpuzzle Connect sign-in page. Enter your email and create a strong password.</p>
                    <img className="topics-step-image" src={SignInImage} alt="" />
                </div>
            </>
        )
    }

    return (
        <GridLayout gradient marginTop marginBottom>
            <div className="topics">
                <div className="topics-header-underline">
                    <h1>Unpuzzle Connect Overview</h1>
                </div>

                <p>Unpuzzle Connect is an email and SMS campaign system that assists our clients in sending marketing and transactional communications to their customers. The platform includes real-time performance monitoring, email delivery notifications, and support service to ensure our clients get the most out of their accounts.
                    <br /><br />With Unpuzzle Connect, we support our clients in better communicating with their customers and boosting consumer engagement</p>

                <TopicLayout content={<Card />} sidebar={<SideBar data={getHelpfulTopics()} />} />
            </div>
        </GridLayout>
    );
}

export default AccountCreationTopic;