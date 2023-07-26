const Footer = () => {
  return (
    <>
      {/* line */}
      <div className="w-full h-px bg-[#ABB2BF] mt-20 mb-8"></div>
      {/* footer */}
      <div data-aos="fade-up" className="px-5 max-w-[1560px] mx-auto">
        {/* top */}
        <div className="flex justify-between gap-y-10 flex-wrap">
          {/* left */}
          <div className="mx-auto md:mx-0">
            <div className=" flex items-center gap-8 mb-3 ">
              {/* logo */}
              <div className=" flex gap-2 items-center text-2xl text-white font-bold">
                <img src="https://i.imgur.com/ptlDXTs.png" alt="" />
                <span>sirlordluis</span>
              </div>
              {/* email */}
              <span className="text-[#ABB2BF]">a3v51ykh@duck.com</span>
            </div>
            {/* disc */}
            <div className="text-[#ffffff]">
              <p>
                Computer engineer based in México. Hosted on Github Pages, which
                is awesome!
              </p>
            </div>
          </div>
          {/* right */}
          <div className=" mx-auto md:mx-0">
            {/* title */}
            <h2 className=" text-white text-2xl font-medium mb-3">Media</h2>
            {/* media */}
            <div className="flex items-center gap-2">
              <a href="mailto:a3v51ykh@duck.com">
                <div className="text-2xl text-[#ABB2BF] fa-solid fa-envelope"></div>
              </a>
              <a href="https://www.linkedin.com/in/ingluiscortez">
                <div className="text-2xl text-[#ABB2BF] fa-brands fa-linkedin"></div>
              </a>
              <a href="https://github.com/sirlordluis">
                <div className="text-2xl text-[#ABB2BF] fa-brands fa-github"></div>
              </a>
            </div>
          </div>
        </div>
        {/* bottom */}
        <div className="text-center text-[#ABB2BF] pb-8 mt-12">
          © Copyright 20xx. Made by sirlordluis
        </div>
      </div>
    </>
  );
};

export default Footer;
