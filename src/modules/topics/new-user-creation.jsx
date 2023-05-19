import React from "react";
import GridLayout from "../../components/layout/grid-layout";
import Accordion from "../../components/globals/accordion";
import useScrollToTop from "../../hooks/useScrollToTop";
import useDocumentTitle from "../../hooks/useDocumentTitle";

import '../../assets/styles/components/topics.scss';
import TopicLayout from "../../components/layout/topic-layout";

import Img from '../../assets/images/topics/new-user-creation.png';
import Img2 from '../../assets/images/topics/new-user-creation-2.png';
import Img3 from '../../assets/images/topics/new-user-creation-3.png';
import SideBar from "../../components/topics/side-bar";

import { getHelpfulTopics } from "../../utils";

const NewUserTopic = () => {
    useScrollToTop();
    useDocumentTitle(`${process.env.REACT_APP_PAGE_TITLE} - New User Creation`);

    const Card = () => {
        return (
            <>
                <h2 className="text-secondary">New User Creation</h2>
                <p className="margin-top-60 margin-top-mobile-30">To create a new user, follow the steps:</p>

                <div className="topics-counter-section">
                    <p>Go to the left-hand-side menu</p>
                </div>

                <div className="topics-counter-section">
                    <p>Select User, and then New User</p>
                </div>

                <div className="topics-counter-section">
                    <p>Fill in the information needed for the new user</p>
                </div>

                <div className="topics-counter-section">
                    <p>Once done, select Create User.</p>
                </div>

                <img className="topics-step-image" src={Img} alt="" />

                <Accordion tabs={[{
                    component: <><p>The All Users link will allow you to view all enrolled users. From this section, you can also create a new user by clicking the Create New User tab in the upper right corner.</p>
                        <img className="topics-step-image" src={Img2} alt="" /> 
                    </>,
                    title: "All Users",
                },
                {
                    component: <>
                        <div className="grid">
                            <p className="grid-span-6 grid-span-mobile-12">When you click the user’s name, it will direct you to a page where you can edit, delete, and change its password. This page will also allow you to generate a new QR code.</p>
                            <img className="grid-span-6 grid-span-mobile-12 margin-top-mobile-0" src={Img3} alt="" /> 
                        </div>
                    </>,
                    title: "Modify Users"
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

export default NewUserTopic;