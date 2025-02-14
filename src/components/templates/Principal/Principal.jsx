import styled from "styled-components";

const Principal = ({ children }) => {
  return (
    <Layout>
      <div>sideBar</div>
      <main className="main-content">{children}</main>
    </Layout>
  );
};

export default Principal;

const Layout = styled.div`
  display: flex;
  overflow: auto;
  height: 100vh;

  .main-content {
    flex: 1;
    padding: 20px;
    overflow: auto;
    height: 100vh;
  }
`;
