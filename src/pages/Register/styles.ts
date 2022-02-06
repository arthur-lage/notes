import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  overflow-x: hidden;

  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 5rem;
  text-transform: uppercase;
  margin-bottom: 2rem;
  color: #333;
`;

export const Form = styled.form`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  width: 40vw;
`;

export const InputField = styled.div`
  width: 100%;
  position: relative;
  margin-bottom: 3rem;

  &.password-field {
    margin: 0;
  }
`;

export const Input = styled.input`
  width: 100%;
  border: 0;
  padding: 1rem;
  transition: 0.15s ease;
  outline: none;
  border-bottom: 2px solid #2c17d6;
  font-size: 1.6rem;

  &:focus {
    border-bottom: 2px solid #650eed;
  }
`;

export const Button = styled.button`
  margin-top: 2.5rem;
  padding: 1rem;
  width: 50%;
  border: 0;
  color: #fff;
  background: #efaa2e;
  font-size: 1.6rem;
  cursor: pointer;
  transition: 0.15s ease;
  border-radius: 50rem;
  margin-bottom: 2rem;

  &:hover {
    background: #e6894e;
  }
`;

export const Divisor = styled.div`
  height: 1px;
  width: 100%;
  margin: 2rem 0 2.5rem 0;
  background: #888;
`;

export const SocialLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 1.5rem;
`;

export const SocialButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  padding: 1rem;
  cursor: pointer;
  border: 0;
  transition: 0.15s ease;
  background: #fff;

  &:hover {
    background: #e1e1e1;
  }
`;

export const Illustrations = styled.div``;

export const TopLeft = styled.div`
  position: absolute;
  top: 90px;
  color: #efaa2e;
  opacity: 0.3;
  left: 5px;
  transform: rotate(-50deg);
`;

export const BottomRight = styled.div`
  position: absolute;
  bottom: 90px;
  color: #efaa2e;
  opacity: 0.3;
  right: 55px;
  transform: rotate(50deg);
`;

export const Alternative = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  font-size: 1.6rem;
  margin-bottom: 1.5rem;
`;

export const ToLogin = styled.div`
  font-size: 1.5rem;

  a {
    margin-left: 1rem;
  }
`;
