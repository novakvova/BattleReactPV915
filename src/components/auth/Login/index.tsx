
import { useNavigate  } from "react-router-dom";
import { history } from "../../../store/reducers";

const LoginPage = () => {
    const navigate = useNavigate();
    setTimeout(()=>{
        console.log('h');
        //---Both variants work---//
        history.push("register")
        //navigate("/register");
    },1500)
    return (
        <h1>Login Page</h1>
    );
}

export default LoginPage;