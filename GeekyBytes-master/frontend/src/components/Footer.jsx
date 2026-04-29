const Footer = () => {
  return (
    <>
      <div className="mt-16 border-t border-white/10 bg-slate-950/80 px-8 py-10 backdrop-blur-xl md:px-16">
        <div className="mx-auto flex max-w-7xl flex-col gap-8 md:flex-row md:justify-between">
          <div className="web3-card max-w-md rounded-[28px] p-6">
            <div className="relative z-10">
              <p className="signal-chip mb-4">GeekyBytes Hub</p>
              <h3 className="mb-3 text-2xl font-black text-white">
                Web3 stories, market signals, and builder notes.
              </h3>
              <p className="text-sm leading-7 text-slate-300">
                Designed to feel closer to a crypto dashboard than a traditional blog while keeping reading simple.
              </p>
            </div>
          </div>

          <div className="grid gap-8 text-sm md:grid-cols-3 md:gap-14">
            <div className="flex flex-col gap-3 text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Discover
              </p>
              <p>Featured Blogs</p>
              <p>Most Viewed</p>
              <p>Readers Choice</p>
            </div>

            <div className="flex flex-col gap-3 text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300">
                Community
              </p>
              <p>Forum</p>
              <p>Support</p>
              <p>Recent Posts</p>
            </div>

            <div className="flex flex-col gap-3 text-slate-200">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
                Protocol
              </p>
              <p>Privacy Policy</p>
              <p>About Us</p>
              <p>Terms & Conditions</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
      <p className="border-t border-white/10 bg-slate-950 pb-6 pt-4 text-center text-sm text-slate-400">
        All rights reserved @Akhil 2024
      </p>
    </>
  );
};

export default Footer;
