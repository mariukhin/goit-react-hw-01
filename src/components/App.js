import React from 'react';
import Profile from './Profile';
import StatsSection from './StatsSection/StatsSection';

const App = ({ user, title, stats }) => (
  <div>
    <Profile user={user} />
    <StatsSection title={title} stats={stats} />
    {/* <Button
      label="Click me!"
      icon="https://avatars2.githubusercontent.com/u/39895671?s=400&v=4"
      // disabled
    /> */}

    {/* <Dropdown isOpen={true} /> */}

    {/* <Panel title="Top Products">
      <ProductList items={products} />
    </Panel> */}
  </div>
);

export default App;
