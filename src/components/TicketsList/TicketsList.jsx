import styles from '../TicketsList/TicketsList.module.scss';
import Ticket from '../Ticket/Ticket.jsx';
import { Flex } from 'antd';
import { useGetSearchIdQuery, useFetchTicketsQuery } from '../../features/api/api-service.js';
import { useEffect, useMemo, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { v4 as uuid4 } from 'uuid';
import { Button } from 'antd';
import { useSelector } from 'react-redux';

function TicketsList() {
  const [numberOfTickets, setNumberOfTickets] = useState(5);
  const { cheap, fast, optimal } = useSelector((state) => state.tabs);
  const [searchId, setSearchId] = useState(null);
  const { data: id } = useGetSearchIdQuery();
  const {
    data: ticketsData,
    isError,
    refetch,
  } = useFetchTicketsQuery( searchId ?? skipToken
  //   {
  //   selectFromResult: ({ data }) => ({
  //     data: data?.tickets.sort((a, b) => {
  //       console.log(data);
  //       console.log(a.price, b.price);
  //       return a.price - b.price;
  //     }),
  //   }),
  // }
);
  useEffect(() => {
    if (id?.searchId) setSearchId(id.searchId);
  }, [id]);
  useEffect(() => {
    if ((ticketsData && (isError || !isError) && !ticketsData.stop) || isError) refetch();
  }, [isError, refetch, ticketsData]);
  return (
    <>
      <Flex vertical gap={20}>
        {ticketsData?.tickets &&
          ticketsData.tickets
            .slice()
            .sort((a, b) => {
              if (cheap) return a.price - b.price;
              if (fast) return (a.segments[0].duration + a.segments[1].duration) - (b.segments[0].duration + b.segments[1].duration);
              if (optimal) return (a.price + a.segments[0].duration + a.segments[1].duration ) - (b.price + b.segments[0].duration + b.segments[1].duration);
            })
            .slice(0, numberOfTickets)
            .map((ticket) => <Ticket ticket={ticket} key={uuid4()}></Ticket>)}
        {ticketsData?.tickets && (
          <Button
            onClick={() => setNumberOfTickets((numberOfTickets) => numberOfTickets + 5)}
            className={styles.Button}
            size="large"
            type="primary"
          >
            ПОКАЗАТЬ ЕЩЁ 5 БИЛЕТОВ
          </Button>
        )}
      </Flex>
    </>
  );
}

export default TicketsList;
