import React from "react";
import styled from "styled-components/macro";


// styling
const Container = styled.div`
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
  background-color: #fff;
  border-radius: 6px;
  margin: 0 20px 20px 0;
  height: 350px;
  width: 350px;
`;

const CoverImage = styled.img`
  width: 100%;
  border-radius: 6px 6px 0 0;
`;

const Content = styled.div`
  padding: 16px;
`;

const Title = styled.h1`
  margin: 0;
  font-size: 24px;
`;

const SecondaryText = styled.p`
  margin: 0;
  color: #6b6b6b;
`;

const Thumbnail = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-image: url(${(props) => props.url});
  background-size: cover;
  margin-right: 10px;
`;

const TitleBar = styled.div`
  display: flex;
  align-items: center;
  padding: 20px;
`;


// component
const Card = ({
  title,
  secondaryText,
  thumbnailUrl,
  coverImage,
  className,
}) => {
  return (
    <>
      <Container className={className}>
        {coverImage && <CoverImage src={coverImage} />}
        <Content>
          <TitleBar>
            {thumbnailUrl && <Thumbnail url={thumbnailUrl} />}
            <div>
              {title && <Title>{title}</Title>}
              {secondaryText && <SecondaryText>{secondaryText}</SecondaryText>}
            </div>
          </TitleBar>
        </Content>
      </Container>
    </>
  );
};

export default Card;
