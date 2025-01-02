import { useContext } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { User } from "../../types/User";
import "./createView.scss";
import { UserContext } from "../../context/UserContext";

function CreateView() {
  const { usersDispatch } = useContext(UserContext);

  function handleSumbitNewUser(user: User) {
    usersDispatch({ type: "ADD_USER", user: user });
    alert("Added user");
  }

  return <UserForm user={null} onSubmit={handleSumbitNewUser} />;
}

export default CreateView;
