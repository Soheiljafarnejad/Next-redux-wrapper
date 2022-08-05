import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUserInfo } from "../Redux/Actions/UserActions";

const AddUserClient = () => {
  const [value, setValue] = useState("");
  const user = useSelector((store) => store.user.userClient);
  const dispatch = useDispatch();

  return (
    <div>
      <div>
        <input
          style={{ marginRight: "0.5rem" }}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button disabled={!value} onClick={() => dispatch(addUserInfo(value))}>
          Add user
        </button>
      </div>

      {user.length > 0 ? (
        user.map((item, index) => {
          return <h2 key={index}>{item}</h2>;
        })
      ) : (
        <h2>userList is empty !</h2>
      )}
    </div>
  );
};

export default AddUserClient;
