import { ReactNode } from "react";
import { Link } from "react-router-dom";
import { Anchor, Ship } from "lucide-react";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen flex flex-col">
      <header className="bg-primary text-primary-foreground shadow-md">
        <div className="container mx-auto py-4 px-6 flex justify-between items-center">
          <Link to="/" className="flex items-center gap-2 font-bold text-2xl">
            <Ship size={32} />
            <span>МорФлот</span>
          </Link>
          <nav>
            <ul className="flex gap-6">
              <li>
                <Link to="/" className="hover:underline font-medium">
                  Главная
                </Link>
              </li>
              <li>
                <Link to="/ships" className="hover:underline font-medium">
                  Корабли
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
      
      <main className="flex-1">
        {children}
      </main>
      
      <footer className="bg-secondary py-6">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-2">
              <Anchor size={20} />
              <span className="font-medium">МорФлот © 2024</span>
            </div>
            <div className="text-muted-foreground text-sm">
              Информация о кораблях со всего мира
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
