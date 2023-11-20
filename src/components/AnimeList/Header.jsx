import Link from "next/link";

const Header = ({ title, linkHref, linkTitle }) => {
  return (
    <header className="p-4 mx-4 font-bold text-lg md:text-2xl flex justify-between items-center text-primary-800">
      <h1>{title}</h1>
      {linkHref && linkTitle ? (
        <Link className="underline text-sm" href={linkHref}>
          {linkTitle}
        </Link>
      ) : null}
    </header>
  );
};

export default Header;
