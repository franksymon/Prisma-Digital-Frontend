import React, { useState, useEffect, useCallback } from "react";
import { Register, UserBills } from "../../components";
import { useSelector } from "react-redux";
import axios from "axios";
import "./bills.css";

const Bills = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selecteBills, setSelecteBills] = useState(null);

  const [userBills, setUserBills] = useState([]);

  const userName = useSelector((state) => state.userName);

  //console.log(userBills);

  const getUserBills = useCallback(() => {
    axios
      .get(`https://PrismaTest.prismadigdev.repl.co/users/${userName}/bills`)
      .then((res) => {
        setUserBills(res.data);
      });
  }, [userName]);

  useEffect(() => {
    getUserBills();
  }, [getUserBills]);

  return (
    <div>
      <UserBills
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setSelecteBills={setSelecteBills}
        userBills={userBills}
      />
      <button className="bt-modal" onClick={() => setIsOpen(!isOpen)}>
        <i className="fa-solid fa-plus"></i>
      </button>
      {isOpen && (
        <Register
          setOpen={setIsOpen}
          selecteBills={selecteBills}
          setSelecteBills={setSelecteBills}
          getUserBills={getUserBills}
        />
      )}
    </div>
  );
};

export default Bills;
