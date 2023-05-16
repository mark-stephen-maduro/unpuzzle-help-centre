import './assets/styles/app.scss';
import 'animate.css';
import Footer from './components/footer/footer';

import Navigation from './components/navbar/navigation-bar';
import ContentPage from "./modules";

const App = () => {

  return (
    <>
      <Navigation />
      <ContentPage />
      <Footer />
    </>
  );
};

export default App;