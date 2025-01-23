import { SideBar } from "../components/SideBar";


export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="container border-2 border-yellow-600 ">
      <div className="mt-6">
        <SideBar />
      </div>
      <div className="ml-60 pt-5 h-screen ">
        {children}
      </div>
    </div>
  );
};
