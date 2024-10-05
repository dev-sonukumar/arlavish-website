import React from "react";
import {
  Button,
  Column,
  Container,
  Heading,
  Navbar,
  Row,
  Wraper,
} from "../../components/ComponentsIndex";
import { ourCourse, righticon } from "../../components/Img/ImportedImage";
import { Link } from "react-router-dom";

const OurCources = () => {
  return (
    <Row className=" bg-[#2F2F2F] pb-10">
      <Container className="container">
        <Wraper className=" mb-4 pt-10">
          <Heading className="text-[17px] md:text-[38px]  text-custom-yellow  font-normal ">
            Our Courses
          </Heading>
          <Wraper className="flex w-full justify-end">
            <span className=" border-[4px] w-[80%]  border-custom-yellow "></span>
          </Wraper>
        </Wraper>

        <Column className="flex justify-center w-full ">
          <Wraper
            className="flex items-center justify-center bg-cover bg-center  object-cover w-full h-[534px]"
            style={{ backgroundImage: `url(${ourCourse})` }}
          >
            <Column className="w-full flex justify-between  items-center flex-col h-full">
              {/* -- middle text --  */}

              <Wraper className="flex flex-col justify-start items-center pt-10 pl-20 w-full">
                <Heading className="text-[17px] md:text-[38px] text-white font-normal text-left w-full">
                  Want To Become A Makeup Artist?
                </Heading>
                <Heading className="text-[17px] md:text-[28px] text-custom-yellow font-normal text-left w-full">
                  Enroll With Our Courses
                </Heading>
              </Wraper>

              {/* -- glass --  */}

              <Wraper className="flex justify-between px-5  items-center md:mt-12 pb-10 md:h-[108px] gap-10 md:gap-16  ">
                <Wraper>
                  <Button className="h-[69px] w-[209px] bg-custom-yellow text-black text-2xl">
                    Enroll Now
                  </Button>
                </Wraper>
              </Wraper>
            </Column>
          </Wraper>
        </Column>
        <Heading className="text-[18px] text-custom-yellow flex gap-2 font-normal justify-center md:text-center my-10 cursor-pointer">
          <Link to={"/home"}>View All </Link>
          <img src={righticon} />
        </Heading>
      </Container>
    </Row>
  );
};

export default OurCources;
