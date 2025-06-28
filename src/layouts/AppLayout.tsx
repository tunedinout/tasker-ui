import { Outlet } from "react-router";

const AppLayout = () => {
  return (
    <div className="min-h-screen grid grid-rows-[56px_1fr_56px]">
      <header className="bg-white px-6 py-4 shadow-md">
        <h1 className="logo-cls decoration-[4px] decoration-green-400 underline under underline-offset-6">tasker</h1>
      </header>
      <main className="flex items-center justify-center bg-gray-100 py-4">
        <div className="w-2/3 h-full bg-white rounded-md shadow-md">
          <Outlet />
        </div>
      </main>
      <footer className="bg-whte px-6 py-4 shadow-md text-xs">
        © {new Date().getFullYear()} tasker
      </footer>
    </div>
  );
};

export default AppLayout;
