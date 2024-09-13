import Image from "next/image";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="https://as2.ftcdn.net/v2/jpg/06/66/91/85/1000_F_666918579_yh1VbLsyLDpVqoQ6U3OwkodJOJJvW9lP.jpg" // Replace with your own image if needed
          alt="Your Logo"
          width={180}
          height={180}
          priority
        />
        <h1 className="text-3xl font-bold text-center sm:text-left">
          Welcome to Aschalew&rsquo;s Portfolio!
        </h1>
        <p className="text-center sm:text-left text-lg">
          I&rsquo;m Aschalew, and this is where I showcase my work and projects.
          Feel free to explore and connect!
        </p>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
            href="https://github.com/AschalewMathewosDamtew"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://as2.ftcdn.net/v2/jpg/06/66/91/85/1000_F_666918579_yh1VbLsyLDpVqoQ6U3OwkodJOJJvW9lP.jpg" // Replace with your own logo or icon if needed
              alt="GitHub logo"
              width={20}
              height={20}
            />
            My GitHub
          </a>
          <a
            className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:min-w-44"
            href="https://www.linkedin.com/in/aschalew-mathewos-damtew/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="https://as2.ftcdn.net/v2/jpg/06/66/91/85/1000_F_666918579_yh1VbLsyLDpVqoQ6U3OwkodJOJJvW9lP.jpg" // Replace with your own logo or icon if needed
              alt="LinkedIn logo"
              width={20}
              height={20}
            />
            Connect on LinkedIn
          </a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://your-blog-or-portfolio.com" // Update link to your blog or portfolio
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://as2.ftcdn.net/v2/jpg/06/66/91/85/1000_F_666918579_yh1VbLsyLDpVqoQ6U3OwkodJOJJvW9lP.jpg" // Replace with your own icon if needed
            alt="Blog icon"
            width={16}
            height={16}
          />
          My Blog
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://your-projects-url.com" // Update link to your projects
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://as2.ftcdn.net/v2/jpg/06/66/91/85/1000_F_666918579_yh1VbLsyLDpVqoQ6U3OwkodJOJJvW9lP.jpg" // Replace with your own icon if needed
            alt="Projects icon"
            width={16}
            height={16}
          />
          My Projects
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="https://your-contact-url.com" // Update link to your contact page
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="https://as2.ftcdn.net/v2/jpg/06/66/91/85/1000_F_666918579_yh1VbLsyLDpVqoQ6U3OwkodJOJJvW9lP.jpg" // Replace with your own icon if needed
            alt="Contact icon"
            width={16}
            height={16}
          />
          Contact Me
        </a>
      </footer>
    </div>
  );
}
