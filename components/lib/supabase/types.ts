export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json }
  | Json[];

export interface Database {
  // Example table — replace with your real tables
  public: {
    Tables: {
      users: {
        Row: {
          id: string;
          email: string;
        };
      };
    };
    Views: {};
    Functions: {};
  };
}
