import FormSubmit from "./components/FormSubmit/FormSubmit";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import TableHistory from "./components/TableHistory/TableHistory";
import Toast from "./components/Toast/Toast";
import Welcome from "./components/Welcome/Welcome";
import { Config, config } from "/src/config/config.jsx";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <>
      <Toast />
      <ProgressBar />
      <div className="container mx-auto">
        <Welcome />
        <Config />
        <TableHistory />
        <FormSubmit />
      </div>
    </>
  );
}
export default App;
