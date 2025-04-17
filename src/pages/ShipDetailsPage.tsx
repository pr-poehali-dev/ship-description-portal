import { useParams, Link } from "react-router-dom";
import { getShipById } from "@/data/ships";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, Calendar, Sailboat, Ruler, Waves, Compass, Users } from "lucide-react";
import { shipTypeLabels } from "@/types/ships";

const ShipDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const ship = id ? getShipById(id) : undefined;
  
  if (!ship) {
    return (
      <div className="container mx-auto px-6 py-12">
        <Alert className="max-w-xl mx-auto">
          <AlertDescription>
            Корабль не найден. Возможно, он был удален или у вас неверная ссылка.
          </AlertDescription>
        </Alert>
        <div className="flex justify-center mt-6">
          <Button asChild>
            <Link to="/ships">Вернуться к списку кораблей</Link>
          </Button>
        </div>
      </div>
    );
  }
  
  return (
    <div className="container mx-auto px-6 py-8">
      <div className="mb-6">
        <Button variant="outline" asChild size="sm" className="gap-2">
          <Link to="/ships">
            <ArrowLeft size={16} />
            Назад к списку
          </Link>
        </Button>
      </div>
      
      <div className="grid md:grid-cols-[1fr_400px] gap-8">
        <div>
          <div className="mb-6">
            <h1 className="text-3xl font-bold mb-2">{ship.name}</h1>
            <div className="flex items-center gap-3">
              <Badge className="text-sm">{shipTypeLabels[ship.type]}</Badge>
              <span className="text-muted-foreground">{ship.yearBuilt} г.</span>
            </div>
          </div>
          
          <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-8">
            <img 
              src={ship.imageUrl} 
              alt={ship.name} 
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "/placeholder.svg";
              }}
            />
          </div>
          
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-semibold mb-3">Описание</h2>
              <p className="text-muted-foreground leading-relaxed">{ship.description}</p>
            </div>
            
            <Separator />
            
            <div>
              <h2 className="text-2xl font-semibold mb-3">Подробная информация</h2>
              <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
                {ship.details}
              </p>
            </div>
          </div>
        </div>
        
        <div>
          <Card>
            <CardContent className="pt-6">
              <h3 className="text-xl font-semibold mb-4">Характеристики</h3>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="text-primary" size={20} />
                  <div>
                    <div className="text-sm text-muted-foreground">Год постройки</div>
                    <div className="font-medium">{ship.yearBuilt}</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Ruler className="text-primary" size={20} />
                  <div>
                    <div className="text-sm text-muted-foreground">Длина</div>
                    <div className="font-medium">{ship.length} м</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Waves className="text-primary" size={20} />
                  <div>
                    <div className="text-sm text-muted-foreground">Водоизмещение</div>
                    <div className="font-medium">{ship.displacement} т</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Compass className="text-primary" size={20} />
                  <div>
                    <div className="text-sm text-muted-foreground">Скорость</div>
                    <div className="font-medium">{ship.speed} узлов</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Users className="text-primary" size={20} />
                  <div>
                    <div className="text-sm text-muted-foreground">Экипаж</div>
                    <div className="font-medium">{ship.crew} человек</div>
                  </div>
                </div>
                
                <div className="flex items-center gap-3">
                  <Sailboat className="text-primary" size={20} />
                  <div>
                    <div className="text-sm text-muted-foreground">Тип судна</div>
                    <div className="font-medium">{shipTypeLabels[ship.type]}</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ShipDetailsPage;
