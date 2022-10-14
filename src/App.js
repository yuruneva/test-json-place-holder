import axios from "axios";
import "./styles.css";

export default function App() {
  const onClickUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };

  const onClickUsers1 = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users/1")
      .then((result) => {
        console.log(result.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="App">
      <button onClick={onClickUsers}>users</button>
      <button onClick={onClickUsers1}>id=1のusers</button>
    </div>
  );
}
