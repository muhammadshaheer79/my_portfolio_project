import SkillCard from "./SkillCard";

const skillItems = [
  {
    imgSrc: "/assets/icons/figma.svg",
    label: "Figma",
    desc: "Design tool",
  },
  {
    imgSrc: "/assets/icons/html5.svg",
    label: "HTML",
    desc: "Web Structure",
  },
  {
    imgSrc: "/assets/icons/css3.svg",
    label: "CSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/assets/icons/tailwindcss.svg",
    label: "TailwindCSS",
    desc: "User Interface",
  },
  {
    imgSrc: "/assets/icons/javascript.svg",
    label: "JavaScript",
    desc: "Interaction",
  },
  {
    imgSrc: "/assets/icons/typescript.svg",
    label: "TypeScript",
    desc: "Type-Safe Interaction",
  },
  {
    imgSrc: "/assets/icons/nodejs.svg",
    label: "NodeJS",
    desc: "Web Server",
  },
  {
    imgSrc: "/assets/icons/expressjs.svg",
    label: "ExpressJS",
    desc: "Node Framework",
  },
  {
    imgSrc: "/assets/icons/react.svg",
    label: "React",
    desc: "Library",
  },
  {
    imgSrc: "/assets/icons/nextjs.svg",
    label: "NextJS",
    desc: "Framework",
  },
  {
    imgSrc: "/assets/icons/react.svg",
    label: "React Native",
    desc: "Framework",
  },
  {
    imgSrc: "/assets/icons/react-native-expo.svg",
    label: "Expo SDK",
    desc: "Framework",
  },
  {
    imgSrc: "/assets/icons/flutter.svg",
    label: "Flutter",
    desc: "Framework",
  },
  {
    imgSrc: "/assets/icons/mongodb.svg",
    label: "MongoDB",
    desc: "Database",
  },
  {
    imgSrc: "/assets/icons/postgresql.svg",
    label: "PostgreSQL",
    desc: "Database",
  },
  {
    imgSrc: "/assets/icons/java.svg",
    label: "Java",
    desc: "Enterprise Structure",
  },
  {
    imgSrc: "/assets/icons/python.svg",
    label: "Python",
    desc: "Readable Automation",
  },
];

const Skill = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 className="headline-2 reveal-up">Essential Tools & Technologies I Use</h2>

        <p className="text-stone-300 mt-3 mb-8 max-w-[50ch] reveal-up">
          Discover the powerful tools and technologies I use to create exceptional, high-performing websites &
          applications.
        </p>

        <div className="grid gap-3 grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))]">
          {skillItems.map(({ imgSrc, label, desc }, key) => (
            <SkillCard key={key} imgSrc={imgSrc} label={label} desc={desc} classes="reveal-up" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skill;
