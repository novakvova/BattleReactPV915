import { useState } from "react";
import InputGroup from "../../common/InputGroup";

interface IRegisterPage {
  surname: string;
  name: string;
}

const RegisterPage = () => {
    
  const [model, setModel] = useState<IRegisterPage>({
      name: "",
      surname: ""
  } as IRegisterPage);

  const hadleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setModel({
      ...model,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <h1>Реєстрація</h1>
      <form>
        <InputGroup
          label="Прізвище"
          value={model.surname}
          field="surname"
          type="text"
          onChange={hadleChange}
        />
      </form>
    </>
  );
};

export default RegisterPage;
