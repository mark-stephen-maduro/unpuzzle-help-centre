import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import Img from '../../assets/images/topics/profile-manage-contacts.png';
import Img2 from '../../assets/images/topics/profile-manage-contacts-2.png';
import Img3 from '../../assets/images/topics/profile-manage-contacts-3.png';
import SideBar from "../../components/topics/side-bar";
import Accordion from "../../components/globals/accordion"

import { getHelpfulTopics } from "../../utils";

const ProfileManageContact = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - Profile, Manage Contacts, Logout`);

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">Profile, Manage Contacts, Logout</h2>

                <div className="grid">
                    <p className="margin-top-60 margin-top-mobile-30 grid-span-6 grid-span-mobile-12">In the main dashboard, you can view your profile, manage your contact, and logout from the tool by clicking the Unpuzzle Connect logo.</p>

                    <img className="topics-step-image grid-span-6 grid-span-mobile-12" src={Img} alt="" />
                </div>

                <Accordion tabs={[{
                    component: <><p>The Profile allows you to manage your profile. You can edit, change your password, and generate a new QR code.</p>
                        <img className="topics-step-image" src={Img2} alt="" /> 
                    </>,
                    title: "Profile",
                },
                {
                    component: <><p>This allows you to manage your contact and view the number of subscribers and those who unsubscribe and marked the campaign as spam. This page also allows you to upload unsubscribe list.</p>
                    <img className="topics-step-image" src={Img3} alt="" /> 
                </>,
                    title: "Manage Contacts"
                },
                {
                    component: <><p>Allows you to logout from the tool.</p>
                </>,
                    title: "Logout"
                }
                ]} />
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

export default ProfileManageContact;