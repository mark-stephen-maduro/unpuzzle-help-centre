import {
    Routes,
    Route
} from "react-router";
import { BrowserRouter as Router } from "react-router-dom/dist";

import Home from './home';
import NotFound from './404';

const ContentPage = () => {
    return (
        <main className="App">
            <Router>
                <Routes>
                    <Route path="/unpuzzle-help-centre" element={<Home />} />
                    <Route path='*' element={<NotFound />}/>
                </Routes>
            </Router>
        </main>
    );
}

export default ContentPage;