import { Route, Routes } from "react-router-dom";

import { HomePage, LoginPage, Provider } from "@coccoc-hometest/web";

export function App() {
  return (
    <Provider>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
      </Routes>
    </Provider>
  );
}

export default App;
