import styles from '../Ticket/Ticket.module.scss';
import { Card, Typography, Flex } from 'antd';
import { format } from 'date-fns';
const { Text } = Typography;

const setTimeFromMinutes = (minutes) => `${Math.trunc(minutes / 60)}ч ${minutes % 60}м`;

const getArrivalTime = (date, minutes) => {
  const departureTimeStamp = Date.parse(date);
  const durationMs = minutes * 60000;
  return format(new Date(departureTimeStamp + durationMs), 'kk:mm');
};

function Ticket({ ticket }) {
  return (
    <>
      <Card className={styles.Card} styles={{ body: { padding: '20px' } }}>
        <Flex gap="middle" vertical>
          <Flex justify="space-between">
            <h1 className={styles.Title}>{ticket.price}</h1>
            <img className={styles.Logo} src={`https://pics.avs.io/99/36/${ticket.carrier}.png`}></img>
          </Flex>
          <Flex gap="middle" justify="space-between">
            <Flex vertical align="start" gap="small">
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  {ticket.segments[0].origin} – {ticket.segments[0].destination}
                </Text>
                <Text className={styles.Text}>
                  {format(new Date(ticket.segments[0].date), 'kk:mm')}
                  {' – '}
                  {getArrivalTime(ticket.segments[0].date, ticket.segments[0].duration)}
                </Text>
              </Flex>
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  {ticket.segments[1].origin} – {ticket.segments[1].destination}
                </Text>
                <Text className={styles.Text}>
                  {format(new Date(ticket.segments[1].date), 'kk:mm')}
                  {' – '}
                  {getArrivalTime(ticket.segments[1].date, ticket.segments[1].duration)}
                </Text>
              </Flex>
            </Flex>
            <Flex vertical align="start" gap="small">
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  В ПУТИ
                </Text>
                <Text className={styles.Text}>{setTimeFromMinutes(ticket.segments[0].duration)}</Text>
              </Flex>
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  В ПУТИ
                </Text>
                <Text className={styles.Text}>{setTimeFromMinutes(ticket.segments[1].duration)}</Text>
              </Flex>
            </Flex>
            <Flex vertical align="start" gap="small" justify={'space-between'}>
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  {!ticket.segments[0].stops.length
                    ? 'Без пересадок'
                    : ticket.segments[0].stops.length > 1
                      ? `${ticket.segments[0].stops.length} пересадки`
                      : '1 пересадка'}
                </Text>
                <Text className={styles.Text}>
                  {ticket.segments[0].stops.length ? ticket.segments[0].stops.join(', ') : ' '}
                </Text>
              </Flex>
              <Flex vertical align="start" className={styles.LastFlex}>
                <Text className={styles.Text} type="secondary">
                  {!ticket.segments[1].stops.length
                    ? 'Без пересадок'
                    : ticket.segments[1].stops.length > 1
                      ? `${ticket.segments[1].stops.length} пересадки`
                      : '1 пересадка'}
                </Text>
                <Text className={styles.Text}>
                  {ticket.segments[1].stops.length ? ticket.segments[1].stops.join(', ') : ' '}
                </Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}

export default Ticket;
