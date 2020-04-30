import React from "react";
import { useSelector } from "react-redux";
import Account from "../../components/Account/Account";
const AccountPage = () => {
  const account = useSelector((state) => console.log(state));

  return (
    <div>
      <Account />
    </div>
  );
};

export default AccountPage;
