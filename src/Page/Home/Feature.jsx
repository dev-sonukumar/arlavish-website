import React from "react";
import { Column, Heading, Row, Wraper } from "../../components/ComponentsIndex";
import {clock,experts,esayaccess} from '../../components/Img/ImportedImage'
import Img from "../../components/Img/Img";
function Feature() {
  return (
    <Row className="flex justify-center">
      <Wraper className="w-5/6 grid lg:grid-cols-3 md:grid-cols-3 grid-cols-1 gap-x-5 text-center py-10">
        <Column className="space-y-2 items-center my-3">
          <Wraper className="flex items-center justify-center">
          <Img
          src={clock}
          alt="Yoga Image 1"
          className="w-102 h-112 object-cover"
        />
          </Wraper>
          <Heading className="text-2xl font-bold">Flexible Timing</Heading>
          <p className="text-lg">
          Book classes that fit into your busy life, whether you prefer early mornings or late evenings.
          </p>
        </Column>
        <Column className="space-y-2 items-center my-3">
          <Wraper className="flex items-center justify-center">
          <Img
          src={experts}
          alt="Yoga Image 1"
          className="w-102 h-112 object-cover"
        />
          </Wraper>
          <Heading className="text-2xl font-bold">Verified Instructors</Heading>
          <p className="text-lg">
          All our yoga teachers are thoroughly vetted and certified, ensuring you receive top-notch instruction.
          </p>
        </Column>
        <Column className="space-y-2 items-center my-3">
          <Wraper className="flex items-center justify-center">
          <Img
          src={esayaccess}
          alt="Yoga Image 1"
          className="w-102 h-112 object-cover"
        />
          </Wraper>
          <Heading className="text-2xl font-bold">Seamless Integration</Heading>
          <p className="text-lg">
          Enjoy easy booking, payments, and communication through our user-friendly platform.
          </p>
        </Column>

      </Wraper>
    </Row>
  );
}

export default Feature;
