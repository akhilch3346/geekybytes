const HomePosts = ({ post }) => {
  return (
    <article className="web3-card group mt-8 w-full rounded-[30px] p-4 md:p-5">
      <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-start">
        <div className="aspect-square w-full overflow-hidden rounded-[24px] border border-white/10 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.12),rgba(15,23,42,0.92))] p-3 md:w-[240px] md:min-w-[240px]">
          <img
            src={post.photo}
            alt={post.title}
            className="h-full w-full rounded-[18px] object-contain transition duration-500 group-hover:scale-105"
          />
        </div>
        <div className="flex w-full flex-col">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="signal-chip">On-chain Read</span>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-medium text-slate-300">
              Updated {new Date(post.updatedAt).toString().slice(0, 15)}
            </span>
          </div>
          <h1 className="mb-2 text-2xl font-black tracking-tight text-white md:text-3xl">
            {post.title}
          </h1>
          <div className="mb-4 flex flex-col justify-between gap-3 text-sm font-semibold text-slate-400 sm:flex-row sm:items-center">
            <p className="text-cyan-300">@{post.username}</p>
            <div className="flex flex-wrap gap-3">
              <p>{new Date(post.updatedAt).toString().slice(16, 24)}</p>
              <p className="text-emerald-300">Signal strength: Fresh</p>
            </div>
          </div>
          <p className="text-sm leading-7 text-slate-300 md:text-base">
            {post.desc.slice(0, 240)}
            <span className="ml-1 font-semibold text-cyan-300">Read more</span>
          </p>
        </div>
      </div>
    </article>
  );
};
export default HomePosts;
