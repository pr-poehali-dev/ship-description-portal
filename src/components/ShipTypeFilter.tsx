import { Button } from "@/components/ui/button";
import { ShipType, shipTypeLabels } from "@/types/ships";

interface ShipTypeFilterProps {
  selectedType: ShipType | null;
  onChange: (type: ShipType | null) => void;
}

const ShipTypeFilter = ({ selectedType, onChange }: ShipTypeFilterProps) => {
  const shipTypes = Object.entries(shipTypeLabels) as [ShipType, string][];
  
  return (
    <div className="space-y-2">
      <h3 className="font-medium">Тип корабля</h3>
      <div className="flex flex-wrap gap-2">
        <Button 
          variant={selectedType === null ? "default" : "outline"}
          size="sm"
          onClick={() => onChange(null)}
        >
          Все типы
        </Button>
        
        {shipTypes.map(([type, label]) => (
          <Button
            key={type}
            variant={selectedType === type ? "default" : "outline"}
            size="sm"
            onClick={() => onChange(type)}
          >
            {label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ShipTypeFilter;
