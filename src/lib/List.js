import React from "react";
import styled from "styled-components/macro";

// array 
const turtles = [
  {
    name: "Lars",
    profession: "Ninja turtle",
  },
  {
    name: "Elaine",
    profession: "Ninja turtle",
  },
  {
    name: "Malin",
    profession: "Ninja turtle",
  },
  {
    name: "Caroline",
    profession: "Ninja turtle",
  },
  {
    name: "Sofia",
    profession: "Ninja turtle",
  },
  {
    name: "Anna",
    profession: "Ninja turtle",
  },
  {
    name: "Felicia",
    profession: "Ninja turtle",
  },
];

// stylibf
const Container = styled.ul`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  padding: 20px;
  width: 250px;
  list-style-type: none;
`;

const Title = styled.h1`
  font-size: 21px;
`;

const ListItem = styled.li`
  margin-bottom: 10px;
  display: flex;
  flex-direction: row;
  align-items: end;
`;

const Icon = styled.img`
  width: 15px;
  margin-right: 5px;
`;

const Text = styled.p`
  font-size: 14px;
  margin: 0 0 2px 0;
`;

const SecondaryText = styled.p`
  font-size: 12px;
  color: lightgray;
  margin: 0 0 5px 0;
`;

// component
const List = ({ title, icon }) => {
  return (
    <Container>
      {title && <Title>{title}</Title>}
      {turtles.map((item, index) => {
        return (
          <ListItem key={index}>
            {icon && <Icon src={icon}></Icon>}  
            <div>
              <Text>{item.name}</Text>
              <SecondaryText>{item.profession}</SecondaryText>
            </div>
          </ListItem>
        );
      })}
    </Container>
  );
};

export default List;
