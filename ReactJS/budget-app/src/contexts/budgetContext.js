import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";

const BudgetsContext = React.createContext();

export function useBudgets() {
  return useContext(BudgetsContext);
}



// Categorized budgets -> 
// 1. Entertainment($1000) -> incur expenses -> [expense1, expense2, ...]

// Lets say $1000 Budget - Entertainment
// $100 expense1 -> sketch pens
// $350 expense2 -> drawing board
// Total expense -> $450 / $1000
// Total_Expense -> Categorization..
// 0 t0 500 (Acceptable -> primary class) 
// 500 t0 750 (Little above than median -> warning class) 
// 750+ (Close to max budget -> Danger class)

// 2. Study($500) -> incur expenses -> [expense1, expense2, ...]
// 3. Other($1000)-> incur expenses -> [expense1, expense2, ...]

//Budget Object! ->  
// {
//     id: 1 
//     name: Entertainment
//     max: $1000
// }

//Expense Object!
// {
//     id: 1 
//     budgetId: 1 
//     amount: 100 
//     description: sketch pens
// }, 
// {
//     id: 2
//     budgetId: 1 
//     amount: 350 
//     description: drawing board
// }

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useState([]);
  const [expenses, setExpenses] = useState([]);

  //Fetch expenses incurred for a specific budget -> Ex. Entertainment
  function getBudgetExpense(budgetId) {
    return expenses.filter((expense) => expense.budgetId === budgetId);
  }

  //Add an expense to the array with tagged budgetID
  function addExpense(description, amount, budgetId) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }

  //Adds a new category of budget
  function addBudget(name, max) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      return [...prevBudgets, { id: uuidV4(), name, max }];
    });
  }

  //Deleting a expense
  function deleteExpense({ id }) {
    setBudgets((prevExpenses) => {
      return prevExpenses.filter((expense) => expense.id !== id);
    });
  }

  //Deleting the budget
  function deleteBudget({ id }) {
    //TODO: Deal with expenses to move to Uncategorized budgets
    setBudgets((prevBudgets) => {
      return prevBudgets.filter((budget) => budget.id !== id);
    });
  }

  return (
    <BudgetsContext.Provider
      value={{
        budgets,
        expenses,
        getBudgetExpense,
        addExpense,
        addBudget,
        deleteExpense,
        deleteBudget,
      }}
    >
      {children}
    </BudgetsContext.Provider>
  );
};
