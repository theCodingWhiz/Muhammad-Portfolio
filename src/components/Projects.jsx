import React from "react";
import styled from "styled-components";
import keyframes from "styled-components";

const data = [
  {
    title: "Project 1",
    image: "./img/landingpage.jpg",
    link: "project-link-1",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "./img/1687.jpg",
    link: "project-link-2",
    description: "Description of Project 2",
  },
  {
    title: "Project 3",
    image: "./img/3339.jpg",
    link: "project-link-3",
    description: "Description of Project 3",
  },
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const GridContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 20px;
  width: 100%;
  max-width: 1400px; /* Adjust the value as needed */
  margin: 0 auto;
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
  max-width: 300px; /* Adjust the value as needed */
  padding: 20px;
  background-color: #6e5e8e;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const rotateAnimation = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #c0caff;
  margin-bottom: 10px;
  animation: ${rotateAnimation} 2s linear infinite; // Apply the animation to the Title component
`;
const Screenshot = styled.img`
  width: 100%;
  max-width: 200px;
  height: auto;
  object-fit: cover;
  margin-bottom: 10px;
`;

const Description = styled.p`
  font-size: 16px;
  color: #000000;
`;

const Projects = () => {
  const handleProjectClick = (link) => {
    window.open(link, "_blank");
  };

  return (
    <Section>
      <GridContainer>
        {data.map((item) => (
          <GridItem
            key={item.title}
            onClick={() => handleProjectClick(item.link)}
          >
            <Title>{item.title}</Title>
            <Screenshot src={item.image} alt={item.title} />
            <Description>{item.description}</Description>
          </GridItem>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
