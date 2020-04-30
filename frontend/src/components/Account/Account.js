import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { postUserAction } from "../../redux/actions/userAction";

const Account = () => {
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const dispatch = useDispatch();

  const onInputUserName = (evt) => {
    setUserName(evt.target.value);
  };
  const onInputPassword = (evt) => {
    setUserPassword(evt.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postUserAction(userName, userPassword));
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <input
          values={userName}
          onChange={onInputUserName}
          // handleSubmit={handleSubmit}
        />
        <input
          values={userPassword}
          type="password"
          onChange={onInputPassword}
          // handleSubmit={handleSubmit}
        />
        <button>Change Your Account</button>
      </form>
    </div>
  );
};

export default Account;
