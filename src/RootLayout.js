import { Outlet, Link } from "react-router-dom";
export default RootLayout = () => {
  return (
    <>
      <header>
        header <Link to="">Browse Packages</Link> |{" "}
        <Link to="/create">Create a Package</Link>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
};
