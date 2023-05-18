import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import ImagePath from '../../assets/images/topics/auth-setup.png';
import GoogleAuthImage from '../../assets/images/topics/google-authenticator.png';

import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";

const TwoFactorAuth = () => {
    useScrollToTop();

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">Two-Factor Authentication Set-Up</h2>
                <p className="margin-top-60 margin-top-mobile-30">After you have created your password, you will receive another email with instructions on how to set up your Two-Factor Authentication, which will be required before you log in for the first time.</p>
                <img className="topics-step-image" src={ImagePath} alt="" />
                <div className="topics-counter-section hidden"></div>
                <div className="topics-counter-section hidden"></div>
                <div className="topics-counter-section">
                    <p>Click the Create Your Password link.</p>
                    <img className="topics-step-image" src={GoogleAuthImage} alt="" style={{ width: '145px' }} />
                </div>
                <div className="topics-counter-section">
                    <p>Using the Google Authenticator, scan the QR code attached to your email.</p>
                </div>
                <div className="topics-counter-section">
                    <p>The Google Authenticator App will provide a 6-digit code which you will use as a one-time password.</p>
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

export default TwoFactorAuth;