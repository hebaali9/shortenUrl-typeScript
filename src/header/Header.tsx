import { Link } from "react-router-dom";

export function Header() {
  const isLogedIn = true;

  return (
    <header>
      <nav className=" font-sans text-sm md:text-lg font-bold bg-blue-800 h-12 justify-center text-left flex flex-row mb-7 md:font-bold  md:h-16  md:px-10 md:py-8  md:mb-14">
        {isLogedIn ? (
          <>
            <Link className="flex flex-col justify-around" to="/">
              <span className="text-slate-100 px-4">URL-Shortner</span>
            </Link>
            <Link className="flex flex-col justify-around" to="/urls-list">
              <span className="text-slate-100 px-4">URLS</span>
            </Link>
          </>
        ) : (
          <Link className="flex flex-col justify-around" to="/signup">
            <span className="text-slate-100 px-4">signUp</span>
          </Link>
        )}
      </nav>
    </header>
  );
}
