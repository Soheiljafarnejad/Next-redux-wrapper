import axios from "axios";
import { wrapper } from "../Redux/Store";
import { useSelector } from "react-redux";
import { getUserInfo } from "../Redux/Actions/UserActions";
const GetUserSsr = (props) => {
  const user = useSelector((store) => store.user.userSsr);

  console.log(user);

  return (
    <div>
      {user.length > 0 ? (
        user.map((item) => {
          return <h2 key={item.id}>{item.name}</h2>;
        })
      ) : (
        <h2>UserList is empty !</h2>
      )}
    </div>
  );
};

export default GetUserSsr;

export const getStaticProps = wrapper.getServerSideProps((store) => async (context) => {
  const { data } = await axios.get("https://jsonplaceholder.typicode.com/users");

  store.dispatch(getUserInfo(data));

  return {
    props: { user: data },
  };
});
