import styled from "styled-components";

export const ContactWrapper = styled.div`
box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  /* min-height: 100vh; */
  flex-direction: column;
  background-color: black;
  /* background-color: #f8f8f8; */
  /* background-image: url('/pattern-background.jpg'); */
  /* background-repeat: repeat; */
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50vh;
  background-image: url('/hero-background.jpg');
  background-position: center;
  background-size: cover;
  text-align: center;
  color: #fff;
`;

export const HeroTitle = styled.h1`
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1rem;
`;

export const HeroSubtitle = styled.p`
  font-size: 1.5rem;
  font-weight: 500;
  margin-bottom: 2rem;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 600px;
  padding: 2rem;
  background-color: #fff;
  border-radius: 10px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
`;

export const ContactTitle = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  color: #333;
  margin-bottom: 2rem;
  text-align: center;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;
`;

export const FormLabel = styled.label`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
`;

export const FormInput = styled.input`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f8f8f8;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const FormTextarea = styled.textarea`
  padding: 1rem;
  border: none;
  border-radius: 5px;
  background-color: #f8f8f8;
  color: #333;
  font-size: 1.2rem;
  font-weight: 500;
  resize: none;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;

export const FormButton = styled.button`
  background-color: #333;
  color: #fff;
  font-size: 1.2rem;
  font-weight: 600;
  padding: 1rem 2rem;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #444;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 0, 0, 0.3);
  }
`;
