import React from "react";
import { Carousel } from "react-materialize";

import About from "../components/About";
import Footer from "../components/Footer";
import Container from "../components/Container";
import Fade from "react-reveal/Fade";

const Home = () => {
  return (
    <div>
      <div className="header margin-gap">
        <div className="header-container"></div>
        <Fade left>
          <h1 className="center">DwarfINC</h1>
        </Fade>
        <Fade right>
          <h5 className="center">Building a Smart Future</h5>
        </Fade>

        <div>
          <Carousel
            images={[
              "https://images.unsplash.com/photo-1494145904049-0dca59b4bbad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              "https://images.unsplash.com/photo-1534237710431-e2fc698436d0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              "https://images.unsplash.com/photo-1488750059241-ed3ad4563245?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80",
              "https://images.unsplash.com/photo-1479839672679-a46483c0e7c8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=654&q=80",
              "https://images.unsplash.com/photo-1466248597128-17a2d5f14664?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80",
              "https://images.unsplash.com/photo-1508066109736-172d0a808468?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=564&q=80"
            ]}
          />
        </div>
      </div>
      <Container />
    </div>
  );
};

export default Home;
