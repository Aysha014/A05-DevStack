import Banner from "./components/banner";
import Footer from "./components/footer";
import Navbar from "./components/nav";
import Technologies from "./components/Technologies/technologies";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <Navbar />
      <ToastContainer />

      <Banner />
      <Technologies />
      <Footer />
    </>
  );
}

export default App;