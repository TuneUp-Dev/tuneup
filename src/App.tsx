import { BrowserRouter } from "react-router-dom";
import Router from "./Routes/Router";
import BirthdayCelebration from "./BirthdayCelebration";

function App() {
  return (
    <>
      <BrowserRouter>
        {/* <Router /> */}
        <BirthdayCelebration />
      </BrowserRouter>
    </>
  );
}

export default App;
