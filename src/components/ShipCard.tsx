import { Ship, shipTypeLabels } from "@/types/ships";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Anchor, Clock, Ruler, Users, Waves } from "lucide-react";

interface ShipCardProps {
  ship: Ship;
}

const ShipCard = ({ ship }: ShipCardProps) => {
  return (
    <Card className="overflow-hidden h-full flex flex-col hover:shadow-lg transition-shadow">
      <div className="aspect-video bg-muted overflow-hidden">
        <img 
          src={ship.imageUrl} 
          alt={ship.name} 
          className="w-full h-full object-cover"
        />
      </div>
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <CardTitle className="text-xl">{ship.name}</CardTitle>
          <Badge variant="outline">{shipTypeLabels[ship.type]}</Badge>
        </div>
        <CardDescription>{ship.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-sm">
          <div className="flex items-center gap-1">
            <Clock size={16} className="text-muted-foreground" />
            <span>{ship.yearBuilt} г.</span>
          </div>
          <div className="flex items-center gap-1">
            <Ruler size={16} className="text-muted-foreground" />
            <span>{ship.length} м</span>
          </div>
          <div className="flex items-center gap-1">
            <Waves size={16} className="text-muted-foreground" />
            <span>{ship.displacement} т</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={16} className="text-muted-foreground" />
            <span>Экипаж: {ship.crew}</span>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full gap-2">
          <Link to={`/ships/${ship.id}`}>
            <Anchor size={16} />
            Подробнее
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ShipCard;
