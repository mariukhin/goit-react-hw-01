import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import transactions from './transactions.json';
import { user, stats } from './importFiles';
import pricingPlanItems from './pricing-plan.json';
import bronzeLogo from './img/bronze-icon.png';
import silverLogo from './img/silver-icon.png';
import goldLogo from './img/gold-icon.png';

pricingPlanItems[0].icon = bronzeLogo;
pricingPlanItems[1].icon = silverLogo;
pricingPlanItems[2].icon = goldLogo;

ReactDOM.render(
  <App
    user={user}
    title="Upload stats"
    stats={stats}
    items={pricingPlanItems}
    transactions={transactions}
  />,
  document.getElementById('root'),
);
