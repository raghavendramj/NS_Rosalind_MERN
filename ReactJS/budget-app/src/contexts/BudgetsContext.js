import React, { useContext, useState } from "react";
import { v4 as uuidV4 } from "uuid";
import useLocalStorage from "../hooks/useLocalStograge";

const BudgetsContext = React.createContext();
export const UNCATEGORIZED_BUDGET_ID = "uncategorized";

export function useBudgets() {
  return useContext(BudgetsContext);
}

export const BudgetsProvider = ({ children }) => {
  const [budgets, setBudgets] = useLocalStorage("budgets", []);
  const [expenses, setExpenses] = useLocalStorage("expenses", []);

  //Fetch expenses incurred for a specific budget -> Ex. Entertainment
  function getBudgetExpense(budgetId) {
    return expenses.filter((expense) => {
      return expense.budgetId === budgetId;
    });
  }

  //Add an expense to the array with tagged budgetID ->  destructured expense
  function addExpense({ description, amount, budgetId }) {
    setExpenses((prevExpenses) => {
      return [...prevExpenses, { id: uuidV4(), description, amount, budgetId }];
    });
  }

  //Adds a new category of budget -> destructured object
  function addBudget({ name, max }) {
    setBudgets((prevBudgets) => {
      if (prevBudgets.find((budget) => budget.name === name)) {
        return prevBudgets;
      }
      const newBudgets = [...prevBudgets, { id: uuidV4(), name, max }];
      return newBudgets;
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
