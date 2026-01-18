export default function Contact() {
  return (
    <section id="contact" className="pt-20">
      <div className="max-w-6xl mx-auto px-6">
        <div className="max-w-full mb-10 ">
          <h2 className="text-3xl font-semibold tracking-tight mb-2">
            Contact
          </h2>

          <p className="text-zinc-500 dark:text-zinc-400">
            Have an opportunity or want to discuss a project?<br></br>  
            Fill out the form below and I’ll get back to you.
          </p>
        </div>

        {/* Centered Card */}
        <div>
          <div className="w-full max-w-xl bg-white dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-2xl p-8 shadow-lg">
            <form
              action="https://formspree.io/f/xbddgweq"
              method="POST"
              className="space-y-6"
            >
              {/* Name */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  className="
                    w-full rounded-lg border border-zinc-300 dark:border-zinc-700
                    bg-white dark:bg-zinc-900
                    px-4 py-2
                    text-zinc-900 dark:text-zinc-100
                    focus:outline-none focus:ring-2 focus:ring-violet-500
                  "
                />
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="
                    w-full rounded-lg border border-zinc-300 dark:border-zinc-700
                    bg-white dark:bg-zinc-900
                    px-4 py-2
                    text-zinc-900 dark:text-zinc-100
                    focus:outline-none focus:ring-2 focus:ring-violet-500
                  "
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  className="
                    w-full rounded-lg border border-zinc-300 dark:border-zinc-700
                    bg-white dark:bg-zinc-900
                    px-4 py-2
                    text-zinc-900 dark:text-zinc-100
                    focus:outline-none focus:ring-2 focus:ring-violet-500
                  "
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="
                  inline-flex items-center justify-center
                  rounded-lg bg-violet-500 px-6 py-3
                  text-white font-medium
                  hover:bg-violet-400 transition
                "
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}