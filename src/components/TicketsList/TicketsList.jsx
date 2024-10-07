import styles from '../TicketsList/TicketsList.module.scss';
import Ticket from '../Ticket/Ticket.jsx';
import { Flex, Empty } from 'antd';
import { useGetSearchIdQuery, useFetchTicketsQuery } from '../../features/api/api-service.js';
import { useEffect, useState } from 'react';
import { skipToken } from '@reduxjs/toolkit/query';
import { v4 as uuid4 } from 'uuid';
import { Button } from 'antd';
import { useSelector } from 'react-redux';
import sortingByStops from '../../features/sortingByStops/sortingByStops.js';

function TicketsList() {
  const { data: id } = useGetSearchIdQuery();
  const [numberOfTickets, setNumberOfTickets] = useState(5);
  const { cheap, fast, optimal } = useSelector((state) => state.tabs);
  const stops = useSelector((state) => state.sort);
  const [searchId, setSearchId] = useState(skipToken);
  const { data: ticketsData, isError, refetch } = useFetchTicketsQuery(searchId);

  useEffect(() => {
    if (id?.searchId) setSearchId(id.searchId);
  }, [id]);

  useEffect(() => {
    if ((ticketsData && !ticketsData.stop) || isError) refetch();
  }, [isError, refetch, ticketsData]);

  if (ticketsData?.tickets && !sortingByStops(ticketsData?.tickets, stops).length)
    return <Empty description="Рейсов, подходящих под заданные фильтры, не найдено" />;

  return (
    <>
      <Flex vertical gap={20}>
        {ticketsData?.tickets &&
          sortingByStops(ticketsData.tickets, stops)
            .slice()
            .sort((a, b) => {
              if (cheap) return a.price - b.price;
              if (fast)
                return (
                  a.segments[0].duration + a.segments[1].duration - (b.segments[0].duration + b.segments[1].duration)
                );
              if (optimal)
                return (
                  a.price +
                  a.segments[0].duration +
                  a.segments[1].duration -
                  (b.price + b.segments[0].duration + b.segments[1].duration)
                );
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
