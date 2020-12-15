import React from "react";
import styled from "styled-components";

const Card = props => (
  <Container>
    <Cover>
      <Image source={props.image} />
      <Caption>{props.title}</Caption>
    </Cover>
  </Container>
);

export default Card;

const Content = styled.View`
  padding-left: 20px;
  flex-direction: row;
  align-items: center;
  height: 100%;
`;

const Logo = styled.Image`
  width: 44px;
  height: 44px;
`;

const Caption = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
  margin: auto;
`;

const Container = styled.View`
  background: white;
  width: 23%;
  height: 100%;
  border-radius: 4px;
  margin: 20px 10px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
`;

const Cover = styled.View`
  width: 100%;
  height: 95%;
  border-radius: 4px;
  overflow: hidden;
`;

const Image = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
`;

const Title = styled.Text`
  color: white;
  font-size: 12px;
  font-weight: bold;
  margin: auto;
  align-items: center;
`;
