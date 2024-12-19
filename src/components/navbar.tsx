import { UserButton } from "@/features/auth/user-button";

export const Navbar = () => {
  return (
    <nav className="pt-4 px-6  flex items-center justify-between">
      <div className="flex-col hidden lg:flex">
        <h1 className="text-2xl font-semibold">Admin Panel</h1>
        <p className="text-muted-foreground">
          Monitor all you&apos;re Apps and User
        </p>
      </div>
      <UserButton />
    </nav>
  );
};
