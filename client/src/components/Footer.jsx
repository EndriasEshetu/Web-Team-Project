export default function Footer() {
  return (
    <footer
      className="w-full bg-slate-900 text-slate-400 text-sm py-8 px-6 shadow-inner mt-auto border-t border-slate-800"
      id="contact"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="order-2 md:order-1 flex items-center gap-2">
          Developed by:
          <span className="text-white font-semibold hover:text-teal-400 transition-colors">
            CSE Students, ASTU
          </span>
        </p>

        <p className="order-3 md:order-2 text-center">
          &copy; {new Date().getFullYear()} Hospital Management System. All rights reserved.
        </p>

        <div className="flex gap-6 order-1 md:order-3">
          <a
            href="https://github.com/EndriasEshetu/Web-Team-Project"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors font-medium"
          >
            GitHub Repo
          </a>
          <a
            href="https://www.linkedin.com/in/endrias-eshetu"
            target="_blank"
            rel="noreferrer"
            className="hover:text-white transition-colors font-medium"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}
