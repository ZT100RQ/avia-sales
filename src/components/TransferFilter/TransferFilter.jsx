import styles from '../TransferFilter/TransferFilter.module.scss';
import { Card, Checkbox, Flex, Typography } from 'antd';
import { useSelector, useDispatch } from 'react-redux';
import { setOne, setTwo, setThree, setZero, setAll } from '../../features/sort-tickets/sortSlice';

const { Text } = Typography;

function TransferFilter() {
  const { all, zero, one, two, three } = useSelector((state) => state.sort);
  const dispatch = useDispatch();
  return (
    <>
      <Card className={styles.Card} styles={{ body: { padding: 0 } }}>
        <Flex vertical>
          <Text className={styles.Title}>КОЛИЧЕСТВО ПЕРЕСАДОК</Text>
          <Checkbox checked={all} onClick={() => dispatch(setAll())} className={styles.Checkbox}>Все</Checkbox>
          <Checkbox checked={zero} onClick={() => dispatch(setZero())} className={styles.Checkbox}>Без пересадок</Checkbox>
          <Checkbox checked={one} onClick={() => dispatch(setOne())} className={styles.Checkbox}>1 пересадка</Checkbox>
          <Checkbox checked={two} onClick={() => dispatch(setTwo())} className={styles.Checkbox}>2 пересадка</Checkbox>
          <Checkbox checked={three} onClick={() => dispatch(setThree())} className={styles.Checkbox}>3 пересадки</Checkbox>
        </Flex>
      </Card>
    </>
  );
}

export default TransferFilter;
