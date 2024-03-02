import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import Dashboard from "./pages/Dashboard";
import AppLayout from "./ui/AppLayout";
import GlobalStyles from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout />}>
            <Route index element={<Navigate replace to="dashboard" />} />
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="assembly" element={<Dashboard />} />
            <Route path="parliament" element={<Dashboard />} />
            <Route path="mandal" element={<Dashboard />} />
            <Route path="village" element={<Dashboard />} />
            <Route path="booth" element={<Dashboard />} />
            <Route path="localbody" element={<Dashboard />} />
          </Route>
          <Route path="*" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
