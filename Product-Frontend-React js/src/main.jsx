import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { baseTheme } from "@chakra-ui/theme";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { Toaster } from "react-hot-toast";
import { Provider } from "react-redux";
import { store } from "./store/Store.js";
const client = new QueryClient();
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Provider store={store}>
    <QueryClientProvider client={client}>
    <ChakraProvider theme={baseTheme}>
    <App />
    <Toaster />
    </ChakraProvider>
    </QueryClientProvider>
    </Provider>
    </BrowserRouter>
  </StrictMode>
);
