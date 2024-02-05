import { Outlet, Link } from "react-router-dom";
export default function RootLayout() {
  return (
    <>
      <header className="py-3">
        <nav className="level">
          <div className="level-item has-text-centered">
            <h3 className="title">Book a Trip</h3>
          </div>
          <p className="level-item has-text-centered">
            <Link to="" className="link is-info">
              Browse Packages
            </Link>{" "}
          </p>
          <p className="level-item has-text-centered">
            <Link to="/create" className="link is-info">
              Create a Package
            </Link>
          </p>
        </nav>
      </header>
      <main className="container is-fluid">
        <div className="container">
          <Outlet />
        </div>
      </main>
      <footer></footer>
    </>
  );
}
