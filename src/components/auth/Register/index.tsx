import React, { useState } from "react";
import InputGroup from "../../common/InputGroup";

interface IRegisterPage {
  surname: string;
  name: string;
}

const RegisterPage = () => {
  const [model, setModel] = useState<IRegisterPage>({
    name: "",
    surname: "",
  } as IRegisterPage);

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("submit data", model);
  };

  return (
    <>
      <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Реєстрація</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup
              label="Прізвище"
              value={model.surname}
              field="surname"
              type="text"
              onChange={hadleChange}
            />

            <InputGroup
              label="Ім'я"
              value={model.name}
              field="name"
              type="text"
              onChange={hadleChange}
            />

            <button type="submit" className="btn btn-primary">
              Реєстрація
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterPage;
