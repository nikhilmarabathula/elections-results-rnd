import { Outlet } from "react-router-dom";
import Header from "./Header";
import styled from "styled-components";

const StyledAppLayout = styled.div``;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />

      <main>
        <Outlet />
      </main>
    </StyledAppLayout>
  );
}

export default AppLayout;
