import React from "react";
import styled, { css } from "styled-components";
import { rgba } from "polished";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonNext,
  ButtonBack,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const PageContainer = styled.div`
width: 100%
margin-top: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Image = styled.div`
  width: 100%;
  height: 100%;
  background: url(${(p) => p.image});
  background-position: center;
  background-size: 100%;
  background-repeat: no-repeat;
`;

const slides = [
  "/images/pythonML.jpg",
  "/images/computerscience.jpg",
  "/images/digitalmarketing.jpg",
];

const Nav = styled.nav`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  width: 100%;
  display: flex;
  justify-content: space-between;
`;

const sharedStyles = css`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${rgba("#1a132b", 0.5)};
  color: white;
  border: 0;
  font-size: 40px;
  outline: none;
  transition: opacity 0.35s;
  &:disabled {
    opacity: 0;
  }
`;
const NextButton = styled(ButtonNext)`
  ${sharedStyles};
`;
const BackButton = styled(ButtonBack)`
  ${sharedStyles};
`;

const SliderWrapper = styled.div`
  overflow: hidden;
  position: relative;
  width: 100%;
  height: 100%;
  background: white;
  background-color: #fff;
`;
const Carousel2 = () => {
  return (
    <PageContainer>
      <SliderWrapper>
        <CarouselProvider
          naturalSlideWidth={1000}
          naturalSlideHeight={500}
          totalSlides={slides.length}
          visibleSlides={1}
        >
          <Slider>
            {slides.map((slide, index) => (
              <Slide index={index}>
                <Image image={slide} />
              </Slide>
            ))}
          </Slider>
          <Nav>
            <BackButton>{`<`}</BackButton>
            <NextButton>{`>`}</NextButton>
          </Nav>
        </CarouselProvider>
      </SliderWrapper>
    </PageContainer>
  );
};

export default Carousel2;
