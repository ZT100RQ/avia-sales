import styles from '../ViewFilter/ViewFilter.module.scss';
import { Radio } from 'antd';
import { useDispatch } from 'react-redux';
import { setCheap, setFast, setOptimal } from '../../features/tabsSlice/tabsSlice'

function ViewFilter() {
  const dispatch = useDispatch();
  return (
    <>
      <Radio.Group size="large" className={styles.Group} defaultValue="cheap" buttonStyle="solid">
        <Radio.Button onClick={() => dispatch(setCheap())} className={styles.Button} value="cheap">
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button onClick={() => dispatch(setFast())} className={styles.Button} value="fast">
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button onClick={() => dispatch(setOptimal())} className={styles.Button} value="optimal">
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </>
  );
}

export default ViewFilter;
