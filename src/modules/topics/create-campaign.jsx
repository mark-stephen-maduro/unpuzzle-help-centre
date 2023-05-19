import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import Img from '../../assets/images/topics/create-campaign.png';
import Img2 from '../../assets/images/topics/create-campaign-2.png';
import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";
import CreateCampaign2 from "./create-campaign/create-campaign-2";

const CreateCampaign = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - Create Campaign`);

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">Create Campaign</h2>

                <p className="margin-top-60 margin-top-mobile-30">As discussed earlier, you can either create an email or SMS campaign. To create a campaign, follow these steps:</p>

                <div className="topics-counter-section">
                    <p>Go to Create Campaign.</p>
                </div>

                <div className="topics-counter-section">
                    <p>Select Email or SMS. The Create New Email Campaign page will appear.</p>
                </div>

                <img className="topics-step-image" src={Img} alt="" />

                <div className="topics-counter-section">
                    <p>Enter your Campaign Name.</p>
                </div>

                <div className="topics-counter-section">
                    <p>Select a Campaign Type.</p>
                </div>

                <ul className="margin-left-50 margin-left-mobile-25">
                    <li>
                        <p>Marketing – Emails that are generally sent to groups of contacts that are prospects or customers.</p>
                    </li>
                    <li>
                        <p>Transactional – One-to-one emails that contain information that completes a transaction or process the recipient has started with you.</p>
                    </li>
                </ul>

                <div className="topics-counter-section">
                    <p>Select an added service, if applicable.</p>
                </div>

                <ul className="margin-left-50 margin-left-mobile-25">
                    <li>
                        <p>SMS – this option will allow your target to receive the campaign via SMS.</p>
                    </li>
                    <li>
                        <p>Landing Page – this option will allow your target to receive a link of your landing page.</p>
                    </li>
                </ul>

                <div className="topics-counter-section">
                    <p>Select additional options, if applicable.</p>
                </div>

                <ul className="margin-left-50 margin-left-mobile-25">
                    <li>
                        <p>Duplicate Check – this option will allow your target not to receive duplicate emails.</p>
                    </li>
                    <li>
                        <p>Connect – a connect email?</p>
                    </li>
                    <li>
                        <p>Compliance – emails that demonstrate compliance with specific regulations and government requirements.</p>
                    </li>
                </ul>

                <div className="topics-counter-section">
                    <p>Then, click Select Campaign</p>
                </div>

                <p className="margin-top-30">The Campaign page allows you to customize and view your Email Broadcast, Targets, Reports, and Settings.</p>

                <img className="topics-step-image" src={Img2} alt="" />

                <CreateCampaign2 />
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

export default CreateCampaign;