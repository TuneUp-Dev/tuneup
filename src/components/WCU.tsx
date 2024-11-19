import Verified from "../assets/icons/Verified.svg";

const WCU = () => {
  return (
    <>
      <div className="w-full px-28">
        <span className="bg-slate-100 rounded-lg px-3 py-2 text-blue-500 text-[13px] font-semibold uppercase">
          Why choose us
        </span>
        <p className="text-[52px] w-[700px] leading-[60px] mt-4 inter-bold">
          Why can you choose us to TuneUp yourself
        </p>
        <div className="mt-14 w-full h-[200px] flex justify-between items-center gap-7">
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-between items-start p-5 gap-x-5">
            <img className="w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[20px]">Content moderation</h1>
              <p className="mt-2 text-slate-700">
                We use a combination of human and AI moderation to safeguard our
                users. We use a combination of human and AI moderation to
                safeguard our users.
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-between items-start p-5 gap-x-5">
            <img className="w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[20px]">Content moderation</h1>
              <p className="mt-2 text-slate-700">
                We use a combination of human and AI moderation to safeguard our
                users. We use a combination of human and AI moderation to
                safeguard our users.
              </p>
            </div>
          </div>
          <div className="w-full h-full bg-blue-50 rounded-2xl flex justify-between items-start p-5 gap-x-5">
            <img className="w-9" src={Verified} alt="" />
            <div className="">
              <h1 className="font-semibold text-[20px]">Content moderation</h1>
              <p className="mt-2 text-slate-700">
                We use a combination of human and AI moderation to safeguard our
                users. We use a combination of human and AI moderation to
                safeguard our users.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default WCU;
