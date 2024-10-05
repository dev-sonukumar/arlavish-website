import React, { useState } from "react";
import {
  Button,
  Heading,
  Input,
  Row,
  Wraper,
} from "../../components/ComponentsIndex";
import CommanBanner from "../Comman/CommanBanner";
import Img from "../../components/Img/Img";
import { contact } from "../../components/Img/ImportedImage";
import { useDispatch, useSelector } from "react-redux";
import { createcontact } from "../../ReduxToolkit/Slice/Contact";
import ClipLoader from "react-spinners/ClipLoader";

function Contact() {
  const dispatch = useDispatch();

  // Local state for form fields
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const status = useSelector((state) => state.contact.status); // Fetch status from Redux

  // Form submission handler
  const registerhandle = (e) => {
    e.preventDefault();

    // Create form data based on new structure
    const formData = {
      name,
      email,
      description,
    };

    // Dispatch the create contact action
    dispatch(createcontact(formData)).then(() => {
      // Reset form fields after successful submission
      setName("");
      setEmail("");
      setDescription("");
    });
  };

  return (
    <Row>
      <CommanBanner title={"Contact Us"} />
      <Row className="flex justify-center">
        <form onSubmit={registerhandle}>

          <Row className="w-12/12 flex justify-center my-10 bg-custom-peach p-5 md:p-10 rounded-md shadow-sm">
            <Wraper className="w-full md:w-5/12 hidden lg:block">
              <Heading
                children={"Start Your Yoga Journey Now!"}
                className={"text-orange-400 text-4xl font-bold"}
              />
              <Img children={contact} />
            </Wraper>
            <Wraper className="w-full md:w-7/12">
              <Wraper>
                <Input
                  type="text"
                  required
                  placeholder={"Full Name"}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <Input
                  type="email"
                  required
                  placeholder={"Email"}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <textarea
                  className="block w-full px-3 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-300 focus:border-orange-300 sm:text-sm my-2 border border-orange-300"
                  placeholder="Message"
                  rows={10}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </Wraper>

              <Wraper className="grid">
                <Button type="submit">
                  {status === "loading" ? (
                    <div className="flex justify-center items-center">
                      <ClipLoader color="white" size={25} />
                    </div>
                  ) : (
                    "SUBMIT"
                  )}
                </Button>
              </Wraper>
            </Wraper>
          </Row>
        </form>
      </Row>
    </Row>
  );
}

export default Contact;
