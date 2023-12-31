import Head from "next/head";
import React, { useState } from "react";
import { RiCheckboxCircleFill } from "react-icons/ri";
import styled from "styled-components";

export default function Home() {
  // State to manage form submission
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = () => {
    setIsSubmitted(true);
  };

  const NavigationBar = styled.nav`
    width: 100%;
    padding-top: 32px;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1000;

    h1 {
      margin: 0;
      font-size: 32px;
      letter-spacing: -1.5px;
      text-align: center;
      font-weight: 800;
      font-family: "Nunito", sans-serif;
    }

    @media (max-width: 768px) {
      padding-top: 16px;
      h1 {
        font-size: 24px;
      }
    }
  `;

  const ListImage = styled.div`
    width: 112px;
    height: 112px;
    background-image: url("https://source.unsplash.com/random/112x112");
    background-size: cover;
    background-position: center;
    border-radius: 46px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    margin-bottom: 24px;
    position: relative;

    @media (max-width: 768px) {
      width: 80px;
      height: 80px;
    }
  `;

  const CreatorPicture = styled.div`
    width: 56px;
    height: 56px;
    border: 3px solid white;
    border-radius: 24px;
    background-image: url("https://source.unsplash.com/random/56x56?portrait&man&smile");
    background-size: cover;
    background-position: center;
    position: absolute;
    right: -12px; // Offset on the right
    bottom: -12px; // Offset on the bottom

    @media (max-width: 768px) {
      width: 40px;
      height: 40px;
      right: -8px;
      bottom: -8px;
    }
  `;

  const PageWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    padding: 20px;
    box-sizing: border-box;
    background-color: #f7f7f9;
  `;

  const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    max-width: 480px;
    margin: auto;
    padding: 40px;
    background-color: white;
    border-radius: 16px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    width: 100%;
    box-sizing: border-box;

    @media (max-width: 768px) {
      padding: 20px;
      max-width: 100%;
    }
  `;

  // Styled title component
  const Title = styled.h1`
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.5px;
    color: var(--color-primary);
    margin: 0 0 12px 0;
    text-align: center;
    font-weight: 800;

    @media (max-width: 768px) {
      font-size: 20px;
      line-height: 28px;
    }
  `;

  // Styled subtitle component
  const Subtitle = styled.p`
    font-size: 16px;
    line-height: 22px;
    letter-spacing: -0.5px;
    color: #87878e;
    margin: 0 0 24px 0;
    text-align: center;
    font-weight: 600;

    @media (max-width: 768px) {
      font-size: 14px;
      line-height: 20px;
    }
  `;

  const Input = styled.input`
    width: 100%;
    height: 48px;
    background-color: #f7f7f9;
    border: none;
    font-size: 15px;
    padding: 14.5px 16px;
    margin-bottom: 16px;
    border-radius: 12px;
    box-sizing: border-box;
    font-family: "Nunito", sans-serif;

    ::placeholder {
      color: #a8a8a8;
      font-family: "Nunito", sans-serif;
      opacity: 1;
    }
  `;

  const FormInputsWrapper = styled.div`
    width: 100%;
    margin-bottom: 16px;
  `;

  const Button = styled.button`
    width: 100%;
    padding: 14.5px 20px;
    background-color: #5e5ce6;
    font-size: 15px;
    font-family: "Nunito", sans-serif;
    font-weight: 600;
    color: white;
    border: none;
    border-radius: 9999px;
    cursor: pointer;
  `;

  return (
    <>
      <Head>
        <title>Next with Styled Components Template</title>
        <meta name="HandheldFriendly" content="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </Head>

      <NavigationBar>
        <h1>voicepal</h1>
      </NavigationBar>

      <PageWrapper>
        <ContentContainer>
          {isSubmitted ? (
            <div style={{ textAlign: "center" }}>
              <RiCheckboxCircleFill
                style={{ fontSize: "48px", color: "#5e5ce6" }}
              />
              <p>
                Thank you, we've received your request and will get back to you
                shortly!
              </p>
            </div>
          ) : (
            <>
              <ListImage>
                <CreatorPicture />
              </ListImage>
              <Title>accept ali abdaal’s invite</Title>
              <Subtitle>
                please provide us with your info and we’ll send you a link to
                download voicepal and get access to ali’s list.
              </Subtitle>

              <FormInputsWrapper>
                <Input type="text" placeholder="full name" />
                <Input type="email" placeholder="email address" />
              </FormInputsWrapper>

              <Button type="button" onClick={handleSubmit}>
                submit
              </Button>
            </>
          )}
        </ContentContainer>
      </PageWrapper>
    </>
  );
}
