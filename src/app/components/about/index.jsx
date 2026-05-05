import React from "react";
import ItemLayout from "./itemLayout";
const SkillCategory = ({ title, icons, borderColor, span }) => {
  return (
    <ItemLayout className={span} borderColor={borderColor}>
      <div className="w-full text-center">
        <h3 className="text-sm md:text-base lg:text-lg mb-2 md:mb-3 lg:mb-4 font-semibold tracking-[0.2em]">
          {title}
        </h3>
        <div className="flex flex-wrap justify-center gap-2">
          <img
            className="h-8 md:h-10 lg:h-12 w-auto"
            src={`https://skillicons.dev/icons?i=${icons.join(",")}`}
            loading="lazy"
            alt={title}
          />
        </div>
      </div>
    </ItemLayout>
  );
};

const AboutDetails = () => {
  const skillCategories = [
    {
      title: "FRONTEND",
      icons: ["html", "css", "js", "react", "nextjs", "tailwind"],
      borderColor: "border-[#6a4c93]", // Purple
      span: "col-span-7 sm:col-span-6 lg:col-span-6", // Mobile: 2, Desktop: 6
    },
    {
      title: "BACKEND",
      icons: ["nodejs", "express", "cs", "firebase"],
      borderColor: "border-[#00bcd4]", // Cyan
      span: "col-span-5 sm:col-span-6 lg:col-span-3", // Mobile: 2, Desktop: 3
    },
    {
      title: "LANGUAGES",
      icons: ["js", "kotlin", "cs"],
      borderColor: "border-[#f44336]", // Red
      span: "col-span-6 sm:col-span-6 lg:col-span-3", // Mobile: 2, Desktop: 3
    },
    {
      title: "FRAMEWORKS",
      icons: ["react", "nextjs", "flutter", "express"],
      borderColor: "border-[#e91e63]", // Rose
      span: "col-span-6 sm:col-span-6 lg:col-span-4", // Mobile: 2, Desktop: 4
    },
    {
      title: "LIBRARIES",
      icons: ["threejs", "jquery", "tailwind", "bootstrap"],
      borderColor: "border-[#ff9800]", // Orange
      span: "col-span-7 sm:col-span-6 lg:col-span-5", // Mobile: 2, Desktop: 5
    },
    {
      title: "DATABASES",
      icons: ["mongodb", "mysql", "firebase"],
      borderColor: "border-[#6a4c93]", // Purple
      span: "col-span-5 sm:col-span-6 lg:col-span-3", // Mobile: 6, Desktop: 3
    },
    {
      title: "DEV TOOLS",
      icons: ["git", "github", "npm", "vite"],
      borderColor: "border-[#f44336]", // Red
      span: "col-span-6 sm:col-span-6 lg:col-span-5", // Mobile: 2, Desktop: 5
    },
    {
      title: "SERVICES",
      icons: ["vercel", "cloudflare", "wordpress"],
      borderColor: "border-[#e91e63]",
      span: "col-span-6 sm:col-span-12 lg:col-span-3", // Mobile: 2, Desktop: 3
    },
    {
      title: "IDEs & OS",
      icons: ["vscode", "visualstudio", "androidstudio", "linux"],
      borderColor: "border-[#b2ff00]", // Lime
      span: "col-span-12 sm:col-span-12 lg:col-span-4", // Mobile: 2, Desktop: 4
    },
  ];
  return (
    <section className="py-6 md:py-8 lg:py-10 w-full relative font-supermercado overflow-x-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[100vw]">
        <div className="grid grid-cols-12 gap-4 w-full">
          {/* Main content */}
          <ItemLayout
            className="col-span-12 lg:col-span-8 lg:row-span-2"
            borderColor="border-purple-600"
          >
            <div className="w-full">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-left w-full tracking-wider font-semibold uppercase">
                Architect of Enchantment
              </h1>
              <p className="font-medium tracking-wider uppercase text-xs sm:text-sm md:text-base mt-3">
                My journey in web development is powered by mystical tools and
                languages, with JavaScript at the core of my enchantments. I
                wield frameworks like React.js and Next.js to craft seamless
                portals (websites) that connect realms (users) across the
                digital universe. The ancient arts of the Jamstack help me build
                fast, secure, and dynamic experiences, while my design skills
                ensure every creation is both functional and visually
                captivating. Join me as I explore new spells and technologies to
                shape the future of the web.
              </p>
            </div>
          </ItemLayout>

          {/* Small boxes */}
          <ItemLayout
            className="col-span-6 md:col-span-4"
            borderColor="border-cyan-500"
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider">
              2+
              <sub className="font-semibold text-xs sm:text-sm md:text-base block">
                YEARS OF PRACTICES
              </sub>
            </p>
          </ItemLayout>

          <ItemLayout
            className="col-span-6 md:col-span-4"
            borderColor="border-[#b2ff00]"
          >
            <p className="font-semibold w-full text-left text-2xl sm:text-3xl md:text-4xl lg:text-5xl tracking-wider">
              <sub className="font-semibold text-xs sm:text-sm md:text-base block">
                DESIGN IN
              </sub>{" "}
              MOTION
            </p>
          </ItemLayout>

          {/* GitHub stats */}
          <ItemLayout
            className="col-span-12 md:col-span-4 p-0"
            borderColor="border-orange-500"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/top-langs?username=jerinrubaiya33&theme=dark&hide_border=true&bg_color=000000&icon_color=ffffff&text_bold=false"
              loading="lazy"
              alt="Top Languages"
            />
          </ItemLayout>

          <ItemLayout
            className="col-span-12 lg:col-span-8 p-0"
            borderColor="border-red-500"
          >
            <img
              className="w-full h-auto max-h-[180px] md:max-h-[220px] lg:max-h-none"
              src="https://github-readme-stats.vercel.app/api?username=jerinrubaiya33&theme=dark&hide_border=true&bg_color=000000&icon_color=ffffff&text_bold=false"
              loading="lazy"
              alt="GitHub Stats"
            />
          </ItemLayout>

          {/* Technologies Title */}
          <div className="col-span-full py-6 md:py-8 lg:py-10 text-center">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold capitalize tracking-wider">
              TECHNOLOGIES
            </h1>
          </div>

          {/* Skill Categories */}
          {skillCategories.map((category, index) => (
            <SkillCategory
              key={index}
              title={category.title}
              icons={category.icons}
              borderColor={category.borderColor}
              span={category.span}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDetails;
