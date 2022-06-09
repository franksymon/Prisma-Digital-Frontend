import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import "./register.css";

const Register = ({ setOpen, selecteBills, setSelecteBills, getUserBills }) => {
  const userName = useSelector((state) => state.userName);

  const defaultValues = {
    observation: "",
    type: "",
    value: "",
  };

  const { register, handleSubmit, reset } = useForm();

  const submit = (data) => {
    axios
      .post(
        `https://PrismaTest.prismadigdev.repl.co/users/${userName}/bills`,
        data
      )
      .then(() => {
        getUserBills();
      });

    console.log(data);
    setOpen(false);
    reset(defaultValues);
  };

  useEffect(() => {
    if (selecteBills) {
      reset({
        type: selecteBills.type,
        value: selecteBills.value,
        observation: selecteBills.observation,
      });
    }
  }, [selecteBills, reset]);

  const deletesBills = () => {
    axios
      .delete(
        `https://PrismaTest.prismadigdev.repl.co/users/${userName}/bills/${selecteBills.id}
        `
      )
      .then(() => {
        //console.log(userName, selecteBills.id);
        getUserBills();
      });
  };

  console.log(selecteBills);

  return (
    <article className="modal-register">
      <form onSubmit={handleSubmit(submit)} className="register ">
        <h4>Registro de Movimiento</h4>
        {selecteBills && <p className="date-bills">{selecteBills.date_bill}</p>}
        <div className="input-container-register">
          <label htmlFor="observation">Descripción</label>
          <textarea
            name="observation"
            id="observation"
            {...register("observation", { required: true })}
          />
        </div>
        <div className="input-container-register">
          <p>
            <b>Tipo de Movimiento</b>
          </p>
          <div className="input-radio-register">
            <label htmlFor="">Ingreso</label>
            <input
              type="radio"
              id="type"
              name="type"
              value="1"
              {...register("type")}
            />
            <label htmlFor="">Gasto</label>
            <input
              type="radio"
              id="type"
              name="type"
              value="2"
              {...register("type")}
            />
          </div>
        </div>
        <div className="input-container-register">
          <label htmlFor="">Valor</label>
          <input
            type="text"
            id="value"
            name="value"
            {...register("value", { required: true })}
          />
        </div>
        <div className="button-register">
          {selecteBills ? (
            <button onClick={deletesBills} className="btn-register">
              Eliminar
            </button>
          ) : (
            <button className="btn-register">Register</button>
          )}
          <button
            onClick={() => {
              reset(defaultValues);
              setSelecteBills(null);
              setOpen(false);
            }}
          >
            Cancelar
          </button>
        </div>
      </form>
    </article>
  );
};

export default Register;
