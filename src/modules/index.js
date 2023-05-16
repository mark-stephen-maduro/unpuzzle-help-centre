import {
    Routes,
    Route
} from "react-router";
import { BrowserRouter as Router } from "react-router-dom/dist";

import Home from './home';
import NotFound from './404';
// Topics
import AccountCreationTopic from "./topics/account-creation";

const ContentPage = () => {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                    {/* Common Help Topics */}
                    <Route path="/topic/account-creation" element={<AccountCreationTopic />} />
                    {/* 404 Page */}
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Router>
        </main>
    );
}

export default ContentPage;