import "./App.css";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/budget";
import AddBudgetModal from "./components/AddBudgetModal";
import ViewExpensesModal from "./components/ViewExpensesModal";
import { useState } from "react";
import { BudgetsProvider, useBudgets } from "./contexts/BudgetsContext";
import AddExpenseModal from "./components/AddExpenseModal";
import UncategorizedBudgetCard from "./components/UncategorizedBudgetCard";
import TotalBudgetCard from "./components/TotalBudgetCard";

function App() {
  const divStyle = {
    display: "grid",
    gridTemplayeColumns: "repeat(auto-fill minmax(300px, 1fr)",
    gap: "1rem",
    alignItems: "flex-start",
  };

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const [viewExpenseModalBudgetId, setViewExpenseModalBudgetId] = useState(false);
  const [addExpenseModalBudgetId, setAddExpenseModalBudgetId] = useState(false);
  const { budgets, getBudgetExpense } = useBudgets();

  function openAddExpenseModel(budgetId) {
    setShowAddExpenseModal(true);
    setAddExpenseModalBudgetId(budgetId);
  }

  return (
    <>
      <Container>
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button
            as="a"
            variant="primary"
            onClick={() => setShowAddBudgetModal(true)}
          >
            Add Budget
          </Button>
          <Button
            as="a"
            variant="outline-primary"
            onClick={openAddExpenseModel}
          >
            Add Expense
          </Button>
        </Stack>
        <div style={divStyle}>
          {budgets.map((budget) => {
            const budexpenses = getBudgetExpense(budget.id);
            const amount = budexpenses.reduce(
              (total, expense) => total + expense.amount,
              0
            );
            return (
              <BudgetCard
                key={budget.id}
                amount={amount}
                cardName={budget.name}
                max={budget.max}
              ></BudgetCard>
            );
          })}
          <UncategorizedBudgetCard />
          <TotalBudgetCard />
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={() => setShowAddBudgetModal(false)}
      ></AddBudgetModal>
      <AddExpenseModal
        show={showAddExpenseModal}
        defaultBudgetId={addExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      ></AddExpenseModal>
      <ViewExpensesModal 
        budgetId={viewExpenseModalBudgetId}
        handleClose={() => setShowAddExpenseModal(false)}
      ></ViewExpensesModal>
    </>
  );
}

export default App;
