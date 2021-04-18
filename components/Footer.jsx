const Footer = () => (
  <footer className="p-5 md:p-10 lg:px-28 lg:py-10 ">
    <hr />

    <div className="mt-5 flex flex-col md:flex-row md:justify-around">
      <div>
        <a
          className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-red-400"
          href="https://github.com/slingercode"
          rel="noreferrer"
          target="_blank"
        >
          Github
        </a>
      </div>

      <div>
        <a
          className="text-gray-600 hover:text-gray-900 dark:text-gray-200 dark:hover:text-red-400"
          href="https://twitter.com/_slingercode"
          rel="noreferrer"
          target="_blank"
        >
          Twitter
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
