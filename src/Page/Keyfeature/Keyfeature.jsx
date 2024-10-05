import React from "react";
import {
  Column,
  Heading,
  Paragraph,
  Row,
  Wraper,
} from "../../components/ComponentsIndex";
import CommanBanner from "../Comman/CommanBanner";
import { teacher, qualityservice,clock, esayaccess,seach } from "../../components/Img/ImportedImage";
import Img from "../../components/Img/Img";

function Keyfeature() {
  return (
    <Row>
      <CommanBanner title={"Key Features"} />
      <Row className="flex justify-center">
        {/* Updated wrapper to center items */}
        <Wraper className="w-5/6 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-5 text-center py-10 justify-items-center">
          {/* Updated column to center items */}
          <Column className="space-y-2 items-center justify-center my-5 text-center">
            <Wraper className="flex items-center justify-center">
              <Img
                src={teacher}
                alt="Yoga Image 1"
                className="w-128 h-128 object-cover"
              />
            </Wraper>
            <Heading className="text-2xl font-bold">Verified Instructors</Heading>
            <Paragraph className="text-lg">
            All our yoga teachers are thoroughly vetted and certified, ensuring you receive top-notch instruction.
            </Paragraph>
          </Column>

          <Column className="space-y-2 items-center justify-center my-5 text-center">
            <Wraper className="flex items-center justify-center">
              <Img
                src={qualityservice}
                alt="Yoga Image 1"
                className="w-128 h-128 object-cover"
              />
            </Wraper>
            <Heading className="text-2xl font-bold">Specialized Classes</Heading>
            <Paragraph className="text-lg">
            Access yoga sessions that cater to specific health concerns, such as stress management, weight loss, or prenatal yoga.
            </Paragraph>
          </Column>

          <Column className="space-y-2 items-center justify-center my-5 text-center">
            <Wraper className="flex items-center justify-center">
              <Img
                src={clock}
                alt="Yoga Image 1"
                className="w-128 h-128 object-cover"
              />
            </Wraper>
            <Heading className="text-2xl font-bold">Flexible Scheduling</Heading>
            <Paragraph className="text-lg">
            Book classes that fit into your busy life, whether you prefer early mornings or late evenings.
            </Paragraph>
          </Column>
          <Column className="space-y-2 items-center justify-center my-5 text-center">
            <Wraper className="flex items-center justify-center">
              <Img
                src={esayaccess}
                alt="Yoga Image 1"
                className="w-128 h-128 object-cover"
              />
            </Wraper>
            <Heading className="text-2xl font-bold">Seamless Integration</Heading>
            <Paragraph className="text-lg">
            Enjoy easy booking, payments, and communication through our user-friendly platform.
            </Paragraph>
          </Column>
          <Column className="space-y-2 items-center justify-center my-5 text-center">
            <Wraper className="flex items-center justify-center">
              <Img
                src={seach}
                alt="Yoga Image 1"
                className="w-128 h-128 object-cover"
              />
            </Wraper>
            <Heading className="text-2xl font-bold">Tailored Search</Heading>
            <Paragraph className="text-lg">
            Filter yoga teachers based on location, style, experience, and specializations to find the perfect match for you.
            </Paragraph>
          </Column>
        </Wraper>
      </Row>
    </Row>
  );
}

export default Keyfeature;
