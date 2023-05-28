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
  padding: 10px 0px;
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 150px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    color: #ff0000;
  }
`;

const Icons = styled.div`
  display: flex;
  align-items: flex-end;
`;

const Icon = styled.img`
  width: 30px;
  cursor: pointer;
  gap: 20px;
  border: none;
  border-radius: 50%;
  padding: 10px;
`;

const Navbar = () => {
  return (
    <Section>
      <Container>
        <Links>
          <Logo src="./img/theCodingWhiz.gif" alt="Logo" />
          <List>
            <ListItem>Home</ListItem>
            <ListItem>About Me</ListItem>
            <ListItem>Projects</ListItem>
            <ListItem>Contact</ListItem>
          </List>
        </Links>
        <Icons>
          <a
            href="https://github.com/theCodingWhiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src="./img/github.png" alt="GitHub" />
          </a>
          <a
            href="https://www.linkedin.com/in/muhammad-omar-931936270"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon src="./img/linkedin.png" alt="LinkedIn" />
          </a>
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
