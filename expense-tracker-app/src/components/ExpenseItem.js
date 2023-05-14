import './ExpenseItem.css'
function ExpenseItem() {
    const date = new Date(2023,5,8);
    const title = 'Room Rent';
    const price = 7000;

    return (
        <div className="expense-item">
        <div>Date: {date.toString()}</div>
        <div className="expense-item__description">
            <h2 className="title">{title}</h2>
            <div className="price">₹ {price}</div>
        </div>
        </div>
    );
}

export default ExpenseItem;
