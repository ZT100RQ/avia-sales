import styles from './App.module.scss';
import TransferFilter from './components/TransferFilter/TransferFilter.jsx';
import ViewFilter from './components/ViewFilter/ViewFilter.jsx';
import Logo from './components/Logo/Logo.jsx';
import TicketsList from './components/TicketsList/TicketsList.jsx';
import { Flex } from 'antd';

function App() {
  return (
    <>
      <Logo></Logo>
      <Flex justify="center" gap={20}>
        <TransferFilter text={1} />
        <Flex justify="flex-start" vertical gap={20}>
          <ViewFilter />
          <TicketsList></TicketsList>
        </Flex>
      </Flex>
    </>
  );
}

export default App;
