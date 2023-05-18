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
                    {/* 404 Page */}
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Router>
        </main>
    );
}

export default ContentPage;