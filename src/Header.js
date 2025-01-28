import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Header() {
    const navigate = useNavigate();
    const [loginData , setLoginData] = useState(false);
    const [user , setUser] = useState(false);
   
    const signOut = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setLoginData(false);
        navigate('/signin',{replace:true});
    }

  useEffect(() => {
    if (typeof window !== "undefined") {
        try{
            if (localStorage.getItem("token")) {
                setLoginData(true);
            }
            if (localStorage.getItem("user")) {
                setUser(JSON.parse(localStorage.getItem("user")));
            }
        }catch(e){
            return {"error" : "Filter name not found !"};
        }
    }
  },[])

  return (
    <div className="header">
    <div className="product-heading">
      <h1> Product Management </h1>
      <p><Link to={'/dashboard'} className="dashboard-link" >Dashboard</Link> </p>
    </div>

    <div className="product-heading">
      <p className="dashboard-link">Signed is as : {user.username}</p>
      <button className="btn-signout" onClick={signOut}> Sign Out</button>
    </div>
  </div>
  );
}

export default Header;