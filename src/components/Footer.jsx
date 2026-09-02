import { ButtonPrimary } from "./Button";

const sitemap = [
  {
    label: "Home",
    href: "#home",
  },
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Reviews",
    href: "#reviews",
  },
  {
    label: "Contact me",
    href: "#contact",
  },
];

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/muhammadshaheer79",
  },
  {
    label: "LinkedIn",
    href: "",
  },
  {
    label: "X",
    href: "",
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/sm_shaheer9",
  },
  {
    label: "CodePen",
    href: "",
  },
];

const Footer = () => {
  return (
    <footer className="section">
      <div className="container">
        <div className="lg:grid lg:grid-cols-2">
          <div className="mb-10">
            <h2 className="headline-1 mb-8 lg:max-w-[12ch] reveal-up">Let&apos;s work together today!</h2>

            <ButtonPrimary
              href="mailto:shaheer.hasan99@gmail.com"
              label="Collab Now"
              icon="chevron_right"
              classes="reveal-up"
            />
          </div>

          <div className="grid grid-cols-2 gap-4 lg:pl-20">
            <div>
              <p className="mb-2 reveal-up">Sitemap</p>

              <ul>
                {sitemap.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      className="block text-sm text-stone-400 py-1 transition-colors hover:text-stone-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="mb-2 reveal-up">Socials</p>

              <ul>
                {socials.map(({ label, href }, key) => (
                  <li key={key}>
                    <a
                      href={href}
                      target="_blank"
                      className="block text-sm text-stone-400 py-1 transition-colors hover:text-stone-200 reveal-up"
                    >
                      {label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-between pt-10 mb-8">
          <a href="/" className="logo reveal-up">
            <img src="assets/icons/coding-hand.svg" width={40} height={40} alt="Logo" />
          </a>

          <p className="text-stone-500 text-sm reveal-up">
            &copy; 2026 <span className="text-stone-200">&nbsp;&nbsp;Syed Muhammad Shaheer</span>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
