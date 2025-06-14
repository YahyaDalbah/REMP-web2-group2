export interface User {
  id: number;
  name: string;
  email: string;
  type: 'admin' | 'buyer' | 'seller';
  created_at?: string;
  deleted_at?: string | null;
}