import React from "react";
import "./userBills.css";

const UserBills = ({ isOpen, setIsOpen, setSelecteBills, userBills }) => {
  const itenModal = (bill) => {
    setIsOpen(!isOpen);
    setSelecteBills(bill);
  };

  return (
    <section className="bills">
      <h3>Movimientos</h3>
      <div className="bills-containe">
        {userBills.map((bill) => (
          <button
            onClick={() => itenModal(bill)}
            key={bill.id}
            className="btn-bills"
          >
            <div className="wrapper-bill">
              <div className="bill-info">
                <p>{bill.date_bill}</p>
                <p>{bill.observation}</p>
              </div>
              <p className="bill-value">
                <b>$ - {bill.value}</b>
              </p>
            </div>
          </button>
        ))}
      </div>
    </section>
  );
};

export default UserBills;
