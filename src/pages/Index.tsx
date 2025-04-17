import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowRight, Ship } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col min-h-[calc(100vh-64px-76px)]">
      <section className="py-16 lg:py-24 wave-bg flex-grow">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Откройте мир морских судов
            </h1>
            <p className="text-xl mb-8 text-muted-foreground">
              Погрузитесь в увлекательный мир кораблей разных эпох и назначений. 
              От могучих военных крейсеров до элегантных пассажирских лайнеров.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/ships">
                Исследовать корабли <ArrowRight size={18} />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section className="py-12 bg-secondary">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-center">
            Категории кораблей
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category) => (
              <div 
                key={category.type} 
                className="bg-card p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex items-center gap-3 mb-3">
                  <category.icon size={24} className="text-accent" />
                  <h3 className="text-xl font-semibold">{category.title}</h3>
                </div>
                <p className="text-muted-foreground mb-4">{category.description}</p>
                <Button asChild variant="outline" className="w-full">
                  <Link to={`/ships?type=${category.type}`}>
                    Смотреть
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

const categories = [
  {
    title: "Военные корабли",
    description: "Мощные боевые суда, предназначенные для защиты морских границ и проведения военных операций",
    type: "military",
    icon: Ship
  },
  {
    title: "Пассажирские суда",
    description: "Лайнеры и круизные суда, перевозящие людей через океаны и моря с комфортом",
    type: "passenger",
    icon: Ship
  },
  {
    title: "Исследовательские суда",
    description: "Корабли, оснащенные для проведения научных экспедиций и изучения морских глубин",
    type: "research",
    icon: Ship
  }
];

export default Index;
