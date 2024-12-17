import Link from "next/link";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FcPlanner } from "react-icons/fc";

const Footer = () => {
  return (
    <div className="bg-gray-100 dark:bg-gray-800 text-black dark:text-white">
      <footer className="footer p-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Branding Section */}
        <aside className="flex flex-col items-start gap-2">
          <FcPlanner className="text-3xl md:text-6xl" />
          <p className="text-sm md:text-base">
            SBN-web-dev consoles
            <br />
            Providing reliable Tech and Planning services since 1997
          </p>
        </aside>

        {/* Social Links Section */}
        <nav className="flex flex-col items-start">
          <h6 className="footer-title text-lg font-semibold">Follow Us</h6>
          <div className="flex gap-4 mt-2">
            <Link href="/" className="cursor-pointer">
              <FaXTwitter className="text-2xl md:text-3xl hover:text-blue-500 dark:hover:text-blue-400 transition-colors" />
            </Link>
            <Link href="/" className="cursor-pointer">
              <FaGithub className="text-2xl md:text-3xl hover:text-blue-700 dark:hover:text-blue-500 transition-colors" />
            </Link>
            <Link href="/" className="cursor-pointer">
              <FaLinkedinIn className="text-2xl md:text-3xl hover:text-blue-600 dark:hover:text-blue-400 transition-colors" />
            </Link>
          </div>
        </nav>
      </footer>
    </div>
  );
};

export default Footer;
