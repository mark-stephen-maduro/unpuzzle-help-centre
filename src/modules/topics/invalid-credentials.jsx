import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import InvalidCredentialsImg from '../../assets/images/topics/invalid-credentials.png';
import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";

const AccountCreationTopic = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - Invalid Credentials Error`);

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">Invalid Credentials Error</h2>
                <p className="margin-top-60 margin-top-mobile-30">Whenever you get an Invalid Credentials error, you will need to go through the following steps:</p>

                <div className="topics-counter-section">
                    <p>Open your Google Authenticator App.</p>
                </div>
                <div className="topics-counter-section">
                    <p>In the top right corner, tap the <strong>3 dots.</strong></p>
                </div>
                <div className="topics-counter-section">
                    <p>Select <strong>Settings</strong>.</p>
                </div>
                <div className="topics-counter-section">
                    <p>Select <strong>Time correction for codes</strong>.</p>
                </div>
                <div className="topics-counter-section">
                    <p>Select <strong>Syn now</strong>.</p>
                </div>
                <div className="topics-counter-section hidden margin-top-50"></div>
                <img className="topics-step-image" src={InvalidCredentialsImg} alt="" />

                <div className="info">
                    <div className="ribbon">remember</div>
                    After you successfully have set up your account, you will need to use the Google Authenticator App every time you log into the system.
                </div>
            </>
        )
    }

    return (
        <GridLayout gradient marginTop marginBottom>
            <div className="topics">
                <TopicLayout classes="margin-top-0" content={<Card />} sidebar={<SideBar data={getHelpfulTopics()} />} />
            </div>
        </GridLayout>
    );
}

export default AccountCreationTopic;