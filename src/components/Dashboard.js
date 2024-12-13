// src/components/Dashboard.js
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { Bar, Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from 'chart.js';
import '../styles/Dashboard.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

const Dashboard = () => {
  const { state } = useContext(GlobalContext);
  const { transactions } = state;
  const [chartData, setChartData] = useState({
    labels: [],
    datasets: [],
  });

  useEffect(() => {
    const categories = transactions.map(transaction => transaction.category);
    const amounts = transactions.map(transaction => transaction.amount);

    const data = {
      labels: categories,
      datasets: [
        {
          label: 'Montant',
          data: amounts,
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };
    setChartData(data);
  }, [transactions]);

  return (
    <div className="dashboard">
      <h2>Tableau de Bord</h2>
      <div>
        <h3>Dépenses par Catégorie</h3>
        <Pie data={chartData} />
      </div>
      <div>
        <h3>Revenu vs Dépenses par Mois</h3>
        <Bar data={chartData} />
      </div>
    </div>
  );
};

export default Dashboard;
