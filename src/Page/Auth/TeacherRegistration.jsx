import React, { useState, useEffect } from "react";
import {
  Button,
  Column,
  Heading,
  Input,
  Row,
  Span,
  Wraper,
} from "../../components/ComponentsIndex";
import { sinupimage, logo } from "../../components/Img/ImportedImage";
import Img from "../../components/Img/Img";
import { createteacher } from "../../ReduxToolkit/Slice/Teacher";
import { useSelector, useDispatch } from "react-redux";
import { getallservice } from "../../ReduxToolkit/Slice/Service";
import ClipLoader from "react-spinners/ClipLoader";
import Select from "react-select";
import "./Auth.css";
// amit
function TeacherRegistration() {
  const dispatch = useDispatch();
  const { status } = useSelector((state) => state.teacher);
  const { services, status: serviceStatus } = useSelector(
    (state) => state.service
  );

  // Local state for form fields
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [specialization, setSpecialization] = useState(null); // Updated to single value
  const [age, setAge] = useState("");
  const [experience, setExperience] = useState("");
  const [address, setAddress] = useState("");
  const [aadharImg, setAadharImg] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Load services from API on component mount
  useEffect(() => {
    dispatch(getallservice());
  }, [dispatch]);

  // Form submission handler
  const registerhandle = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("name", name);
    formData.append("phone", phone);
    formData.append("specialization", specialization?.value); // Updated to send single value
    formData.append("age", age);
    formData.append("experience", experience);
    formData.append("address", address);
    formData.append("aadharImg", aadharImg);
    formData.append("email", email);
    formData.append("password", password);

    dispatch(createteacher(formData)).then(() => {
      // Reset form fields after successful submission
      setName("");
      setPhone("");
      setSpecialization(null);
      setAge("");
      setExperience("");
      setAddress("");
      setAadharImg(null);
      setEmail("");
      setPassword("");
    });
  };

  // Map services to options for the Select component
  const specializationOptions = services.map((service) => ({
    value: service._id,
    label: service.name,
  }));

  return (
    <Row className="bg-custom-peach flex flex-col md:flex-row justify-end">
      <Column className="md:w-3/6 w-full lg:w-3/6 flex items-center justify-center min-h-screen p-4">
        <Wraper className="shadow-md bg-white rounded-md p-4 w-full md:w-5/6">
          <Heading
            children={"Sign Up"}
            className={"text-3xl md:text-4xl font-bold text-center text-orange-400 my-2"}
          />
          <form onSubmit={registerhandle} encType="multipart/form-data">
            <Wraper className="grid grid-cols-1 md:grid-cols-2 gap-x-5">
              <Input
                type="text"
                required
                placeholder={"Full Name"}
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <Input
                type="tel"
                required
                placeholder={"Mobile"}
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
             
              <Input
                type="number"
                required
                placeholder={"Age"}
                value={age}
                onChange={(e) => setAge(e.target.value)}
              />
              <Input
                type="text"
                required
                placeholder={"Experience"}
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
              />
             
              <Input
                type="email"
                required
                placeholder={"Email"}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Input
                type="password"
                required
                placeholder={"Password"}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Wraper>
            <Select
                styles={{
                  control: (baseStyles) => ({
                    ...baseStyles,
                    borderColor: "orange",
                    "&:hover": { borderColor: "orange" },
                  }),
                }}
                required
                placeholder="Select Specialization"
                options={specializationOptions}
                value={specialization}
                onChange={(selectedOption) => setSpecialization(selectedOption)} // Updated to handle a single value
              />
            <Input
              type="text"
              required
              placeholder={"Location"}
              value={address}
              className="mt-4"
              onChange={(e) => setAddress(e.target.value)}
            />
             <Input
              label="upload adharCard"
                type="file"
                required
                onChange={(e) => setAadharImg(e.target.files[0])}
              />
            <Wraper className="grid mt-4">
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
          </form>
        </Wraper>
      </Column>

      <Column
        className="w-full md:w-3/6 lg:w-3/6 bg-cover bg-center h-64 md:h-screen items-center justify-center p-4 hidden lg:flex"
        style={{ backgroundImage: `url(${sinupimage})` }}
      >
        <div className="text-center flex flex-col items-center">
          <Img src={logo} alt="Logo" className="lg:w-40 lg:h-40 w-20 h-20" />
          <Heading className={"text-4xl md:text-6xl font-bold"}>
            Your <Span className={"text-orange-400"}>Yoga</Span> Your
            <Span className={"text-orange-400"}> Way</Span>
          </Heading>
        </div>
      </Column>
    </Row>
  );
}

export default TeacherRegistration;
