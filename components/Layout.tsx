import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col m-8">
      <Header />
      <div className="w-full h-full ml-0 sm:ml-20">
        <div className="container mx-auto mt-16 sm:my-10 py-4 px-8">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Layout;
