import { Link, Divider } from "@nextui-org/react";

const Footer = async () => {
  return (
    <>
      <Divider className="mt-7" />
      <div className="flex items-center justify-center flex-col my-3">
        <h2 className="text-gray-400 text-md">Made By :</h2>
        <Link
          href="https://github.com/JiMarchel"
          target="_blank"
          className="text-xl"
        >
          JiMarchel
        </Link>
      </div>
    </>
  );
};

export default Footer;
