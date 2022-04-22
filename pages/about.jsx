import Container from '../components/Container';

const About = () => {
  const coolTechs = [
    {
      name: 'Vercel',
      link: 'https://vercel.com',
      icon: '',
    },
    {
      name: 'Next.js',
      link: 'https://nextjs.org',
      icon: '',
    },
    {
      name: 'TailwindCSS',
      link: 'https://tailwindcss.com',
      icon: '',
    },
    {
      name: 'Radix UI',
      link: 'https://radix-ui.com',
      icon: '',
    },
    {
      name: 'Notion API',
      link: 'https://developers.notion.com',
      icon: '',
    },
    {
      name: 'OMG.LOL',
      link: 'https://omg.lol',
      icon: '',
    },
    {
      name: 'PlanetScale',
      link: 'https://planetscale.com',
      icon: '',
    },
    {
      name: 'Prisma',
      link: 'https://prisma.io',
      icon: '',
    },
  ];

  return (
    <Container title="slingercode - about">
      <div>
        <h1 className="cursor-default text-center text-2xl mb-10">
          Cool Tech 🤯
        </h1>

        <h2 className="cursor-default text-center text-lg mb-10">
          This is what i use to build this website 🙃
        </h2>

        <div className="grid gap-5 grid-cols-1 md:grid-cols-3">
          {coolTechs.map((tech) => (
            <a
              key={tech.name}
              href={tech.link}
              target="_blank"
              className="p-3 rounded-lg border-2 border-gray-border-interactive hover:shadow-[3px_3px] hover:shadow-gray-border-interactive"
            >
              {tech.name}
            </a>
          ))}
        </div>
      </div>
    </Container>
  );
};

export default About;
