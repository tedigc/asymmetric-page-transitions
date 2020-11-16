import { Link as ReactRouterLink } from "react-router-dom";
import "./Link.styles.css";

const Link = ({ to, children }) => {
  return <ReactRouterLink to={to}>{children}</ReactRouterLink>;
};

export default Link;
