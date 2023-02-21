This is budget application just like splitwise

Categorized budgets ->
1. Entertainment($1000) -> incur expenses -> [expense1, expense2, ...]
    Lets say $1000 Budget - Entertainment
        $100 expense1 -> sketch pens
        $350 expense2 -> drawing board
    Total expense -> $450 / $1000
    Total_Expense -> Categorization.. (Progress Bar)
        0 t0 500 (Acceptable -> primary class) - Blue
        500 t0 750 (Little above than median -> warning class) - Yello
        750+ (Close to max budget -> Danger class) - Red
2. Study($500) -> incur expenses -> [expense1, expense2, ...]
3. Other($1000)-> incur expenses -> [expense1, expense2, ...]

Budget Object! ->
{
    id: 1
    name: Entertainment
    max: $1000
}

Expense Object!
{
    id: 1
    budgetId: 1
    amount: 100
    description: sketch pens
},
{
    id: 2
    budgetId: 1
    amount: 350
    description: drawing board
}