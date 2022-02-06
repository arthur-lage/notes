import React, { useState } from "react";

import {
  Container,
  Title,
  Form,
  InputField,
  Button,
  Input,
  Divisor,
  SocialLogin,
  SocialButton,
  Illustrations,
  TopLeft,
  BottomRight,
  Alternative,
  ToLogin
} from "./styles";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

import { Link } from 'react-router-dom'

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleForm = (e: any) => {
    e.preventDefault();
  };

  return (
    <Container>
      <Illustrations>
        <TopLeft>
          <CgNotes size={256} style={{ position: "absolute" }} />
        </TopLeft>
        <BottomRight>
          <CgNotes size={64} style={{ position: "absolute" }} />
        </BottomRight>
      </Illustrations>

      <Title>Register</Title>

      {/* @ts-ignore */}
      <Form onsubmit={handleForm}>
        <InputField>
          <Input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Type your name"
          />
        </InputField>
        <InputField>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
          />
        </InputField>
        <InputField className="password-field">
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
          />
        </InputField>
        <Button type="submit">Register</Button>

        <ToLogin>
          Already have an account?
          <Link to="/login">Login</Link>
        </ToLogin>

        <Divisor></Divisor>

        <Alternative>
          <span>OR</span>
          <span>Sign up using social media</span>
        </Alternative>

        <SocialLogin>
          <SocialButton type="button">
            <FaFacebookF color="#1B74E4" size={32} />
          </SocialButton>
          <SocialButton type="button">
            <FcGoogle size={32} />
          </SocialButton>
          <SocialButton type="button">
            <BsTwitter color="#00acee" size={32} />
          </SocialButton>
        </SocialLogin>
      </Form>
    </Container>
  );
}

export default Register;
