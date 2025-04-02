import { Outlet, Link } from "@remix-run/react";

export default function Layout() {
  return (
    <div className="text-white"> 
      <header>
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/dashboard">Dashboard</Link></li>
          </ul>
        </nav>
      </header>

      <main>
        <Outlet /> 
      </main>

      <footer>
        <p>© 2025 Rentals Inc.</p>
      </footer>
    </div>
  );
}
