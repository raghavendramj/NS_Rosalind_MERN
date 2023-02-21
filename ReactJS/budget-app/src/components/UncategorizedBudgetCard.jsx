import React from 'react'
import { UNCATEGORIZED_BUDGET_ID, useBudgets } from '../contexts/BudgetsContext';
import BudgetCard from './budget'

export default function UncategorizedBudgetCard(props) {

    const { getBudgetExpense } = useBudgets();

    const unCatBudgets = getBudgetExpense(UNCATEGORIZED_BUDGET_ID);
    const amount = unCatBudgets.reduce(
        (total, expense) => total + expense.amount,
        0
    );
    console.log("Amount :- ", amount);

    if(amount === 0)
    return null;

    return (
        <BudgetCard amount={amount} cardName="Uncategorized" gray {...props} />
    )
}
