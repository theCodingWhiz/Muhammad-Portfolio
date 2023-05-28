import React from "react";
import styled from "styled-components";

const data = [
  {
    title: "Project 1",
    image: "image-url-1",
    link: "project-link-1",
    description: "Description of Project 1",
  },
  {
    title: "Project 2",
    image: "image-url-2",
    link: "project-link-2",
    description: "Description of Project 2",
  },
  {
    title: "Project 3",
    image: "image-url-3",
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
`;

const GridItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  max-width: 300px;
  width: 100%;
  padding: 20px;
  background-color: #d3af37;
  border-radius: 10px;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.05);
  }
`;

const Title = styled.h1`
  font-size: 24px;
  color: #cc0000;
  margin-bottom: 10px;
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
