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
    if (userName && userPassword) {
      dispatch(postUserAction(userName, userPassword));
    } else {
      alert("make sure to give a new username and password!");
    }
  };
  return (
    <div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label className="username-input">
          New Username <input values={userName} onChange={onInputUserName} />
        </label>

        <label className="password-input">
          New Password{" "}
          <input
            values={userPassword}
            type="password"
            onChange={onInputPassword}
          />
        </label>
        <button onClick={handleSubmit}>Save New Settings</button>
      </form>
    </div>
  );
};

export default Account;
