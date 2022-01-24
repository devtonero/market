import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import Globalstyle from "./globalstyles";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/homepage";

function App() {
  return (
    <BrowserRouter>
      <Globalstyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//<Route path="/" element={<HomePage />} />
//       <Route path="/signin" element={<SigninPage />} />
