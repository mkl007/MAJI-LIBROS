import { SideBar } from "../components/SideBar";


export const AppLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="">
      <div className="mt-6">
        <SideBar />
      </div>
      <div className="ml-60 pt-5">
        {children}
      </div>
    </div>
  );
};
