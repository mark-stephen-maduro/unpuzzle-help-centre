import './assets/styles/app.scss';

import Navigation from './components/navbar/navigation-bar';
import ContentPage from "./modules";

const App = () => {

  return (
    <>
      <Navigation />
      <ContentPage />
    </>
  );
};

export default App;