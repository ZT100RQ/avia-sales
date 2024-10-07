import airplane from '../../assets/images/airplane.svg';
import styles from '../Logo/Logo.module.scss';
import { useFetchTicketsQuery } from '../../features/api/api-service';
import { useCallback, useEffect, useState } from 'react';
import { message } from 'antd';

function Logo() {
  const [messageApi, contextHolder] = message.useMessage();
  const [loading, setLoading] = useState(null);
  const { data, isFetching, isLoading } = useFetchTicketsQuery();

  const success = useCallback(() => {
    messageApi.open({
      type: 'success',
      content: 'Все билеты загрузились',
      duration: 2.1,
      style: {
        marginTop: '20px',
      },
    });
  }, [messageApi]);

  useEffect(() => {
    if (data?.stop) success();
  }, [data, success]);

  useEffect(() => {
    if (data?.stop) {
      setLoading(false);
    }
    if (isFetching || isLoading) {
      setLoading(true);
    }
  }, [isFetching, data, isLoading]);
  return (
    <>
      {contextHolder}
      {loading && <span className={styles.Loader}></span>}
      <img src={airplane} className={styles.Logo} />
    </>
  );
}

export default Logo;
