import Greeting from "./components/Greetings/Greeting";
import Login from "./components/Logins/Login";
import Posts from "./components/Posts/Posts";
import Registration from "./components/Registrations/Registration";
import SubBanner from "./components/SubBanners/SubBanner";

function App() {
  return (
    <div>
      <Greeting />

      <Login />

      <Posts />

      <SubBanner />

      <Registration />

      {/* <ul>
        <li>Dark UI</li>
        <li>Responsive</li>
        <li>Modern</li>
      </ul> */}
    </div>
  );
}

export default App;
