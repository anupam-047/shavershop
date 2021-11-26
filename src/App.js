import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Routing from './components/Routing/Routing';
import AuthProvider from './Context/AuthProvider';
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
 toast.configure();
function App() {
  return (
    <div className="App">
      {/* //context-api */}
      <AuthProvider>
        <Routing />
      </AuthProvider>
    </div>
  );
}

export default App;
