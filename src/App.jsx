
import Header from "./components/Header.jsx";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import {FeedbackProvider} from "./context/FeedbackContext";
import Spinner from "./shared/Spinner.jsx";


function App() {

    return (
    <FeedbackProvider>
        <Header />
        {/*<Spinner />*/}
        <div className="container">
            <FeedbackForm />
            <FeedbackStat />
            <FeedBackList  />

            <AboutIconLink />
        </div>

    </FeedbackProvider>
  )
}

export default App
