import {
  IconGithub,
  IconInstagram,
  IconLinkedin,
  IconMail,
  IconTwitter,
} from "@/components/Icon";
import Head from "next/head";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Head>
        <title>About | bimaindra.com</title>
      </Head>
      <section className="u-safe-area">
        <div className="container">
          <div className="prose mx-auto dark:prose-invert md:prose-base md:max-w-screen-sm lg:max-w-screen-md">
            <h1>Hi! My name is Bima.</h1>
            <p>
              A Web Front End Engineer based in <em>Surabaya - Indonesia</em>{" "}
              with a passion for building user-friendly and visually appealing
              websites.
            </p>
            <p>
              My experience in the field dates back to 2016 started learning
              about design slicing stuff. Then learn about the <b>Bootstrap</b>{" "}
              framework and implement it into the project.
            </p>
            <p>
              For the past few years, I have been focusing on expanding my
              knowledge of the <b>ReactJS</b> ecosystem and
              <b> Typescript</b>. Also I'm trying to be more routine in writing
              an article on this <Link href="/blog">site</Link>.
            </p>
            <p>
              In my current role, I am responsible for designing and
              implementing the front-end of websites, ensuring that they
              function smoothly and look great on a variety of devices.
            </p>
            <p>
              <small>
                <em>
                  *50% description above is generated by{" "}
                  <Link href="https://chat.openai.com/chat" target="_blank">
                    ChatGPT
                  </Link>
                  &nbsp;based on my keyword suggestion. &nbsp;
                </em>
                😄 🙏🏻
              </small>
            </p>
            <h2 className="decoration-slice underline decoration-dashed underline-offset-4">
              Tech Stack
            </h2>
            <p>Daily use:</p>
            <ul>
              <li>
                <Link href="https://reactjs.org/">ReactJS</Link> &{" "}
                <Link href="https://nextjs.org/">NextJS</Link>
              </li>
              <li>
                <Link href="https://www.typescriptlang.org/">TypeScript</Link>
              </li>
              <li>
                <Link href="https://tailwindcss.com/">TailwindCSS</Link>
              </li>
            </ul>
            <p>Deep dive learning:</p>
            <ul>
              <li>
                <Link href="https://redux.js.org/">Redux</Link>
              </li>
              <li>
                <Link href="https://graphql.org/">GraphQL</Link>
              </li>
              <li>
                <Link href="https://www.framer.com/motion/">Framer Motion</Link>
              </li>
            </ul>
            <h2 className="decoration-slice underline decoration-dashed underline-offset-4">
              Ping me
            </h2>
            <div className="flex items-center gap-4">
              <Link
                href="mailto:bimaindramulya@gmail.com"
                className="transition-transform hover:-translate-y-1">
                <IconMail />
              </Link>
              <Link
                href="http://github.com/wongdarjo"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconGithub />
              </Link>
              <Link
                href="http://linkedin.com/in/bimaindra"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconLinkedin />
              </Link>
              <Link
                href="http://twitter.com/bimaindraa"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconTwitter />
              </Link>
              <Link
                href="http://instagram.com/bimaindraa"
                target="_blank"
                className="transition-transform hover:-translate-y-1">
                <IconInstagram />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
