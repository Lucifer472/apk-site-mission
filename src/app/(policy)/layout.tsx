import { GlobalLayoutType } from "@/types";

import { PolicyHeader } from "@/features/policy/policy-header";
import { WebFooter } from "@/features/web/web-footer";

const PolicyLayout = ({ children }: GlobalLayoutType) => {
  return (
    <main className="min-h-screen bg-white">
      <PolicyHeader />
      {children}
      <WebFooter />
    </main>
  );
};

export default PolicyLayout;
