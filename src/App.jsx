import "./App.css";
import UserContextProvider from './context/UserContextProvider';


function App() {
  return(
    <UserContextProvider>
    <h1>Context API with 2 Projects</h1>
    </UserContextProvider>
  )
}

export default App;
