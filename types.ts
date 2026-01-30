export interface CarModel {
  id: string;
  name: string;
  year: string;
  price: string; // e.g. "$450,000" or "Price on Request"
  imageUrl: string;
  category: string;
  location: string;
  dealer: string;
  specs: {
    engine: string;
    horsepower: number;
    acceleration: string; // 0-60 time
  };
  featured?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
}