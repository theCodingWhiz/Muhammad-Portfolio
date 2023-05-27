import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  width: 100%;
`;

const icons = styled.div`
  display: flex;
  align-items: flex-end;
  width: 1400px;
  margin-right: 10px;
`;

const logo = styled.img``;
const List = styled.ul``;
const ListItem = styled.li``;
const Icons = styled.div``;
const Icon = styled.img``;
const Button = styled.button`
  border: 1px solid black;
  padding: 10px;
`;
const Icon2 = styled.img``;
const Button2 = styled.button`
  border: 1px solid black;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <logo src="./img/favicon.png" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About Me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <icons>
          <a href="https://github.com/theCodingWhiz" target="_blank">
            <img src="./img/github.png" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-omar-931936270"
            target="_blank"
          >
            <img src="./img/linkedin.png" />
          </a>
        </icons>
      </Container>
    </Section>
  );
};

export default Navbar;
