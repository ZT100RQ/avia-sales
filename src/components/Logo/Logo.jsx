import airplane from '../../assets/images/airplane.svg';
import styles from '../Logo/Logo.module.scss';
import { useFetchTicketsQuery } from '../../features/api/api-service';
import { useEffect, useState } from 'react';

function Logo() {
  const [loading, setLoading] = useState(null);
  const { isFetching, isLoading } = useFetchTicketsQuery();
  console.log(isFetching, isLoading);
  useEffect(() => {
    if (!isFetching) setLoading(false);
    if (isFetching || isLoading) setLoading(true);
  }, [isFetching, isLoading]);
  return (
    <>
      {loading && <span className={styles.Loader}></span>}
      <img src={airplane} className={styles.Logo} />
    </>
  );
}

export default Logo;
