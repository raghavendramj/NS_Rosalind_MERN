import { Form, Modal, Button } from "react-bootstrap"
import { useRef } from "react"
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from "../contexts/BudgetsContext"

export default function AddExpenseModal({ show, handleClose, defaultBudgetId }) {
    const descRef = useRef()
    const amountRef = useRef()
    const budgetIdRef = useRef()
    const { addExpense, budgets } = useBudgets()
    
    function handleSubmit(e) {
        e.preventDefault();
        //Writing to context scope to make sure other components are able to see this change
        addExpense({
            description: descRef.current.value,
            amount: parseFloat(amountRef.current.value),
            budgetId: budgetIdRef.current.value,
        })
        handleClose();
    }

    return (
        <Modal show={show} onHide={handleClose}>
            <Form onSubmit={handleSubmit}>
                <Modal.Header closeButton>
                    <Modal.Title>New Expense</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control ref={descRef} type="text" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="amount">
                        <Form.Label>Amount</Form.Label>
                        <Form.Control
                            ref={amountRef}
                            type="number"
                            required
                            min={0}
                            step={0.01}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="budgetId">
                        <Form.Label>Budget</Form.Label>
                        <Form.Select
                            defaultValue={defaultBudgetId}
                            ref={budgetIdRef}
                        >
                            <option key={UNCATEGORIZED_BUDGET_ID} value="Uncategorized">{"Uncategorized"}</option>
                            {
                                budgets.map(budget => {
                                    return (<option key={budget.id}
                                        value={budget.id}
                                    >{budget.name}</option>)
                                })
                            }
                        </Form.Select>
                    </Form.Group>
                    <div className="d-flex justify-content-end">
                        <Button variant="primary" type="submit">
                            Add
                        </Button>
                    </div>
                </Modal.Body>
            </Form>
        </Modal>
    )
}