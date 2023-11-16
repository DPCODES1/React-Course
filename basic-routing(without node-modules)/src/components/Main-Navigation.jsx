import { Link,NavLink } from "react-router-dom";
import classes from './MainNav.module.css'
function MainNav(props) {
  return (
    // <a href="/products">Products</a>
    <>
      <NavLink to="/products" className={(isActive)=> {return isActive.isActive ? classes.active : ''}}>Products </NavLink>
      <Link to="/">Home</Link>
      {props.children}
    </>
  );
}

export default MainNav;
