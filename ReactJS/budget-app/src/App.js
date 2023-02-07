import logo from "./logo.svg";
import "./App.css";
import { Button, Container, Stack } from "react-bootstrap";
import BudgetCard from "./components/budget";

function App() {
  const divStyle = {
    display: "grid",
    gridTemplayeColumns: "repeat(auto-fill minmax(300px, 1fr)",
    gap: "1rem",
    alignItems: "flex-start",
  };

  return (
    <Container>
      <Stack direction="horizontal" gap={2} className="mb-4">
        <h1 className="me-auto">Budgets</h1>
        <Button as="a" variant="primary">
          Add Budget
        </Button>
        <Button as="a" variant="primary">
          Add Expense
        </Button>
      </Stack>
      <div style={divStyle}>
        <BudgetCard
          cardName="Entertainment"
          amount={1100}
          max={1000}
        ></BudgetCard>
      </div>
    </Container>
  );
}

export default App;
