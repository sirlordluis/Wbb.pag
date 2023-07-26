const Contact = () => {
  return (
    <>
      <section id="contact">
        <div className="px-5 max-w-[1560px] mx-auto mt-20 py-10">
          {/* top */}
          <div className="">
            {/* header */}
            <div className=" mb-10">
              <div className=" text-white w-2/3 font-medium text-[32px] flex items-center gap-2">
                <div className="">
                  <span className="text-[#C778DD]">#</span>contact
                </div>
                <div className="line w-2/3 h-px bg-[#C778DD]"></div>
              </div>
            </div>
          </div>
          {/* bottom */}
          <div className=" flex items-start flex-wrap gap-10 justify-between">
            {/* left */}
            <div className="left w-full md:w-1/2">
              <p className=" text-[#ABB2BF]">
                I’m interested in freelance opportunities. However, if you have
                other request or question, don’t hesitate to contact me
              </p>
            </div>
            {/* right */}
            <div className=" mx-auto">
              {/* box */}
              <div className="border border-[#ABB2BF] p-4">
                <h2 className=" mb-4 text-white font-semibold">
                  Message me here
                </h2>
                {/* get in touch */}
                <div className="">
                  {/* links */}
                  <div className="flex gap-1 items-center">
                    <a href="https://github.com/sirlordluis">
                      <div className="text-2xl text-[#ABB2BF] fa-brands fa-github"></div>
                      <span className="text-[#ABB2BF]"> sirlordluis</span>
                    </a>
                  </div>
                  <div className="flex gap-1 items-center">
                    <a href="mailto:a3v51ykh@duck.com">
                      <div className="text-2xl text-[#ABB2BF] fa-solid fa-envelope"></div>
                      <span className="text-[#ABB2BF]"> a3v51ykh@duck.com</span>
                    </a>
                  </div>
                  <div className="flex gap-1 items-center">
                    <a href="https://www.linkedin.com/in/ingluiscortez/">
                      <div className="text-2xl text-[#ABB2BF] fa-brands fa-linkedin"></div>
                      <span className="text-[#ABB2BF]"> in/ingluiscortez</span>
                    </a>
                  </div>
                  <div className="flex gap-1 items-center">
                    <a href="https://t.me/sirlordluis">
                      <div className="text-2xl text-[#ABB2BF] fa-brands fa-telegram"></div>
                      <span className="text-[#ABB2BF]"> t.me/sirlordluis</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
