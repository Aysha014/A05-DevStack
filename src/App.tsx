import Banner from "./components/banner";
import Navbar from "./components/nav";
import Technologies from "./components/Technologies/technologies";

const technologiesPromise = async () => {
  const res = await fetch("/data.json");
  const data = await res.json();

  return data;
};

function App() {
  return (
    <>
      <Navbar />
      <Banner />

      <Technologies technologiesPromise={technologiesPromise} />
    </>
  );
}

export default App;