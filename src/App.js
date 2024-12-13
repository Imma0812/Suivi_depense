// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;



// src/App.js
// src/App.js
import React from 'react';
import { GlobalProvider } from './context/GlobalState';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import TransactionForm from './components/TransactionForm';
import BudgetManager from './components/BudgetManager';
import InvestmentTracker from './components/InvestmentTracker';
import SavingsGoals from './components/SavingsGoals';
import './App.css';

const App = () => {
  return (
    <GlobalProvider>
      <div className="app">
        <Header />
        <Dashboard />
        <TransactionForm />
        <BudgetManager />
        <InvestmentTracker />
        <SavingsGoals />
        <Footer />
      </div>
    </GlobalProvider>
  );
};

export default App;

