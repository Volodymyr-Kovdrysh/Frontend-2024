
import Header from "./components/Header.jsx";
import FeedBackList from "./components/FeedBackList.jsx";
import FeedbackStat from "./components/FeedbackStat.jsx";
import FeedbackForm from "./components/FeedbackForm.jsx";
import AboutIconLink from "./components/AboutIconLink.jsx";
import {FeedbackProvider} from "./context/FeedbackContext";


function App() {

    return (
    <FeedbackProvider>
        <Header />
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
