import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();
  const aboutRoute = "/";
  const portfolioRoute = "/portfolio";

  function isActiveRoute(href: string): boolean {
    if (href === aboutRoute) {
      return router.asPath === aboutRoute;
    }

    return router.asPath.includes(href);
  }

  function getColor(href: string): string {
    return isActiveRoute(href) ? "text-zinc-400" : "";
  }

  return (
    <nav className="flex flex-row gap-12 mb-8">
      <Link href={aboutRoute}>
        <a className={`font-bold text-xl ${getColor(aboutRoute)}`}>About</a>
      </Link>
      <Link href={portfolioRoute}>
        <a className={`font-bold text-xl ${getColor(portfolioRoute)}`}>
          Portfolio
        </a>
      </Link>
      <Link href="../pdfs/resume.pdf">
        <a className="font-bold text-xl" target="_blank" rel="noreferrer">
          Resume
        </a>
      </Link>
    </nav>
  );
}
