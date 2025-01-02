import { useContext, useEffect, useState } from "react";
import UserForm from "../../components/UserForm/UserForm";
import { UserContext } from "../../context/UserContext";
import { useParams } from "react-router-dom";
import { User } from "../../types/User";

function EditView() {
  const [editUser, setEditUser] = useState<User | undefined>();
  const { users } = useContext(UserContext);

  const { id } = useParams();

  useEffect(() => {
    const user = users.find((user) => "" + user.id === id);
    console.log(user);
    setEditUser(user);
  }, [users, id]);

  function displayUserForm() {
    if (editUser) {
      return (
        <UserForm
          user={editUser}
          onSubmit={() => {
            () => {};
          }}
        />
      );
    } else {
      return "User not found";
    }
  }

  return displayUserForm();
}

export default EditView;
