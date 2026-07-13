export type ProductCategory =
  | "micronutrient"
  | "biostimulant"
  | "protection"
  | "soil"
  | "biofertilizer"
  | "spreader";

export interface Product {
  id: number;

  slug: string;

  name: string;

  category: ProductCategory;

  featured: boolean;

  tagline: string;

  image: string;

  description: string;

  benefits: string[];

  composition?: string;

  dosage?: string;

  form?: string;

  crops?: string[];

  packing?: string;
}

export interface ProductCategoryItem {
  id: "all" | ProductCategory;

  label: string;

  labelMr: string;

  color: string;
}