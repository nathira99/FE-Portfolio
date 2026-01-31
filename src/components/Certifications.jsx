import certificateImage from "../../public/assets/guvi certificate.jpeg";

export default function Certifications() {
  return (
    <section id="certifications" className="py-20">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-semibold tracking-tight mb-10">
          Certifications
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center border border-zinc-300 dark:border-zinc-800 rounded-xl p-6">
          
          {/* LEFT: Text content */}
          <div>
            <p className="font-medium text-zinc-900 dark:text-zinc-100 mb-2">
              Full Stack Development – GUVI & HCL
            </p>

            <p className="text-zinc-600 dark:text-zinc-400 mb-3 leading-relaxed">
              Focus on REST APIs, backend architecture, authentication,
              and real-time system development.
            </p>

            <p className="text-sm text-zinc-500 mb-6">
              2025
            </p>

            <div className="flex items-center gap-6">
              <a
                href="https://drive.google.com/file/d/1UsrHOOUWm9nYBDmM1uQDpunUjwjJLqKi/preview"
                target="_blank"
                rel="noreferrer"
                className="text-md font-medium text-violet-600 dark:text-violet-400 hover:text-violet-400 transition"
              >
                View Certificate
              </a>
            </div>
          </div>

          {/* RIGHT: Certificate image */}
          <div className="flex justify-start md:justify-end">
            <img
              src={certificateImage}
              alt="GUVI & HCL Full Stack Development Certificate"
              className="max-w-xs w-full rounded-lg border border-zinc-200 dark:border-zinc-800"
            />
          </div>

        </div>
      </div>
    </section>
  );
}