const aboutItems = [
  {
    label: "Projects done",
    number: 10,
  },
  {
    label: "Years of education",
    number: 16,
  },
];

const About = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <div className="bg-stone-800/75 p-7 rounded-2xl md:p-12 reveal-up">
          <p className="text-stone-200/85 mb-4 md:mb-8 md:text-xl md:max-w-[60ch]">
            Welcome! I'm Syed Muhammad Shaheer, a Computer Science graduate aspiring to be a versatile Software Engineer
            with a focus on full-stack development, software testing, and automation. Eager to work on building
            high-performing, scalable applications and gain proficiency in solving complex problems. Constantly learning
            and trying to push my limits, I indulge in self-driven projects to stay in-sync with industry trends.
            Excited to grow, collaborate, and connect with brilliant minds—let’s build something amazing!
          </p>

          <div className="flex flex-wrap items-center gap-4 md:gap-7">
            {aboutItems.map(({ label, number }, key) => (
              <div key={key}>
                <div className="flex items-center md:mb-2">
                  <span className="text-2xl font-semibold md:text-4xl">{number}</span>
                  <span className="text-[#00FFFF] font-semibold md:text-3xl">+</span>
                </div>

                <p className="text-sm text-stone-400">{label}</p>
              </div>
            ))}

            <img
              src="/assets/icons/candidate.svg"
              alt="Logo"
              width={50}
              height={50}
              className="ml-auto md:w-[50px] md:h-[50px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
