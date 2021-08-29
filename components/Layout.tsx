import { Header } from "./Header";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className="flex flex-col m-8">
      <Header />
      <div className="container mx-auto">{children}</div>
    </div>
  );
};

export default Layout;
