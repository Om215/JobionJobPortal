import Sidebar from "./sidebar";

function RootLayout({ children }) {
  return (
    <div className="block top-0 md:flex md:gap-5">
      <Sidebar />
      <main className="max-w-5xl flex-1 mx-2 md:ml-64 py-4 px-4 bg-white shadow-2xl rounded-xl my-5">{children}</main>
    </div>
  );
}

export default RootLayout;
