import "./App.css";
import styled from "styled-components/macro";
import Card from "./lib/Card";
import Button from "./lib/Button";
import List from "./lib/List"
import user from "./assets/user.png";

// styling
const SmallCard = styled(Card)`
  height: 150px;
`;

const TextButton = styled(Button)`
  background: transparent;
`;

const OutlinedButton = styled(Button)`
  background: transparent;
  border: 1px solid #071c42;;
` 
// all components
const App = () => {
  return (
    <>
      <div className="cards-container">
        <Card
          coverImage="https://www.fillmurray.com/500/300"
          title="This is a title"
          secondaryText="This is a secondary text"
        />
        <SmallCard
          thumbnailUrl="https://www.fillmurray.com/100/100"
          title="Only a title"
          secondaryText="And secondary text"
        />
      </div>
      <div className="buttons-container">
        <Button buttonText="Contained button" />
        <OutlinedButton buttonText="Outlined button" />
        <TextButton buttonText="Text button" />
      </div>
      <div className="list-container">
        <List 
          icon={user}
          title="Team turtle"
        />
      </div>
    </>
  );
};

export default App;
