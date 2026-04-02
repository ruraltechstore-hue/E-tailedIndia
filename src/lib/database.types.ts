export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type UserRole = 'admin' | 'sub_admin' | 'white_label' | 'super_distributor' | 'distributor' | 'retailer' | 'reseller' | 'support';
export type KycStatus = 'pending' | 'submitted' | 'verified' | 'rejected';
export type TransactionStatus = 'pending' | 'processing' | 'success' | 'failed' | 'refunded';
export type SchemeType = 'central' | 'state';
export type TicketStatus = 'open' | 'in_progress' | 'resolved' | 'closed';
export type TicketPriority = 'low' | 'medium' | 'high';

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          role: UserRole;
          parent_id: string | null;
          kyc_status: KycStatus;
          kyc_documents: Json;
          photo_url: string | null;
          address: string | null;
          state: string | null;
          district: string | null;
          certificate_id: string | null;
          id_card_url: string | null;
          is_active: boolean;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          role?: UserRole;
          parent_id?: string | null;
          kyc_status?: KycStatus;
          kyc_documents?: Json;
          photo_url?: string | null;
          address?: string | null;
          state?: string | null;
          district?: string | null;
          certificate_id?: string | null;
          id_card_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          full_name?: string;
          email?: string;
          phone?: string;
          role?: UserRole;
          parent_id?: string | null;
          kyc_status?: KycStatus;
          kyc_documents?: Json;
          photo_url?: string | null;
          address?: string | null;
          state?: string | null;
          district?: string | null;
          certificate_id?: string | null;
          id_card_url?: string | null;
          is_active?: boolean;
          created_at?: string;
          updated_at?: string;
        };
      };
      wallets: {
        Row: {
          id: string;
          user_id: string;
          balance: number;
          locked_balance: number;
          currency: string;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          balance?: number;
          locked_balance?: number;
          currency?: string;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          balance?: number;
          locked_balance?: number;
          currency?: string;
          created_at?: string;
          updated_at?: string;
        };
      };
      service_categories: {
        Row: {
          id: string;
          name: string;
          slug: string;
          icon: string;
          color: string;
          sort_order: number;
          description: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          slug: string;
          icon: string;
          color?: string;
          sort_order?: number;
          description?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          slug?: string;
          icon?: string;
          color?: string;
          sort_order?: number;
          description?: string | null;
          is_active?: boolean;
          created_at?: string;
        };
      };
      services: {
        Row: {
          id: string;
          category_id: string;
          name: string;
          slug: string;
          description: string | null;
          icon: string;
          redirect_url: string | null;
          is_active: boolean;
          requires_kyc: boolean;
          min_amount: number;
          max_amount: number | null;
          provider: string | null;
          api_endpoint: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          category_id: string;
          name: string;
          slug: string;
          description?: string | null;
          icon: string;
          redirect_url?: string | null;
          is_active?: boolean;
          requires_kyc?: boolean;
          min_amount?: number;
          max_amount?: number | null;
          provider?: string | null;
          api_endpoint?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          category_id?: string;
          name?: string;
          slug?: string;
          description?: string | null;
          icon?: string;
          redirect_url?: string | null;
          is_active?: boolean;
          requires_kyc?: boolean;
          min_amount?: number;
          max_amount?: number | null;
          provider?: string | null;
          api_endpoint?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      transactions: {
        Row: {
          id: string;
          user_id: string;
          service_id: string;
          transaction_type: string;
          amount: number;
          status: TransactionStatus;
          reference_number: string | null;
          provider_reference: string | null;
          customer_details: Json;
          metadata: Json;
          created_at: string;
          completed_at: string | null;
        };
        Insert: {
          id?: string;
          user_id: string;
          service_id: string;
          transaction_type: string;
          amount: number;
          status?: TransactionStatus;
          reference_number?: string | null;
          provider_reference?: string | null;
          customer_details?: Json;
          metadata?: Json;
          created_at?: string;
          completed_at?: string | null;
        };
        Update: {
          id?: string;
          user_id?: string;
          service_id?: string;
          transaction_type?: string;
          amount?: number;
          status?: TransactionStatus;
          reference_number?: string | null;
          provider_reference?: string | null;
          customer_details?: Json;
          metadata?: Json;
          created_at?: string;
          completed_at?: string | null;
        };
      };
      government_schemes: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          category: string;
          scheme_type: SchemeType;
          state_code: string | null;
          ministry: string | null;
          redirect_url: string;
          logo_url: string | null;
          eligibility: string | null;
          documents_required: string[] | null;
          is_active: boolean;
          sort_order: number;
          created_at: string;
        };
        Insert: {
          id?: string;
          name: string;
          description?: string | null;
          category: string;
          scheme_type: SchemeType;
          state_code?: string | null;
          ministry?: string | null;
          redirect_url: string;
          logo_url?: string | null;
          eligibility?: string | null;
          documents_required?: string[] | null;
          is_active?: boolean;
          sort_order?: number;
          created_at?: string;
        };
        Update: {
          id?: string;
          name?: string;
          description?: string | null;
          category?: string;
          scheme_type?: SchemeType;
          state_code?: string | null;
          ministry?: string | null;
          redirect_url?: string;
          logo_url?: string | null;
          eligibility?: string | null;
          documents_required?: string[] | null;
          is_active?: boolean;
          sort_order?: number;
          created_at?: string;
        };
      };
      white_labels: {
        Row: {
          id: string;
          user_id: string;
          domain: string | null;
          subdomain: string;
          brand_name: string;
          logo_url: string | null;
          primary_color: string;
          secondary_color: string;
          is_active: boolean;
          expiry_date: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          domain?: string | null;
          subdomain: string;
          brand_name: string;
          logo_url?: string | null;
          primary_color?: string;
          secondary_color?: string;
          is_active?: boolean;
          expiry_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          domain?: string | null;
          subdomain?: string;
          brand_name?: string;
          logo_url?: string | null;
          primary_color?: string;
          secondary_color?: string;
          is_active?: boolean;
          expiry_date?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
      support_tickets: {
        Row: {
          id: string;
          user_id: string;
          subject: string;
          description: string;
          status: TicketStatus;
          priority: TicketPriority;
          assigned_to: string | null;
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          user_id: string;
          subject: string;
          description: string;
          status?: TicketStatus;
          priority?: TicketPriority;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
        Update: {
          id?: string;
          user_id?: string;
          subject?: string;
          description?: string;
          status?: TicketStatus;
          priority?: TicketPriority;
          assigned_to?: string | null;
          created_at?: string;
          updated_at?: string;
        };
      };
    };
  };
}
