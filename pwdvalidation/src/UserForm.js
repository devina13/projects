import React, { useState } from "react";

function UserForm(props) {
  const [userData, setuserData] = useState({
    userName: "",
    password: "",
  });
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const emailValidation = () => {
    debugger
    if (userData.userName) {
      if (/^[A-Za-z]+$/.test(userData.userName)) {
        setemail("");
        return true;
      } else {
        setemail("*  is Requried Email");
      }
    } else {
      setemail("*Email is required");
    }
  };

  const passwordValidation = () => {
    if (userData.password) {
      if (
        /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(
          userData.password
        )
      ) {
        setpassword("");
        return true;
      } else {
        setpassword("*Invalid Password");
      }
    } else {
      setpassword("*Password is required");
    }
  };

  // function to update the state
  let updateUserData = (event) => {
    setuserData({
      ...userData,
      [event.target.name]: event.target.value,
    });
  };

  // do all the validation and then send the data
  const saveData = (e) => {
    emailValidation();
    passwordValidation();
    if (emailValidation() && passwordValidation()) {
      props.getDataFromUserForm(userData);
      localStorage.setItem("email", userData.userName)
      localStorage.setItem("password", userData.password)
      setuserData({...userData, 
        [e.target.name]: e.target.value})

      // setuserData({
      //   userName: "",
      //   password: "",
      // });
    }
  };

  let handleSubmit = (e) => {
    e.preventDefault();
  };

  // const savaData = (e) => {
  //   if(e.target.name === 'username') {
  //     setuserData({...userData, 
  //       [e.target.name]: e.target.value})
  //   } 
  //   if(e.target.name === 'password') {
  //     setuserData({...userData, 
  //       [e.target.name]: e.target.value})
  //   }

  //   console.log('save data', userData)
  // }

  return (
    <div className="container mt-5">
      <form className="table border " onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email Address
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="userName"
            value={userData.userName}
            onChange={(e) => {
              updateUserData(e);
            }}
          />
          {email && <div className="errorMsg text-danger">{email} </div>}
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            value={userData.password}
            onChange={(e) => {
              updateUserData(e);
            }}
          />
          {password && <div className="errorMsg text-danger">{password}</div>}
        </div>
        <button type="submit" className="btn btn-primary" onClick={saveData}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default UserForm;

// <div>
//   <form className="container border" onSubmit={handleSubmit}>
//     <div className="mb-3">
//       <label htmlFor="exampleInputEmail1" className="form-label">
//         Email address
//       </label>
//       <input
//         name="userName"
//         value={userData.userName}
//         type="text"
//         className="form-control"
//         id="exampleInputEmail1"
//         aria-describedby="emailHelp"
//         onChange={(event) => {
//           updateUserData(event);
//         }}
//       />
//     </div>
//     {email && <div className="errorMsg text-danger">{email} </div>}
//     <div className="mb-3">
//       <label htmlFor="exampleInputPassword1" className="form-label">
//         Password
//       </label>
//       <input
//         name="password"
//         value={userData.password}
//         type="text"
//         className="form-control"
//         id="exampleInputPassword1"
//         onChange={(event) => {
//           updateUserData(event);
//         }}
//       />
//     </div>
//     {password && <div className="errorMsg text-danger">{password}</div>}
//     <button type="submit" className="btn btn-primary" onClick={saveData}>
//       Login
//     </button>
//   </form>
// </div>
