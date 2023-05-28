import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/futuristic.jpg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  return (
    <Container>
      <Hero />
      <AboutMe />
      <Projects />
      <Contact />
    </Container>
  );
}

export default App;
