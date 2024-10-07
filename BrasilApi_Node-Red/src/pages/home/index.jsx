import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

import { Outlet } from "react-router-dom";
import { Container, MainContent } from "./styles";

function Home() {
  return (
    <div>
      <Container>
        <Navbar />
        <MainContent>
          <Outlet />
        </MainContent>
        <Footer />
      </Container>
    </div>
  );
}

export default Home;
