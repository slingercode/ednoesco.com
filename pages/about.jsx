import Link from 'next/link';

import Container from '../components/Container';

const About = () => {
  return (
    <Container title="slingercode - about">
      <div>
        <h2>WIP: This module is not ready yet</h2>

        <br />

        <h2>Cool Tech 🤯</h2>

        <p>This is what i use to build this website 🙃</p>

        <ul className="list-disc list-inside">
          <li>
            <a
              href="https://vercel.com"
              target="_blank"
              className="text-blue-font-low"
            >
              Vercel
            </a>
          </li>

          <li>
            <a
              href="https://nextjs.org"
              target="_blank"
              className="text-blue-font-low"
            >
              Next.js
            </a>
          </li>

          <li>
            <a
              href="https://tailwindcss.com"
              target="_blank"
              className="text-blue-font-low"
            >
              Tailwind
            </a>
          </li>

          <li>
            <a
              href="https://www.radix-ui.com"
              target="_blank"
              className="text-blue-font-low"
            >
              Radix UI
            </a>
          </li>

          <li>
            <a
              href="https://developers.notion.coomglol"
              target="_blank"
              className="text-blue-font-low"
            >
              Notion API
            </a>
          </li>

          <li>
            <a
              href="https://omg.lol"
              target="_blank"
              className="text-blue-font-low"
            >
              OMG.LOL
            </a>
          </li>
        </ul>
      </div>
    </Container>
  );
};

export default About;
