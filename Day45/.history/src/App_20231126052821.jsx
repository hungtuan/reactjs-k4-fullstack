import FormSubmit from "./components/FormSubmit/FormSubmit";
import ProgressBar from "./components/ProgressBar/ProgressBar";
import TableHistory from "./components/TableHistory/TableHistory";
import Toast from "./components/Toast/Toast";
import Welcome from "./components/Welcome/Welcome";
import { Provider } from "react-redux";
import store from "../src/redux/store";

import "react-toastify/dist/ReactToastify.css";
import ConfigPage from "./config/ConfigPage";
function App() {
  return (
    <Provider store={store}>
      <>
        <Toast />
        <ProgressBar />
        <div className="container mx-auto">
          <Welcome />
          <ConfigPage />
          <FormSubmit />
          <TableHistory />
        </div>
      </>
    </Provider>
  );
}
export default App;
