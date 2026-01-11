import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-richblack-900 text-richblack-300">
      <div className="max-w-[1280px] mx-auto px-6 py-16">

        {/* ===== TOP GRID ===== */}
        <div className="sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div className=" mb-3">
            <h2 className="text-richblack-5 text-xl font-semibold mb-3">
              SkillStream
            </h2>
            <p className="text-sm leading-6">
              Learn, build skills, and grow your career with industry-ready
              courses taught by experts.
            </p>
          </div>

          {/* Company */}
          <div className=" mb-3">
            <h3 className="text-richblack-5 font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/about" className="hover:text-yellow-400">About Us</Link></li>
              <li><Link to="/careers" className="hover:text-yellow-400">Careers</Link></li>
              <li><Link to="/blog" className="hover:text-yellow-400">Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div className=" mb-3">
            <h3 className="text-richblack-5 font-semibold mb-3">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/courses" className="hover:text-yellow-400">Courses</Link></li>
              <li><Link to="/instructor" className="hover:text-yellow-400">Become Instructor</Link></li>
              <li><Link to="/help" className="hover:text-yellow-400">Help Center</Link></li>
            </ul>
          </div>

          {/* Social */}
          <div className=" mb-3">
            <h3 className="text-richblack-5 font-semibold mb-3">Connect</h3>
            <div className="flex gap-4 text-xl">
              <a href="#" className="hover:text-yellow-400"><FaFacebook /></a>
              <a href="#" className="hover:text-yellow-400"><FaTwitter /></a>
              <a href="#" className="hover:text-yellow-400"><FaLinkedin /></a>
              <a href="#" className="hover:text-yellow-400"><FaGithub /></a>
            </div>
          </div>
        </div>

        {/* ===== DIVIDER ===== */}
        <div className="border-t border-richblack-700 my-8"></div>

        {/* ===== BOTTOM ===== */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm">
          <p>© {new Date().getFullYear()} SkillStream. All rights reserved.</p>
          <div className="flex gap-4">
            <Link to="/privacy" className="hover:text-yellow-400">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-yellow-400">Terms</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
