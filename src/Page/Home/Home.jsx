import React from "react";
import {
  Button,
  Column,
  Container,
  Heading,
  Navbar,
  Paragraph,
  Row,
  Span,
  Wraper,
} from "../../components/ComponentsIndex";
import { hero, homewelcome } from "../../components/Img/ImportedImage";

// import Feature from "./Feature";
import Img from "../../components/Img/Img";
import Services from "../OurService/Services";
import Gallery from "./Gallery";
import OurCources from "./OurCources";
// import Img from "../../components/Img/Img";

function Home() {
  return (
    <>
      <Row className=" text-center ">
        <Column className="flex justify-center w-full ">
          <Wraper
            className="flex items-center justify-center bg-cover bg-center h-screen object-cover w-full"
            style={{ backgroundImage: `url(${hero})` }}
          >
            <Column className="w-full flex justify-between  items-center flex-col h-full">
              <Wraper className="w-full py-10 text-white">
                <Navbar />
              </Wraper>

              {/* -- middle text --  */}

              <Wraper className="flex flex-col justify-start items-center">
                <Wraper className="mb-4 p-0">
                  <Heading className="md:text-[14px] font-normal text-custom-yellow text-left ml-4 md:ml-9">
                    BY Alka Makeover
                  </Heading>
                  <Heading className="text-[55px] md:text-[96px]  font-normal text-white uppercase">
                    AR laVish
                  </Heading>
                </Wraper>
                <Heading className="text-[17px] md:text-[38px] text-white font-normal">
                  Transform Your Beauty, Embrace Your Glow
                </Heading>
              </Wraper>

              {/* -- glass --  */}

              <Wraper className="flex justify-between px-5 md:px-12 items-center md:mt-12 mb-28 md:h-[108px] md:w-[864px] gap-10 md:gap-16 backdrop-blur-lg ">
                <Wraper className="">
                  <Heading className="md:text-[20px] font-normal text-custom-yellow text-left">
                    Book An Appointment
                  </Heading>
                  <Heading className="md:text-[28px] font-normal text-white">
                    Advance Order Booking
                  </Heading>
                </Wraper>
                <Wraper className="">
                  <Button>Booking Now</Button>
                </Wraper>
              </Wraper>
            </Column>
          </Wraper>
        </Column>
      </Row>

      {/* --- content about section --- */}
      <Container className="container py-12">
        <Row className="flex flex-col md:flex-row items-center justify-center md:justify-between px-5 md:p-0">
          <Wraper className="w-full md:w-[535px] md:h-[535px] mt-16">
            <Img children={homewelcome} />
          </Wraper>

          <Row className="w-full md:w-[37%] m-5 flex flex-col justify-between items-center ">
            <Wraper className="flex flex-col ">
              <Heading className="text-[17px] md:text-[38px]  text-custom-yellow  font-normal ">
                Right Place For Your hair Style and Makeup
              </Heading>
              <Paragraph className="text-[14px] md:text-[20px] text-white font-normal  mt-5">
                Our hair stylist and makeup artist are experienced and have been
                trained in various hair care and makeup techniques. They are
                committed to providing you with the best possible results.
              </Paragraph>
              <ul className="list-disc pl-5 pt-5">
                <li>Bridal & Party Makeovers </li>
                <li>Skin & Hair Treatments </li>
                <li>Personalized Beauty Consultations </li>
              </ul>
            </Wraper>
          </Row>
        </Row>
      </Container>

      {/* -- Services Components --  */}
      <Services />

      {/* -- Gallery Components --  */}
      <Wraper sm:hidden>
        <Gallery />
      </Wraper>
      {/* -- Our Cources --  */}
      <OurCources />
      {/* <Feature /> */}
    </>
  );
}

export default Home;
