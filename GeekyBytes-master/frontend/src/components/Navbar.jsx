import { Link, useLocation, useNavigate } from "react-router-dom";
import { CiSearch } from "react-icons/ci";
import { FaBars } from "react-icons/fa";
import { HiMiniSquares2X2 } from "react-icons/hi2";
import { useContext, useState } from "react";
import Menu from "./Menu";
import { Usercontext } from "../context/Usercontext";

const Navbar = () => {
  const navigator = useNavigate();
  const [menu, setmenu] = useState(false);
  const showmenu = () => {
    setmenu(!menu);
  };
  const path = useLocation().pathname;
  const { user } = useContext(Usercontext);
  return (
    <div className="sticky top-0 z-40 border-b border-white/10 bg-slate-950/75 text-white backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-10">
        <h1 className="text-xl font-extrabold">
          <Link className="flex items-center gap-3 text-2xl font-black tracking-tight text-white" to="/">
            <span className="flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/25 bg-cyan-400/10 text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
              <HiMiniSquares2X2 />
            </span>
            <span className="bg-gradient-to-r from-white via-cyan-100 to-emerald-200 bg-clip-text text-transparent">
              GeekyBytes
            </span>
          </Link>
        </h1>

        <div className="hidden items-center justify-center space-x-3 md:flex md:space-x-4">
          {path === "/" && (
            <div className="flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-4 text-slate-200">
              <p className="cursor-pointer text-lg text-cyan-300">
                <CiSearch />
              </p>
              <input
                onChange={(e) => {
                  navigator(e.target.value ? "?search=" + e.target.value : "/");
                }}
                className="w-48 bg-transparent text-sm text-white outline-none placeholder:text-slate-400"
                placeholder="Search alpha, ideas, builders"
                type="text"
              />
            </div>
          )}

          {user ? (
            <h3 className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-sm font-semibold text-emerald-200">
              <Link to="/Write">Write</Link>
            </h3>
          ) : (
            <h3 className="text-sm font-semibold text-slate-100 transition hover:text-cyan-300">
              <Link to="/login">Login</Link>
            </h3>
          )}
          {user ? (
            <div>
              <div
                onClick={showmenu}
                className="relative cursor-pointer rounded-full border border-white/10 bg-white/5 p-3 transition hover:border-cyan-400/25 hover:text-cyan-300"
              >
                <FaBars />
                {menu && <Menu />}
              </div>
            </div>
          ) : (
            <h3 className="rounded-full border border-cyan-400/25 bg-cyan-400/10 px-4 py-2 text-sm font-semibold text-cyan-200">
              <Link to="/register">Register</Link>
            </h3>
          )}
        </div>
        <div className="flex items-center justify-center space-x-2 text-lg md:hidden md:space-x-4">
          <div className="flex h-10 w-[70%] items-center space-x-0 rounded-2xl border border-white/10 bg-white/5 px-3">
            <p className="cursor-pointer text-cyan-300">
              <CiSearch />
            </p>
            <input
              onChange={(e) => {
                navigator(e.target.value ? "?search=" + e.target.value : "/");
              }}
              className="z-10 w-full bg-transparent px-3 text-sm text-white outline-none placeholder:text-slate-400"
              placeholder="Search posts"
              type="text"
            />
          </div>
          <div onClick={showmenu}>
            <div className="relative cursor-pointer rounded-full border border-white/10 bg-white/5 p-3">
              <FaBars />
              {menu && <Menu />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
