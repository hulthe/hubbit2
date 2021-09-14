import React from 'react';

import { useCurrentSessionsQuery } from '../__generated__/graphql';
import ActiveGroupsList from '../components/active-group-list/ActiveGroupsList';
import ActiveUsersList from '../components/active-users-list/ActiveUsersList';
import Error from '../components/error/Error';
import LoadingData from '../components/loading-data/LoadingData';

import styles from './index.module.scss';

const Home = () => {
  const [{ data, fetching, error }] = useCurrentSessionsQuery();

  if (session.fetching) {
    return <LoadingData />;
  }

  if (session.error) {
    console.error('Error:', session.error);
    return <Error />;
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.sessionsContainer}>
        <ActiveUsersList sessions={data.currentSessions} />
        <ActiveGroupsList sessions={data.currentSessions} />
      </div>
    </div>
  );
};

export default Home;
