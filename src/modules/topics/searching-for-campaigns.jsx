import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import Img from '../../assets/images/topics/search-campaign.png';
import Img2 from '../../assets/images/topics/search-campaign-2.png';
import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";

const SearcCampaign = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - Searching for Campaigns`);

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">Searching for Campaigns</h2>
                <p className="margin-top-60 margin-top-mobile-30">The search engine allows you to search for specific campaigns by entering an Email or Client ID. The page will direct you to the Manage Contacts where you view the number of emails that subscribed, unsubscribed, and marked the campaign as spam. This page also allows you to upload unsubscribe list.</p>

                <img className="topics-step-image" src={Img} alt="" />

                <p className="margin-top-60 margin-top-mobile-30">When you click on an email, the page will direct you to a specific campaign associated with that email. The features in this page will be discussed further in Create Campaign section.</p>

                <img className="topics-step-image" src={Img2} alt="" />
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

export default SearcCampaign;