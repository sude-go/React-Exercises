import avatar from './avatar.png'

function Logo(props) {
  const userPic = <img src={avatar}/>;
  return userPic;
}
function App() {
  return (
    <div >
      <h1>Hi</h1>
      <Logo/>
    </div>
  );
}

export default App;
