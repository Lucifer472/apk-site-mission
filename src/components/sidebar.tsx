import { DottedSeparator } from "./dotted-separator";
import { Navigation } from "./navigation";
import Logo from "./logo";

export const Sidebar = () => {
  return (
    <aside className="h-full bg-neutral-100 p-4 w-full">
      <Logo />
      <DottedSeparator className="my-4" />
      <Navigation />
    </aside>
  );
};
