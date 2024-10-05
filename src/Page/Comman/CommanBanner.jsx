import React from "react";
import {
  Column,
  Heading,
  Navbar,
  Row,
  Wraper,
} from "../../components/ComponentsIndex";
import { commanbanner } from "../../components/Img/ImportedImage";
import { Container } from "postcss";
function CommanBanner({ title }) {
  return (
    <Row>
      <container>
        <Column
          className="w-full bg-cover bg-center h-52 flex items-center justify-center"
          style={{ backgroundImage: `url(${commanbanner})` }}
        >
          <Column className="w-full gap-10">
            <Wraper className="text-white">
              <Navbar />
            </Wraper>
            <div className="text-center flex flex-col items-center">
              <Heading className={"text-3xl font-bold text-white"}>
                {title}
              </Heading>
            </div>
          </Column>
        </Column>
      </container>
    </Row>
  );
}

export default CommanBanner;
