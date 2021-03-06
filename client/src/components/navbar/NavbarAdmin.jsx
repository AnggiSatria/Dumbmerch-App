import React from 'react'
import IMG from '../../Assets/Dumbmerch Nav.png'
import { Link, useNavigate } from 'react-router-dom';
import Font from "../../Assets/Font.module.css";
import { useContext } from 'react';
import { UserContext } from '../../context/userContext';
import { Nav } from 'react-bootstrap';

const NavbarAdmin = () => {

    const [state, dispatch] = useContext(UserContext)

    const navigate = useNavigate()

    const logout = () => {
        console.log(state);
        dispatch({
            type : "LOGOUT",
        })
        navigate("/")
    }

  return (
    <div>
    <nav>
        <div className="All" style={{display : 'flex', width : '100%', color : 'white'}}>
            <div className="left" style={{display : 'flex', flex : '50%', marginLeft : '30px'}}>
                <a href=""><img src={IMG} alt="" style={{alignItem : 'center'}}/></a>
            </div>

            <div className="right" style={{display : 'flex', flex : '50%', justifyContent : 'flex-end', marginRight : '30px'}}>
                <ul style={{display : 'flex', listStyleType : 'none', alignItems : 'center'}}>
                    <Link  to="/complain-admin" style={{paddingRight : '20px', textDecoration : 'none'}}><li className={Font.Font} style={{color : 'white', textDecoration : 'none'}}>Complain</li></Link>
                    <Link to="/category" style={{paddingRight : '20px', textDecoration : "none"}}><li className={Font.Font} style={{color: 'white', textDecoration : 'none'}}>Category</li></Link>
                    <Link  to="/product"style={{paddingRight : '20px', textDecoration : 'none'}}><li className={Font.Font} style={{color : 'white', textDecoration : 'none'}}>Product</li></Link>
                    <Nav.Link onClick={logout} style={{textDecoration : 'none'}}><li className={Font.Font} style={{color : 'white', textDecoration : 'none'}}>Logout</li></Nav.Link>
                </ul>
            </div>
        </div>
    </nav>
</div>
  )
}

export default NavbarAdmin;