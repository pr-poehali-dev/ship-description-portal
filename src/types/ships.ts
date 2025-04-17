export interface Ship {
  id: string;
  name: string;
  type: ShipType;
  description: string;
  yearBuilt: number;
  length: number;
  displacement: number;
  speed: number;
  crew: number;
  imageUrl: string;
  details: string;
}

export type ShipType = 
  | "military" 
  | "passenger" 
  | "cargo" 
  | "research" 
  | "submarine";

export const shipTypeLabels: Record<ShipType, string> = {
  military: "Военный",
  passenger: "Пассажирский",
  cargo: "Грузовой",
  research: "Исследовательский",
  submarine: "Подводная лодка"
};
