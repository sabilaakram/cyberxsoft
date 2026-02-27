import Link from "next/link";
import { Logo } from "@/components/Logo";
import { FaInstagram } from "react-icons/fa6";
import { LuFacebook, LuLinkedin, LuYoutube } from "react-icons/lu";

interface NavItemProps {
  href: string;
  title: string;
  subItems?: {
    title: string;
    href: string;
  }[];
}

const navItems: NavItemProps[] = [
  { title: "Who we are", href: "/about" },
  { title: "What we think", href: "/insights" },
  { title: "Get in touch", href: "/contact" },
  { title: "Request a quote", href: "/get-a-quote" },
];

const socialLinks = [
  {
    icon: <LuFacebook />,
    href: "https://www.facebook.com/profile.php?id=61559667573420",
  },
  { icon: <FaInstagram />, href: "https://www.instagram.com/cyberxsoft.dev/" },
  { icon: <LuLinkedin />, href: "https://www.linkedin.com/company/big0-dev/" },
  {
    icon: <LuYoutube />,
    href: "https://www.youtube.com/channel/UCdFdgYjRGC53PPmE2XTlPhw",
  },
];

export function Footer() {
  return (
    <footer className="bg-custom-purple-600 text-white py-8 space-y-8">
      <div className="container px-4 sm:px-8 md:px-20 2xl:px-0 mx-auto flex justify-between gap-6 sm:gap-8 flex-col md:flex-row">
        <div className="space-y-4">
          <Logo />

          <div className="max-w-xs pl-1">
            <h5 className="text-lg font-bold">Office</h5>
            <Link
              className="hover:text-custom-purple-300 transition-all duration-200"
              href="https://maps.app.goo.gl/MvLL7BbYZG1expJVA"
              target="_blank"
            >
              First Floor, Plaza #54, Sector F, DHA Phase 1, Islamabad.
            </Link>
          </div>
          <div className="pl-1">
            <h5 className="text-lg font-bold">Contact</h5>
            <div className="flex flex-col items-start">
              <Link
                className="hover:text-custom-purple-300 transition-all duration-200"
                href="tel:+92-312-978-6297"
              >
                +92-312-978-6297
              </Link>
              <Link
                className="hover:text-custom-purple-300 transition-all duration-200"
                href="mailto:info@cyberxsoft.com"
              >
                info@cyberxsoft.com
              </Link>
            </div>
          </div>
        </div>

        <div className="md:text-center space-y-4 md:self-center">
          <h5 className="text-lg font-bold">Useful Links</h5>

          <ul className="grid sm:grid-cols-2 gap-x-20 gap-y-4 text-left">
            {navItems.map((navLink, index) => (
              <li
                key={index}
                className="text-white hover:text-custom-purple-300 focus-within:text-custom-purple-300 transition-all duration-300 capitalize"
              >
                <Link href={navLink.href}>{navLink.title}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="space-y-4 sm:space-y-8 md:self-center">
          <div className="space-y-1">
            <h5 className="text-lg font-bold">Working Hours </h5>

            <p>Monday to Friday: 9am - 8pm</p>
          </div>
          {/* <div className="space-y-1">
            <h5 className="text-lg font-bold">Social Media</h5>

            <ul className="flex items-center gap-4 flex-row">
              {socialLinks.map((link, index) => (
                <li
                  key={index}
                  className="text-lg text-white hover:text-custom-purple-300 focus-within:text-custom-purple-300 capitalize transition-all duration-300"
                >
                  <Link href={link.href} target="_blank">
                    {link.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div> */}
        </div>
      </div>

      <ul className="flex items-center justify-center gap-4 flex-wrap md:flex-nowrap">
        <li className="text-white pointer-events-none">
          © 2026 CyberXSoft. All rights reserved.
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/policy">Privacy Policy</Link>
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/terms">Terms of Service</Link>
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/">Cookies Settings</Link>
        </li>
        <li className="text-gray-400 hover:text-white focus-within:text-white">
          <Link href="/sitemap.xml">Sitemap</Link>
        </li>
      </ul>
    </footer>
  );
}
