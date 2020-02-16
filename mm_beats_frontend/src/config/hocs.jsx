import { withRouter } from "react-router-dom";

import LoginForm from "../components/auth/LoginForm";
import RegistrationForm from "../components/auth/RegistrationForm";
import {
  userIsAuthenticated,
  userIsNotAuthenticated
} from "../components/auth/authentication";

// Define higher order components
export const Login = withRouter(userIsNotAuthenticated(LoginForm));
export const Register = withRouter(userIsNotAuthenticated(RegistrationForm));

// const Dashboard = userIsAuthenticated(DashboardPage);
