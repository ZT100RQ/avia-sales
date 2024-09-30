import styles from '../ViewFilter/ViewFilter.module.scss';
import { Radio } from 'antd';

function ViewFilter() {
  return (
    <>
      <Radio.Group size="large" className={styles.Group} defaultValue="cheap" buttonStyle="solid">
        <Radio.Button className={styles.Button} value="cheap">
          САМЫЙ ДЕШЕВЫЙ
        </Radio.Button>
        <Radio.Button className={styles.Button} value="fast">
          САМЫЙ БЫСТРЫЙ
        </Radio.Button>
        <Radio.Button className={styles.Button} value="optimal">
          ОПТИМАЛЬНЫЙ
        </Radio.Button>
      </Radio.Group>
    </>
  );
}

export default ViewFilter;
