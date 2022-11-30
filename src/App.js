import Greeting from "./components/Greetings/Greeting";
import Login from "./components/Logins/Login";
import Posts from "./components/Posts/Posts";

function App() {
  return (
    <div>
      <Greeting />

      <Login />

      <Posts />

      {/* <ul>
        <li>Dark UI</li>
        <li>Responsive</li>
        <li>Modern</li>
      </ul> */}
    </div>
  );
}

export default App;
