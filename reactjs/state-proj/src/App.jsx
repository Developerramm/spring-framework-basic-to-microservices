import Counter from "./Counter";
import InputExample from "./InputExample";
import LikeButton from "./LikeButton";
import Student from "./Student";
import ToggleText from "./ToggleText";
import UserProfile from "./UserProfile";

const App = () => {
  return (
    <div className="container">
      <h3>This is react app </h3>
      <Counter />
      <ToggleText />

      <LikeButton />
      <UserProfile />

      <Student />
      <InputExample />
    </div>
  );
};

export default App;
