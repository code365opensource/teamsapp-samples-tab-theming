import {
  Button,
  Flex,
  FlexItem,
  Provider,
  Segment
} from "@fluentui/react-northstar";
import { useTeams } from "msteams-react-base-component";



const App = () => {

  const [{ theme }] = useTeams();

  return (
    <Provider theme={theme}>
      <Flex column fill gap="gap.small">
        <Flex>
          <FlexItem push>
            <Segment content="用户名" color="blue"></Segment>
          </FlexItem>
        </Flex>

        <Segment content="第一行文字." color="red" />
        <Segment inverted content="第二行文字." color="red" />
        <Button content="按钮" primary></Button>
      </Flex>
    </Provider>
  );
};


export default App;