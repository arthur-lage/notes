import React, { useState } from "react";

import {
  Container,
  Title,
  Paragraph,
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
  ToRegister
} from "./styles";

import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { BsTwitter } from "react-icons/bs";
import { CgNotes } from "react-icons/cg";

import { Link } from 'react-router-dom'

function Login() {
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

      <Title>Login</Title>
      <Paragraph>Log into your account in order to use the app</Paragraph>

      {/* @ts-ignore */}
      <Form onsubmit={handleForm}>
        <InputField>
          <Input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Type your email"
          />
        </InputField>
        <InputField>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Type your password"
          />
        </InputField>
        <Button type="submit">Login</Button>

        <ToRegister>
          Don't have an account?
          <Link to="/register">Register</Link>
        </ToRegister>

        <Divisor></Divisor>

        <Alternative>
          <span>OR</span>
          <span>Sign in using social media</span>
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

export default Login;
