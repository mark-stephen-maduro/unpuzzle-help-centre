import {
    Routes,
    Route
} from "react-router";
import { BrowserRouter as Router } from "react-router-dom/dist";

import Home from './home';
import NotFound from './404';
// Topics
import AccountCreationTopic from "./topics/account-creation";
import TwoFactorAuthTopic from "./topics/two-factor-auth";
import InvalidCredentialsTopic from "./topics/invalid-credentials";
import SystemDashboardTopic from "./topics/system-dashboard";
import NewUserTopic from "./topics/new-user-creation";
import SearcCampaign from "./topics/searching-for-campaigns";
import ProfileManageContact from "./topics/profile-manage-contacts";
import Billing from "./topics/billing";
import CreateCampaign from "./topics/create-campaign";

const ContentPage = () => {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/unpuzzle-help-centre" element={<Home />} />
                    {/* Common Help Topics */}
                    <Route path="/unpuzzle-help-centre/topic/account-creation" element={<AccountCreationTopic />} />
                    <Route path="/unpuzzle-help-centre/topic/two-factor-auth" element={<TwoFactorAuthTopic />} />
                    <Route path="/unpuzzle-help-centre/topic/invalid-credentials" element={<InvalidCredentialsTopic />} />
                    <Route path="/unpuzzle-help-centre/topic/system-dashboard" element={<SystemDashboardTopic />} />
                    <Route path="/unpuzzle-help-centre/topic/new-user" element={<NewUserTopic />} />
                    <Route path="/unpuzzle-help-centre/topic/search-for-campaign" element={<SearcCampaign />} />
                    <Route path="/unpuzzle-help-centre/topic/profile-manage-contact-logout" element={<ProfileManageContact />} />
                    <Route path="/unpuzzle-help-centre/topic/billing" element={<Billing />} />
                    <Route path="/unpuzzle-help-centre/topic/create-campaign" element={<CreateCampaign />} />
                    {/* 404 Page */}
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Router>
        </main>
    );
}

export default ContentPage;