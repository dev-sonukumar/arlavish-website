// ImageGrid.js
import React from "react";
import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
} from "../../components/Img/ImportedImage";
import { Container, Heading, Wraper } from "../../components/ComponentsIndex";
import { Link } from "react-router-dom";

const Gallery = () => {
  return (
    <Container className="container py-10">
      <Wraper className="flex flex-col mb-4 ">
        <Heading className="text-[17px] md:text-[38px]  text-custom-yellow  font-normal ">
          Gallery
        </Heading>
        <span className="w-[428px] border-[4px] mt-10 border-custom-yellow"></span>
      </Wraper>
      <Wraper className=" sm:p-2 md:p-0 xs:flex-col md:flex md:w-auto gap-2 sm:flex-wrap ">
        {/* Column 1 */}
        <div className="flex w-[413px] md:h-[625px] ">
          <img src={gallery1} alt="Image 1" className=" md:rounded-lg" />
        </div>

        {/* Column 2 */}
        <div className=" md:flex sm:flex-col gap-5">
          <img
            src={gallery2}
            alt="Image 2"
            className="md:h-[389px] w-full rounded-lg"
          />
          <img src={gallery3} alt="Image 3" className="h-[216px] rounded-lg " />
        </div>

        {/* Column 3 */}
        <div className="flex flex-col  w-[522px] gap-5">
          <img src={gallery4} alt="Image 4" className="w-full  rounded-lg" />
          <img src={gallery5} alt="Image 5" className="w-full  rounded-lg" />
        </div>
      </Wraper>

      <Wraper className="flex justify-end w-full pr-8">
        <span className="w-[428px] border-[4px] mt-4 border-custom-yellow "></span>
      </Wraper>
      <Heading className="text-[18px] text-custom-yellow  font-normal text-center md:text-center my-10">
        <Link>View All</Link>
      </Heading>
    </Container>
  );
};

export default Gallery;
