import React from "react";
import { RxCross2 } from "react-icons/rx";

const ExpenseList = ({ expenses, onDelete, totalExpense }) => {
  if (expenses.length === 0) {
    return <p className="text-danger">No expense yet </p>;
  }

  return (
    <div className="col-md-6">
      <h3>Total Expense Rs. : {totalExpense.toFixed(2)} </h3>
      <table className="table">
        <thead></thead>
        <tbody>
          {expenses.map((item) => (
            <tr key={item.id}>
              <td> {item.title} </td>
              <td> Rs. {item.amount} </td>
              <td
                className="text-danger"
                style={{ cursor: "pointer" }}
                onClick={() => onDelete(item.id)}
              >
                <RxCross2 />
              </td>
            </tr>
          ))}
        </tbody>
        <tfoot></tfoot>
      </table>
    </div>
  );
};

export default ExpenseList;
