import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import Globalstyle from "./globalstyles";

function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Navbar />
    </BrowserRouter>
  );
}

export default App;
//<Route path="/" element={<HomePage />} />
//       <Route path="/signin" element={<SigninPage />} />
