import { useEffect, useState } from "react";
import Header from "./components/Header";
import ModalForm from "./components/ModalForm";
import axios from "axios";
import UserList from "./components/UserList";
import DeletedUsrAlert from "./DeletedUsrAlert";
import CreatedUsrAlert from "./components/CreatedUsrAlert";
import UpdatedUsrAlert from "./components/UpdatedUsrAlert";

// primero estados luego hooks despues funciones y al final efectos

//! ============================ !//
//! ********** LOGICA ********** !//
//! ============================ !//
const baseUrl = "https://users-crud.academlo.tech";
const voidForm = {
  email: "",
  password: "",
  first_name: "",
  last_name: "",
  birthday: "",
  image_url: "",
};

function App() {
  //TODO ********* Estados ********* //
  const [isUserToUpdate, setIsUserToUpdate] = useState();
  const [isModalShown, setIsModalShown] = useState(false);
  const [isUserCreated, setIsUserCreated] = useState(false);
  const [isUserUpdated, setIsUserUpdated] = useState(false);
  const [isUserDeleted, setIsUserDeleted] = useState(false)
  const [users, setUsers] = useState([]);

  //TODO ******** Funciones ******** //
  const modalToggle = () => setIsModalShown(!isModalShown);

  const restoreModalDefault = (reset) => {
    modalToggle();
    reset(voidForm);
    setIsUserToUpdate(false);
  };

  //* ========== CRUD ========== //

  //? Create
  const createUser = (user, reset) => {
    const url = `${baseUrl}/users/`;

    axios
      .post(url, user)
      .then(({}) => {
        getAllUsers();
        restoreModalDefault(reset);
        setIsUserCreated(`${user.first_name} ${user.last_name}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //? Read
  const getAllUsers = () => {
    const url = `${baseUrl}/users/`;

    axios
      .get(url)
      .then(({ data }) => {
        setUsers(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //? Update
  const updateUser = (user, reset) => {
    const id = isUserToUpdate.id;
    const url = `${baseUrl}/users/${id}/`;

    axios
      .patch(url, user)
      .then(({ data }) => {
        getAllUsers();
        console.log(data);
        restoreModalDefault(reset);
        setIsUserUpdated(`${user.first_name} ${user.last_name}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //? Delete
  const deleteUser = (user) => {
    const url = `${baseUrl}/users/${user.id}/`;

    axios
      .delete(url)
      .then(({ data }) => {
        console.log(data);
        getAllUsers();
        setIsUserDeleted(`${user.first_name} ${user.last_name}`)
      })
      .catch((err) => {
        console.log(err);
      });
  };

  //TODO ********* Efectos ********* //
  useEffect(() => {
    getAllUsers();
  }, []);

  //! ============================ !//
  //! *********** HTML *********** !//
  //! ============================ !//
  return (
    <main className='font-["Roboto"] overflow-x-hidden max-w-screen-2xl mx-auto'>
      <Header modalToggle={modalToggle} />

      <UserList
        users={users}
        deleteUser={deleteUser}
        modalToggle={modalToggle}
        setIsUserToUpdate={setIsUserToUpdate}
      />

      <ModalForm
        createUser={createUser}
        updateUser={updateUser}
        restoreModalDefault={restoreModalDefault}
        isModalShown={isModalShown}
        isUserToUpdate={isUserToUpdate}
      />

      <DeletedUsrAlert
        isUserDeleted={isUserDeleted}
        setIsUserDeleted={setIsUserDeleted}
      />

      <CreatedUsrAlert
        isUserCreated={isUserCreated}
        setIsUserCreated={setIsUserCreated}
      />

      <UpdatedUsrAlert
        isUserUpdated={isUserUpdated}
        setIsUserUpdated={setIsUserUpdated}
      />

    </main>
  );
}

export default App;
