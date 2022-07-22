import NextLink from "../node_modules/next/link";

type Props = {
  children: React.ReactNode;
  className?: string;
};

export const H1: React.FC<Props> = ({ children, className = "" }) => (
  <h1 className={`text-2xl ${className}`}>{children}</h1>
);

export const H2: React.FC<Props> = ({ children, className = "" }) => (
  <h1 className={`text-xl ${className}`}>{children}</h1>
);

export const H3: React.FC<Props> = ({ children, className = "" }) => (
  <h1 className={`text-lg ${className}`}>{children}</h1>
);

export const Link: React.FC<Props & { href: string }> = ({
  children,
  href,
  className = "",
}) => (
  <a
    href={href}
    target="_blank"
    rel="noreferrer"
    className={`text-yellow-high hover:text-yellow-low hover:underline ${className}`}
  >
    {children}
  </a>
);

export const Text: React.FC<Props> = ({ children, className = "" }) => (
  <p className={className}>{children}</p>
);
