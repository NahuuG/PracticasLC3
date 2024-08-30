import React from 'react';
import Table from './components/Table/Table.jsx';


const App = () => {
  const netIncomes = [
    { brand: 'McDonalds', income: 1291283 },
    { brand: 'Burger King', income: 1927361 },
    { brand: 'KFC', income: 1098463 }
  ];

  const totalIncome = netIncomes.reduce((sum, item) => sum + item.income, 0);
  const averageIncome = totalIncome / netIncomes.length;

  return (
    <div>
      <Table netIncomes={netIncomes} />
      <p>Promedio de Ingreso Neto: {averageIncome.toFixed(2)}</p>
    </div>
  );
};

export default App;

