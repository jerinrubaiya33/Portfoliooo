import dynamic from 'next/dynamic';
import Image from "next/image";
import bg from "../../../../public/background/about-background.png";
import { projectsData } from "../../data";

// Dynamically import ProjectList with no SSR
const ProjectList = dynamic(
  () => import("../../components/projects/ProjectList"),
  { 
    ssr: false,
    loading: () => (
      <p style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        margin: 0,
      }}>
        Loading projects...
      </p>
    )
  }
);

export default function Home() {
  return (
    <>
      <Image
        src={bg}
        alt="background-image"
        className="w-full h-full object-cover opacity-60 fixed z-0 top-0 left-0"
        priority
        quality={30}
        sizes="100vw"
        placeholder="blur"
      />
      <div className="relative z-10 w-full mt-24 md:mt-0">
        <ProjectList projects={projectsData} />
      </div>
    </>
  );
}