import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import Img from '../../assets/images/topics/system-dashboard-1.png';
import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";

const AccountCreationTopic = () => {
    useScrollToTop();

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">System Dashboard</h2>
                <p className="margin-top-60 margin-top-mobile-30">The dashboard comprises three (3) sections - Emails, SMS, and Chats. You can view these sections in four (4)
                    different options. These are WTD, MTD, YTD, and Custom.</p>

                <ul style={{ paddingLeft: '75px' }}>
                    <li><p>WTD (Week-To-Date) - shows data within the week period</p></li>
                    <li><p>MTD (Month-To-Date) - shows data within the month period.</p></li>
                    <li><p>YTD (Year-To-Date) - shows data within the year period.</p></li>
                    <li><p>Custom - shows data within the customize dates.</p></li>
                </ul>

                <div className="topics-heading-bg">
                    <p><strong>Email</strong></p>
                </div>
                <p>The Emails section shows the total number of Campaigns and Connects. This section also provides numbers on
                    Bounce Rate, Unsubscribe, Hard Bounces, Soft Bounces, Reported Spam, and Survey.</p>
                <img className="topics-step-image" src={Img} alt="" />
                <p className="margin-top-25 text-orange"><strong>Campaigns and Connects</strong></p>
                <p className="margin-top-25">Campaigns and Connects Campaigns are mass emails sent to the targeted audience. Connects are emails sent to the targeted audience based on activity. For example, when a new client subscribes to a particular campaign, the client will receive a welcome email. This action will be recorded in Connects.</p>
                <p className="margin-top-25">Campaigns and Connects are measured through the numbers shown on Sent, Delivered, Opened, and Click. Moreover, the numbers shown on Sent will show in the graph in the dashboard.</p>
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