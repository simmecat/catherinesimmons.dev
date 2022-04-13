import Link from "next/link";
import { useRouter } from "next/router";

import { Button } from "@nextui-org/react";

export default function NavBar() {
  const router = useRouter();
  const aboutMeRoute = "/";
  const projectsRoute = "/projects";
  const resumeRoute = "/resume";

  function isActiveRoute(href: string): boolean {
    return router.asPath === href;
  }

  return (
    <nav className="flex flex-row gap-2 mb-8">
      <Link passHref href={aboutMeRoute}>
        <Button
          color="gradient"
          auto
          rounded
          animated={false}
          bordered={!isActiveRoute(aboutMeRoute)}
        >
          <a>About Me</a>
        </Button>
      </Link>
      <Link passHref href={projectsRoute}>
        <Button
          color="gradient"
          auto
          rounded
          animated={false}
          bordered={!isActiveRoute(projectsRoute)}
        >
          <a>Projects</a>
        </Button>
      </Link>
      <Link passHref href={resumeRoute}>
        <Button
          color="gradient"
          auto
          rounded
          animated={false}
          bordered={!isActiveRoute(resumeRoute)}
        >
          <a>Resume</a>
        </Button>
      </Link>
    </nav>
  );
}
