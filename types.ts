
export interface PricePlan {
  id: string;
  name: string;
  price: number;
  currency: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

export interface PaystackResponse {
  reference: string;
  status: string;
  message: string;
  transaction: string;
}

declare global {
  interface Window {
    PaystackPop: any;
  }
}
