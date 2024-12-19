import Image from "next/image";
import Link from "next/link";

import { Button } from "./ui/button";

const AuthLayoutNav = () => {
  return (
    <nav className="flex justify-between items-center">
      <Image src={"/logo.svg"} alt="Logo" width={152} height={56} />
      <Button variant={"outline"} asChild>
        <Link href={"/contact"}>Contact Us</Link>
      </Button>
    </nav>
  );
};

export default AuthLayoutNav;
