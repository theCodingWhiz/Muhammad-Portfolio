import React from "react";
import styled from "styled-components";

const data = ["Project 1", "Project 2", "Project 3"];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Right = styled.div`
  flex: 1;
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.div`
  font-size: 100px;
  font-weight: bold;
  cursor: pointer;
  color: #d3af37;
  -webkit-text-stroke: 1px #cc0000;

  &:hover {
    color: white;
  }

  &:active {
    color: white;
  }

  &:focus {
    color: white;
  }

  &:visited {
    color: white;
  }

  &:link {
    color: white;
  }

  &:after {
    content: "";
    display: block;
    width: 0;
    height: 3px;
    background: white;
    transition: width 0.3s;
  }
`;

const Projects = () => {
  return (
    <Section>
      <Container>
        <Left>
          <List>
            {data.map((item) => (
              <ListItem key={item}>{item}</ListItem>
            ))}
          </List>
        </Left>
        <Right>
          <img
            src="https://images.unsplash.com/photo-1622837137196-4b7b2b0b5b0a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcHV0ZXJ8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
            alt=""
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Projects;
