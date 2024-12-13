// src/context/AppReducer.js
const AppReducer = (state, action) => {
    switch (action.type) {
      case 'ADD_TRANSACTION':
        return {
          ...state,
          transactions: [...state.transactions, action.payload],
        };
      // Ajoute d'autres cas pour gérer les budgets, investissements, etc.
      default:
        return state;
    }
  };
  
  export default AppReducer;
  