import Link from "next/link";
import Logo from "@/components/logo";

import { SITE_TITLE } from "@/config";

import { footerLinks } from "@/constant";

export const WebFooter = () => {
  return (
    <footer className="w-full mt-8 py-6 bg-gray-900">
      <div className="w-full max-w-screen-xl space-y-4 mx-auto px-6 lg:px-0">
        <div className="w-full flex flex-col lg:flex-row items-center justify-center gap-6 lg:justify-between">
          <Logo className="text-white" />
          <p className="text-white text-center text-sm font-medium">
            {SITE_TITLE} -the fastest growing app store and distribution
            platform in the world. We are a global platform for global talent
          </p>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-6">
          {footerLinks.map((f) => (
            <Link
              href={f.link}
              key={f.label}
              className="text-white text-sm font-medium hover:underline"
            >
              {f.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
};
