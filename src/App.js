import "./App.css";

import GlobalStyles from "./styles/global";

import Header from "./components/Header";
import Section1 from "./components/Section1";
import Section2 from "./components/Section2";
import Section3 from "./components/Section3";
import Section4 from "./components/Section4";
import Timeline from "./components/Timeline";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Timeline />
      <Footer />
    </>
  );
}

export default App;
