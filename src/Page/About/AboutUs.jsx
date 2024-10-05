import React from "react";
import { Heading, Paragraph, Row, Wraper } from "../../components/ComponentsIndex";
import CommanBanner from "../Comman/CommanBanner";
import Img from "../../components/Img/Img";
import { about1, about2 } from "../../components/Img/ImportedImage";

function Aboutus() {
  return (
    <Row>
      <CommanBanner title={"About Us"} />
      <Row className="flex justify-center">
        <Wraper className="w-full md:w-3/12 m-5">
          <Img children={about1} />
        </Wraper>
        <Wraper className="w-full md:w-7/12 m-5 flex justify-center items-center">
        <Wraper>
            <Paragraph className={"mb-5"}>
            At YogaNests, we are redefining the way people connect with yoga. Whether you're a seasoned practitioner or just beginning your journey, our platform brings certified yoga teachers right to your fingertips, tailored to your unique needs and lifestyle.
            </Paragraph>
            <Heading children={"Vision"} className={"text-2xl font-bold"}/>
            <Paragraph>
            To be the premier platform revolutionizing how individuals experience yoga by offering highly personalized and accessible solutions that address every unique need and preference.
            </Paragraph>
          </Wraper>
        </Wraper>
      </Row>
      <Row className="flex justify-center">
        <Wraper className="w-full md:w-7/12 m-5 flex justify-center items-center">
          <Wraper>
           
            <Heading children={"Mission "} className={"text-2xl font-bold"}/>
            <Paragraph>
            Our mission is to seamlessly connect yoga enthusiasts with certified teachers through a userfriendly platform, providing tailored search options and specialized classes. We are dedicated to fostering wellness, building a thriving community, and empowering individuals to lead healthier lives.
            </Paragraph>
          </Wraper>
        </Wraper>
        <Wraper className="w-full md:w-3/12 m-5">
          <Img children={about2} />
        </Wraper>
      </Row>
    </Row>
  );
}

export default Aboutus;
