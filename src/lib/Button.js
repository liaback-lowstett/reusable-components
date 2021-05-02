import React from "react";
import styled from "styled-components/macro";


// styling
const ContainedButton = styled.button`
  background: lightgray;
  border: none;
  border-radius: 3px;
  margin: 0 1em;
  padding: 0.55em 1em;
`;

const ButtonText = styled.span`
  font-size: 14px;
  font-weight: 700;
  color: #000;
`;

const ButtonIcon = styled.span`

`

// component
const Button = ({ buttonText, buttonIcon, className }) => {
  return (
    <ContainedButton className={className}>
      {buttonText && <ButtonText>{buttonText}</ButtonText>}
      {buttonIcon && <ButtonIcon>{buttonIcon}</ButtonIcon>}
    </ContainedButton>
  );
};

export default Button;
