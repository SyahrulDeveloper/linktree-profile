export default function Linktree() {
  // change the variable here
  const links = [
  {
    color: "bg-red-300",
    text: "Instagram",
    link: "https://www.instagram.com/syahrulramadhan.24?igsh=ZDF6aW5zZDRiNmJk",
  },
  {
    color: "bg-sky-300",
    text: "Youtube Channel",
    link: "https://www.youtube.com/channel/UCqbSthbe7Sz8A2A6ZH7NXbQ",
  },
  {
    color: "bg-pink-400",
    text: "Tiktok",
    link: "https://www.tiktok.com/@.syahrul0",
  },
  {
    color: "bg-blue-400",
    text: "Twitter",
    link: "https://x.com/SyahrulWho?t=bsm5ZN5jWCwSvyvO_PPVAg&s=09",
  },
  ];
   
  return (
  <div className="w-full h-screen bg-green-500 flex justify-center items-center">
    <div className="max-w-2xl mx-auto flex flex-col gap-5">
      <div className="h-48 w-48 mx-auto">
        <div className=" aspect-w-1 aspect-h-1">
          <img src="/syahrul.jpeg" 
          className="rounded-full object-cover object-center"/>
        </div>
      </div>
      <div className="text-center p-1">
        <h1 className="text-4xl font-bold">Muhammad Syahrul Ramadhan</h1>
        <p className="text-3xl mt-2">Indonesia, DKI Jakarta</p>
        <p className="text-2xl mt-2">"Web Developer And IT Enthusiast".</p>
      </div>
      <div className="flex flex-col gap-5">
        {links.map(({ text, color, link }, index) => {
          return (
            <a href={link} key={index} target="_blank">
              <div
                className={`w-80 sm:w-96 mx-auto ${color} text-center text-xl font-bold py-3 border-2 border-black shadow-custom hover:shadow-none transition-all hover:translate-x-1 hover:translate-y-1`}
              >
                {text}
              </div>
            </a>
          );
        })}
      </div>
    </div>
  </div>
  );
   
  }
   