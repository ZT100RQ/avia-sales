import styles from './App.module.scss';
import TransferFilter from './components/TransferFilter/TransferFilter.jsx';
import ViewFilter from './components/ViewFilter/ViewFilter.jsx';
import Logo from './components/Logo/Logo.jsx';
import TicketsList from './components/TicketsList/TicketsList.jsx';
import { Flex } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { ticketsApi, useFetchTicketsQuery } from './features/api/api-service.js';

function App() {
  const { isFetching, isSuccess } = useFetchTicketsQuery();
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
