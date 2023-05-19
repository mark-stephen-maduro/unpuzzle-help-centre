
import Accordion from "../../../components/globals/accordion";

import Img from "../../../assets/images/topics/create-campaign-email.png"
import Img2 from "../../../assets/images/topics/create-campaign-email-2.png"
import Img3 from "../../../assets/images/topics/create-campaign-email-3.png"
import Img4 from "../../../assets/images/topics/create-campaign-email-4.png"

const CreateCampaign2 = () => {
    return (
        <>
            <Accordion tabs={[{
                component: <><p>Email Broadcast is where you create and develop your email campaign. The menu comprises of three (3) functionalities such as Content, Blocks, and Body that allows you to customize the look and feel of your campaign.</p>
                    <p className="margin-top-25 text-orange"><strong>Content</strong></p>
                    <p>The Content menu has seven (7) various blocks – Columns, Button, Divider, HTML, Image, Menu, and Text. You can click and drag these blocks to the workspace to create your customize campaign. </p>
                    <img src={Img} alt="" />
                    <p>The show campaign button      provides the details of your campaign, such as the target, subject, and sender. This button also allows you to verify the email where the campaign is coming from.</p>
                    <p>When you enter the email address, the Request Verification button appears. Click on that button and go to your email to verify. Once done, the green button will show to notify that the email has been verified.</p>

                    <div className="grid">
                        <div className="grid-span-6 grid-span-mobile-12">
                            <img src={Img2} alt="" />
                        </div>
                        <div className="grid-span-6 grid-span-mobile-12">
                            <img src={Img3} alt="" />
                        </div>
                    </div>

                    <p className="margin-top-25 text-orange"><strong>Blocks</strong></p>
                    <p>The Blocks menu has various block style to choose from. You can click and drag these blocks and put it anywhere in the workspace. When you click on these blocks, you can customize their color and properties.</p>

                    <p>The features on the bottom right allow you to preview your campaign through desktop and mobile format.</p>

                    <img src={Img4} alt="" />

                </>,
                title: "Email Broadcast",
            }
            ]} />
        </>
    )
}

export default CreateCampaign2;