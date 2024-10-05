import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../ReduxToolkit/Slice/LoginSlice";
import { useDispatch, useSelector } from "react-redux";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";
import { Column, Container, Heading, Row, Span } from "../../components/ComponentsIndex";
import { toast } from "react-toastify";
import { ClipLoader } from "react-spinners";

function Login() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { status, error } = useSelector((state) => state.auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(login({ email, password }));
  };

  const handleCheckboxChange = (event) => {
    setShowPassword(event.target.checked);
  };

  useEffect(() => {
    if (status === "failed") {
      toast.error(error);
    }
    if (status === "succeeded") {
      navigate("/");
    }
  }, [status]);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-r from-orange-500 to-yellow-500">
      <Container className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md mx-3">
        <Row className="justify-center">
          <Column>
            <main className="form-signin">
              <form onSubmit={handleSubmit}>
                <Heading
                  children={"YogaNests"}
                  className={"text-2xl font-bold text-center"}
                />
                <Heading
                  children={"Login"}
                  className={"text-xl py-2 font-bold text-center text-orange-300"}
                />
                <Input
                  placeholder="Enter Your Email"
                  required
                  label="Email"
                  type="email"
                  value={email}
                  onChange={handleEmailChange}
                />
                <div className="relative">
                  <Input
                    required
                    placeholder="Enter Your Password"
                    label="Password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={handlePasswordChange}
                  />
                  <Span className="flex text-gray-600">
                    <input
                      type="checkbox"
                      className="mx-1"
                      checked={showPassword}
                      onChange={handleCheckboxChange}
                    />{" "}
                    Check Password
                  </Span>
                </div>
                <Column className="grid mt-4">
                  <Button children="Login" type="submit">
                    {status === "loading" ? (
                      <div className="flex justify-center items-center">
                        <ClipLoader color="white" size={25} />
                      </div>
                    ) : (
                      "Login"
                    )}
                  </Button>
                </Column>
              </form>
            </main>
          </Column>
        </Row>
      </Container>
    </div>
  );
}

export default Login;
