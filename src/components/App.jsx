import Header from './Header/Header';
import Profile from './Profile/Profile';

import user from '../data/user.json';
import statistics from '../data/statistics.json';
import friends from "../data/friends.json";
import transactions from "../data/transactions.json"

import Section from './Section/Section';
import { Statistics } from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';

export const App = () => {
   return (
    <div>
      <Header />
      <Section title="Social Network Profile">
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Section>

      <Section title="Statistics Section">
        <Statistics stats={statistics} />
      </Section>

      <Section title="Friends List">
        <FriendList friends={friends} />
      </Section>

      <Section title="Transaction History">
        <TransactionHistory transactions={transactions} />
      </Section>
    </div>
  );
};
