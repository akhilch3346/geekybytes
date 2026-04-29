import axios from "axios";
import { Link } from "react-router-dom";
import HomePosts from "../components/HomePosts";
import Navbar from "../components/Navbar";
import { url } from "../../url";
import Loader from "../components/Loader";
import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Usercontext } from "../context/Usercontext";

const Home = () => {
  const { search } = useLocation();
  const { user } = useContext(Usercontext);
  const [noresult, setnoresult] = useState(false);
  const [loader, setloader] = useState(false);
  const [post, setpost] = useState([]);

  const fetchpost = async () => {
    try {
      setloader(true);
      const res = await axios.get(url + "/api/posts" + search);
      setpost(res.data);
      setloader(false);
      if (res.data.length == 0) {
        setnoresult(true);
      } else {
        setnoresult(false);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchpost();
  }, [search]);

  const spotlightPosts = post.slice(0, 3);

  return (
    <>
      <Navbar />
      <div className="mx-auto min-h-[80vh] max-w-7xl px-5 pb-16 pt-8 md:px-10">
        <section className="web3-shell rounded-[36px] px-6 py-8 md:px-10 md:py-12">
          <div className="relative z-10 grid gap-10 lg:grid-cols-[1.3fr_0.7fr]">
            <div>
              <span className="signal-chip mb-4">Web3 Media Layer</span>
              <h2 className="max-w-3xl text-4xl font-black leading-tight text-white md:text-6xl">
                Crypto-native stories with a cleaner signal-to-noise ratio.
              </h2>
              <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-300 md:text-base">
                GeekyBytes now leans into a web3 dashboard aesthetic with sharper contrast, subtle grid patterns,
                and story cards that feel more like alpha panels than plain blog tiles.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="web3-card min-w-[170px] rounded-[24px] px-5 py-4">
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Live Posts</p>
                    <p className="mt-2 text-3xl font-black text-white">{post.length}</p>
                  </div>
                </div>
                <div className="web3-card min-w-[170px] rounded-[24px] px-5 py-4">
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Query State</p>
                    <p className="mt-2 text-lg font-bold text-cyan-300">
                      {search ? "Filtered Feed" : "Open Discovery"}
                    </p>
                  </div>
                </div>
                <div className="web3-card min-w-[170px] rounded-[24px] px-5 py-4">
                  <div className="relative z-10">
                    <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Access</p>
                    <p className="mt-2 text-lg font-bold text-emerald-300">
                      {user ? "Wallet Ready" : "Guest Mode"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="hero-orb absolute -right-10 top-0 h-52 w-52 rounded-full" />
              <div className="web3-card h-full rounded-[32px] p-6">
                <div className="relative z-10 flex h-full flex-col justify-between gap-6">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">
                      Signal Board
                    </p>
                    <h3 className="mt-3 text-2xl font-black text-white">Built for readers tracking ideas fast.</h3>
                  </div>
                  <div className="space-y-3">
                    {["Patterned cards", "High-contrast content", "Web3-inspired visual system"].map((item) => (
                      <div
                        key={item}
                        className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200"
                      >
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {!!spotlightPosts.length && (
          <section className="mt-10 grid gap-5 md:grid-cols-3">
            {spotlightPosts.map((featuredPost, index) => (
              <div key={featuredPost._id} className="web3-card rounded-[28px] p-5">
                <div className="relative z-10">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                    {index === 0 ? "Top Signal" : index === 1 ? "Fresh Drop" : "Community Pick"}
                  </p>
                  <h3 className="mt-4 line-clamp-2 text-xl font-black text-white">{featuredPost.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-300">
                    {featuredPost.desc.slice(0, 110)}...
                  </p>
                </div>
              </div>
            ))}
          </section>
        )}

        <section className="mt-12">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-cyan-300">Content Feed</p>
              <h3 className="mt-2 text-3xl font-black text-white">Latest blocks of insight</h3>
            </div>
          </div>

        {loader ? (
          <div className="flex h-[50vh] items-center justify-center">
            <Loader />
          </div>
        ) : !noresult ? (
          post.map((post, i) => {
            return (
              <Link key={post._id} to={user ? `/posts/post/${post._id}` : "/login"}>
                <HomePosts key={post._id} post={post} />
              </Link>
            );
          })
        ) : (
          <div className="web3-card mt-16 rounded-[28px] p-10 text-center">
            <h3 className="relative z-10 text-lg font-bold text-white">No results found.</h3>
            <p className="relative z-10 mt-3 text-sm text-slate-400">
              Try another keyword to surface a different part of the feed.
            </p>
          </div>
        )}
        </section>
      </div>
    </>
  );
};
export default Home;
