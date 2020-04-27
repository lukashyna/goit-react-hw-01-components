import React from 'react';
import FriendList from './components/friendList/friendList';
import Profile from './components/social-profile/social-profile';
import Statistics from './components/statistical-data/statistical-data';
import TransactionHistory from './components/transactionHistory/transactionHistory';
import friends from './json/friends.json';
import user from './json/user.json';
import statistic from './json/statistical-data.json';
import transactions from './json/transactions.json';

const App = () => (
  <>
    <FriendList friends={friends} />
    <Profile user={user} />
    <Statistics stats={statistic} title="Upload stats" />
    <TransactionHistory transactions={transactions} />
  </>
);

export default App;
