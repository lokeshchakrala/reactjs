import React,{useState} from "react";
function Loginout(){
    const [isLoggedIn, setIsLoggedIn]= useState(false);
    const handleLoginToggle =()=>{
        setIsLoggedIn(!isLoggedIn);
    };

    return(
        <div>
            <h1>Click button to login and logout</h1>
            {isLoggedIn?(
                <p>welcome user to the React Js </p>
            ) :(
                <p> click button Login to access your account</p>
            )}
            <button onClick={handleLoginToggle}>
                {isLoggedIn?"Logout":"Login"}
            </button>
        </div>

    );
}

export default Loginout;