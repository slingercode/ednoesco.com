import { H1, H2, H3, Link, Text } from "../components/typography";

export default function Index() {
  return (
    <>
      <div className="text-center md:text-left">
        <H1>Noel Espino Córdova</H1>

        <br />

        <H3>
          React Developer at{" "}
          <span>
            <Link href="https://twitter.com/grainchainio">@GrainChainIO</Link>
          </span>
        </H3>
      </div>

      <br />
      <br />

      <Text>
        Welcome to my <span className="font-semibold">healthy</span> digital
        fingerprint on the wide internet  😁
      </Text>

      <br />
      <br />

      <Text>
        {`I'm a react developer located in Mexico focused on the performance of
        the web and a passionate learner in that matter.`}
      </Text>

      <Text>
        {`I've worked mainly in React but I'm a trully beliver in technologies such as `}
        <span>
          <Link href="https://nextjs.org">Next.js</Link>
        </span>
        {` 👀 and `}
        <span>
          <Link href="https://remix.run">Remix</Link>
        </span>
        {` ❤️`}
      </Text>

      <br />
      <br />

      <H2>Contact</H2>

      <ul className="list-disc list-inside">
        <li>
          <Link href="mailto:hi@ednoesco.com">hi@ednoesco.com</Link>
          <span>{` (personal)`}</span>
        </li>

        <li>
          <Link href="https://github.com/slingercode">github</Link>
        </li>

        <li>
          <Link href="https://twitter.com/_slingercode">twitter</Link>
        </li>
      </ul>

      <br />
      <br />

      <H2>Beliefs</H2>

      <ul className="list-decimal list-inside">
        <li className="font-bold underline">{`Privacy is not optional, it's an obligation`}</li>

        <li>Dark mode is the only way</li>

        <li>Cyberpunk 2077 was not a good game</li>
      </ul>

      <br />
      <br />

      <H2>Interests / Learning</H2>

      <ul className="list-disc list-inside">
        <li>
          Javascript vanilla{" "}
          <span className="italic">(I need that practical part)</span>
        </li>

        <li>
          {`How dows a JS engine works? 🤔... I've think about that sinze `}
          <span>
            <Link href="https://bun.sh/">Bun.sh</Link>
          </span>
          {` came out`}
        </li>

        <li>Learn a low level programming language, I would like Rust tho</li>

        <li>{`DevOps workflow and cloud, I'm a newbie but I already started with my sample projects 😄🫣`}</li>
      </ul>

      <br />

      <Text>
        Maybe someday I write about my learning on that topics (￣▽￣)ノ
      </Text>
    </>
  );
}
