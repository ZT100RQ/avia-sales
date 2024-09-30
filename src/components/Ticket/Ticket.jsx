import styles from '../Ticket/Ticket.module.scss';
import { Card, Typography, Flex } from 'antd';
const { Text } = Typography;

const secondsConverter = (num) => `${Math.trunc(num / 60)}ч ${Math.trunc(num % 60)}м`;

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
                <Text className={styles.Text}>10:45 – 08:00</Text>
              </Flex>
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  {ticket.segments[1].origin} – {ticket.segments[1].destination}
                </Text>
                <Text className={styles.Text}>10:45 – 08:00</Text>
              </Flex>
            </Flex>
            <Flex vertical align="start" gap="small">
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  В ПУТИ
                </Text>
                <Text className={styles.Text}>{secondsConverter(ticket.segments[0].duration)}</Text>
              </Flex>
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  В ПУТИ
                </Text>
                <Text className={styles.Text}>{secondsConverter(ticket.segments[1].duration)}</Text>
              </Flex>
            </Flex>
            <Flex vertical align="start" gap="small">
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  2 пересадки
                </Text>
                <Text className={styles.Text}>HKG, JNB</Text>
              </Flex>
              <Flex vertical align="start">
                <Text className={styles.Text} type="secondary">
                  2 пересадки
                </Text>
                <Text className={styles.Text}>HKG, JNB</Text>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Card>
    </>
  );
}

export default Ticket;
