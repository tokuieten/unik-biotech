/* ============================================================
   DEALER
============================================================ */

export interface Dealer {
  id: string;

  dealerName: string;

  owner: string;

  phone: string;

  email?: string;

  state: string;

  district: string;

  city: string;

  address: string;

  pincode?: string;

  latitude: number;

  longitude: number;

  products: string[];

  verified?: boolean;

  featured?: boolean;
}