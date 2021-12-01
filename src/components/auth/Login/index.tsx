import { useState } from "react";
import InputGroup from "../../common/InputGroup";
import { ILoginModel, LoginError } from "./types";
import {useActions} from "../../../hooks/useActions";

const LoginPage = () => {


    const {loginUser} = useActions();

    const initialErrors : LoginError = {
        email:[],
        password: [],
        error: ""
      }

    const [serverErrors, setServerErrors] = useState<LoginError>(initialErrors);

    const [isSubmitted, setIsSubmitted] = useState<boolean>(false); 

    const [state, setState] = useState<ILoginModel>({
        email: "",
        password: "",
      } as ILoginModel);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setState({
          ...state,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitted(true);
        try {
          console.log("Login begin");
          await loginUser(state);
          console.log("Login end");
          setIsSubmitted(false);
          //navigator("/");
        } catch (ex) {
            const serverErrors = ex as LoginError;
            setServerErrors(serverErrors);
            console.log("Login problem", serverErrors);
          setIsSubmitted(false);
        }
      };

    return (
        <div className="row">
        <div className="col-md-6 offset-md-3">
          <h1 className="text-center">Вхід</h1>
          <form onSubmit={handleSubmit}>
            <InputGroup
              label="Пошта"
              value={state.email}
              field="email"
              type="email"
              onChange={handleChange}
            />

            <InputGroup
              label="Пароль"
              value={state.password}
              field="password"
              type="password"
              onChange={handleChange}
            />

            <button type="submit" className="btn btn-primary">
              Вхід
            </button>
          </form>
        </div>
      </div>
    );
}

export default LoginPage;