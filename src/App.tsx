import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import "react-nice-scroll/dist/styles.css";
import { store } from "./context/store/store";
import AppRoutes from "./routes/AppRoutes";

import { ToastContainer } from "react-toastify";
import { useTranslation } from "react-i18next";
import LayoutProvider from "./context/layout/Layout.proivder";
import Layout from "./layout/v2/Layout";
const App = () => {
  const { t } = useTranslation();
  return (
    <Provider store={store}>
      <ThemeProvider>
        <LayoutProvider>
          <Layout>
            <>
              <ToastContainer
                style={{ zIndex: "100000" }}
                position="top-center"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={t("lang").toString() != "english"}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
              />
              <AppRoutes />
            </>
          </Layout>
        </LayoutProvider>
      </ThemeProvider>
    </Provider>
  );
};

export default App;
