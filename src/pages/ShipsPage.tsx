import { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { ships } from "@/data/ships";
import ShipCard from "@/components/ShipCard";
import ShipTypeFilter from "@/components/ShipTypeFilter";
import { Ship, ShipType } from "@/types/ships";
import { Search } from "lucide-react";
import { useSearchParams } from "react-router-dom";

const ShipsPage = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialType = searchParams.get("type") as ShipType | null;
  
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedType, setSelectedType] = useState<ShipType | null>(initialType);
  const [filteredShips, setFilteredShips] = useState<Ship[]>(ships);
  
  // Фильтрация кораблей по типу и поисковому запросу
  useEffect(() => {
    let result = ships;
    
    if (selectedType) {
      result = result.filter(ship => ship.type === selectedType);
    }
    
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        ship => 
          ship.name.toLowerCase().includes(query) || 
          ship.description.toLowerCase().includes(query)
      );
    }
    
    setFilteredShips(result);
  }, [selectedType, searchQuery]);
  
  // Обновление URL при изменении типа
  useEffect(() => {
    if (selectedType) {
      searchParams.set("type", selectedType);
    } else {
      searchParams.delete("type");
    }
    setSearchParams(searchParams);
  }, [selectedType, searchParams, setSearchParams]);
  
  const handleTypeChange = (type: ShipType | null) => {
    setSelectedType(type);
  };
  
  return (
    <div className="container mx-auto px-6 py-8">
      <h1 className="text-3xl font-bold mb-8">Каталог кораблей</h1>
      
      <div className="grid md:grid-cols-[300px_1fr] gap-8">
        <div className="space-y-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" size={18} />
            <Input
              placeholder="Поиск кораблей..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10"
            />
          </div>
          
          <ShipTypeFilter 
            selectedType={selectedType} 
            onChange={handleTypeChange} 
          />
        </div>
        
        <div>
          {filteredShips.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredShips.map(ship => (
                <ShipCard key={ship.id} ship={ship} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12 bg-secondary rounded-lg">
              <h3 className="text-xl font-medium mb-2">Кораблей не найдено</h3>
              <p className="text-muted-foreground">
                Попробуйте изменить параметры поиска
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShipsPage;
