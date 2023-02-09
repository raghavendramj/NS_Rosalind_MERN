import "./App.css";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/budget";
import AddBudgetModal from "./components/AddBudgetModal";
import { useState } from "react";

function App() {
  const divStyle = {
    display: "grid",
    gridTemplayeColumns: "repeat(auto-fill minmax(300px, 1fr)",
    gap: "1rem",
    alignItems: "flex-start",
  };

  const [showAddBudgetModal, setShowAddBudgetModal] = useState(false);

  return (
    <>
      <Container>
        <Stack direction="horizontal" gap={2} className="mb-4">
          <h1 className="me-auto">Budgets</h1>
          <Button as="a" variant="primary" onClick={() => setShowAddBudgetModal(true)}>
            Add Budget
          </Button>
          <Button as="a" variant="outline-primary">
            Add Expense
          </Button>
        </Stack>
        <div style={divStyle}>
          <BudgetCard
            cardName="Entertainment"
            amount={880}
            max={1000}
          ></BudgetCard>
        </div>
      </Container>
      <AddBudgetModal
        show={showAddBudgetModal}
        handleClose={setShowAddBudgetModal}
      ></AddBudgetModal>
    </>
  );
}

export default App;
