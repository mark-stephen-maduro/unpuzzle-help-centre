import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import Accordion from "../../components/globals/accordion";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import Img from '../../assets/images/topics/system-dashboard-1.png';
import smsImg from '../../assets/images/topics/SMS-dashboard.png';
import chatImg from '../../assets/images/topics/chats-dashboard.png';
import chatImg2 from '../../assets/images/topics/chats-dashboard-2.png';
import SideBar from "../../components/topics/side-bar";
import Table from "../../components/globals/table";

import { getHelpfulTopics } from "../../utils";

const SystemDashboardTopic = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - System Dashboard`);

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

                <Accordion tabs={[{
                    component: <><p>The Emails section shows the total number of Campaigns and Connects. This section also provides numbers on
                        Bounce Rate, Unsubscribe, Hard Bounces, Soft Bounces, Reported Spam, and Survey.</p>
                        <img className="topics-step-image" src={Img} alt="" />
                        <p className="margin-top-25 text-orange"><strong>Campaigns and Connects</strong></p>
                        <p className="margin-top-25">Campaigns and Connects Campaigns are mass emails sent to the targeted audience. Connects are emails sent to the targeted audience based on activity. For example, when a new client subscribes to a particular campaign, the client will receive a welcome email. This action will be recorded in Connects.</p>
                        <p className="margin-top-25">Campaigns and Connects are measured through the numbers shown on Sent, Delivered, Opened, and Click. Moreover, the numbers shown on Sent will show in the graph in the dashboard.</p>
                        <Table rows={[
                            ['Sent', 'Determines the number of contacts from the data where the email campaign was sent to.'],
                            ['Delivered', 'Determines the success rate of email campaigns sent to the targeted audience. It shows 100% when email campaign is successfully sent to all contacts without a bounce.'],
                            ['Opened', 'Shows the percentage of email campaigns that were successfully opened by the target audience.'],
                            ['Clicked', 'Shows the number of people who click the call to action.']
                        ]} />
                        <p className="margin-top-25 text-orange"><strong>Bounces, Unsubscriptions, and Reports</strong></p>
                        <p className="margin-top-25">This section shows report on Bounce Rate, Unsubsribed, Hard and Soft Bounce, and Reported Spam.</p>
                        <Table rows={[
                            ['Bounce Rate', 'Shows the number of emails that were not delivered to an inbox.'],
                            ['Unsubscribed', 'Shows the number of subscribers that unsubscribed to the campaign.'],
                            ['Hard Bounce', 'Shows the number of emails that couldn’t be delivered for permanent reasons. For example, fake emails or unauthentic domain.'],
                            ['Soft Bounce', 'Shows the number of emails that couldn’t be delivered for temporary reasons. For example, inbox is full, or email file might too large.'],
                            ['Reported Spam', 'Shows the number of emails that were reported spam.']
                        ]} />
                        <p className="margin-top-25 text-orange"><strong>Survey</strong></p>
                        <p className="margin-top-25">Some email campaigns have surveys associated with it. The Survey section in the dashboard provides report on Page Visit, NPS, Completed and Incomplete Surveys.</p>
                        <Table rows={[
                            ['Page Visit', 'Shows the number of targeted audiences who clicks the survey'],
                            ['NPS', 'Shows the number of audience satisfaction.'],
                            ['Completed Surveys', 'Shows the number of completed surveys.'],
                            ['Incomplete Surveys', 'Shows the number of incomplete surveys.']
                        ]} />
                    </>,
                    title: "Email",
                },
                {
                    component: <>
                        <p>Like the Emails section, the SMS provides a report on SMS communication. When an SMS communication fails,
                            the Failed deck is updated. The Unsubscribed deck provides information when a subscriber unsubscribes.</p>
                        <img className="topics-step-image" src={smsImg} alt="" />
                    </>,
                    title: "SMS"
                },  
                {
                    component: <>
                        <p>The Chats section provides report on conversations made through social media platforms by a chatbot or an operator.</p>
                        <img className="topics-step-image" src={chatImg} alt="" />
                        <Table classes="margin-top-25" rows={[
                            ['Top Intents', 'shows the number of the type of inquiry via chatbot'],
                            ['Chatbot vs Operator', 'shows the number of chats responded by a chatbot or an operator.'],
                            ['Completed Surveys', 'Shows the number of completed surveys.'],
                            ['Source', 'Shows the number of completed surveys.']
                        ]} />
                        <p>The Chats section provides report on conversations made through social media platforms by a chatbot or an operator.</p>
                        <img src={chatImg2} alt="" />
                        <Table classes="margin-top-25" rows={[
                            ['Total Chatbot Conversations', 'Refers to the conversation in one session. One session can have multiple messages.'],
                            ['Average Message per Chatbot Conversation', 'Refers to the number of messages per chatbot conversation.'],
                            ['Total Operator Conversations', 'Refers to the total number of conversations transferred to an operator.'],
                            ['Average Message per Operator Conversation', 'Refers to the average number of messages per operator conversation.'],
                            ['Call Me Back Requests', 'When there is no operator online, the system will ask for the contact information for a call back.'],
                            ['Missed Conversations', 'Shows the number of missed conversations'],
                            ['Outside Business Hours','Shows the number of messages received outside business hours.'],
                            ['Offline Messages','Shows the number of messages received offline.']
                        ]} />
                    </>,
                    title: "Chats"
                }]} />
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

export default SystemDashboardTopic;