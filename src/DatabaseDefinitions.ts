export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      companies: {
        Row: {
          city: string | null
          created_at: string
          email: string | null
          firstName: string | null
          id: number
          job: string | null
          lastName: string | null
          launchDate: string | null
          linkedIn: string | null
          pricing: string | null
          startingPrice: number | null
          twitter: string | null
        }
        Insert: {
          city?: string | null
          created_at?: string
          email?: string | null
          firstName?: string | null
          id?: number
          job?: string | null
          lastName?: string | null
          launchDate?: string | null
          linkedIn?: string | null
          pricing?: string | null
          startingPrice?: number | null
          twitter?: string | null
        }
        Update: {
          city?: string | null
          created_at?: string
          email?: string | null
          firstName?: string | null
          id?: number
          job?: string | null
          lastName?: string | null
          launchDate?: string | null
          linkedIn?: string | null
          pricing?: string | null
          startingPrice?: number | null
          twitter?: string | null
        }
        Relationships: []
      }
      contact_requests: {
        Row: {
          company_name: string | null
          email: string | null
          first_name: string | null
          id: string
          last_name: string | null
          message_body: string | null
          phone: string | null
          updated_at: string | null
        }
        Insert: {
          company_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message_body?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Update: {
          company_name?: string | null
          email?: string | null
          first_name?: string | null
          id?: string
          last_name?: string | null
          message_body?: string | null
          phone?: string | null
          updated_at?: string | null
        }
        Relationships: []
      }
      directories: {
        Row: {
          created_at: string
          directory: string | null
          display_name: string | null
          id: number
          logo_url: string | null
          monthly_visits: number | null
          url: string | null
        }
        Insert: {
          created_at?: string
          directory?: string | null
          display_name?: string | null
          id?: number
          logo_url?: string | null
          monthly_visits?: number | null
          url?: string | null
        }
        Update: {
          created_at?: string
          directory?: string | null
          display_name?: string | null
          id?: number
          logo_url?: string | null
          monthly_visits?: number | null
          url?: string | null
        }
        Relationships: []
      }
      illustrations: {
        Row: {
          created_at: string
          iconUrl: string | null
          id: number
          logoUrl: string | null
        }
        Insert: {
          created_at?: string
          iconUrl?: string | null
          id?: number
          logoUrl?: string | null
        }
        Update: {
          created_at?: string
          iconUrl?: string | null
          id?: number
          logoUrl?: string | null
        }
        Relationships: []
      }
      listings: {
        Row: {
          created_at: string
          id: number
          productId: number | null
          profile_id: string | null
          state: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          productId?: number | null
          profile_id?: string | null
          state?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          productId?: number | null
          profile_id?: string | null
          state?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "user_products"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      listings_directories: {
        Row: {
          created_at: string
          directory_id: number | null
          id: number
          listing_id: number | null
          profile_id: string | null
        }
        Insert: {
          created_at?: string
          directory_id?: number | null
          id?: number
          listing_id?: number | null
          profile_id?: string | null
        }
        Update: {
          created_at?: string
          directory_id?: number | null
          id?: number
          listing_id?: number | null
          profile_id?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_directories_directory_id_fkey"
            columns: ["directory_id"]
            isOneToOne: false
            referencedRelation: "directories"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_directories_listing_id_fkey"
            columns: ["listing_id"]
            isOneToOne: false
            referencedRelation: "listings"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "listings_directories_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      profiles: {
        Row: {
          avatar_url: string | null
          company_name: string | null
          full_name: string | null
          id: string
          unsubscribed: boolean
          updated_at: string | null
          website: string | null
        }
        Insert: {
          avatar_url?: string | null
          company_name?: string | null
          full_name?: string | null
          id: string
          unsubscribed?: boolean
          updated_at?: string | null
          website?: string | null
        }
        Update: {
          avatar_url?: string | null
          company_name?: string | null
          full_name?: string | null
          id?: string
          unsubscribed?: boolean
          updated_at?: string | null
          website?: string | null
        }
        Relationships: []
      }
      startups: {
        Row: {
          affiliate: string | null
          business_type: string | null
          category: string | null
          company_city: string | null
          company_country: string | null
          company_twitter: string | null
          created_at: string
          email: string | null
          first_name: string | null
          id: number
          last_name: string | null
          launch_date: string | null
          long_description: string | null
          personal_twitter: string | null
          pricing_type: string | null
          profile_id: string | null
          role: string | null
          short_description: string | null
          starting_price: number | null
          tagline: string | null
          url: string | null
          use_case_1: string | null
          use_case_2: string | null
        }
        Insert: {
          affiliate?: string | null
          business_type?: string | null
          category?: string | null
          company_city?: string | null
          company_country?: string | null
          company_twitter?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          launch_date?: string | null
          long_description?: string | null
          personal_twitter?: string | null
          pricing_type?: string | null
          profile_id?: string | null
          role?: string | null
          short_description?: string | null
          starting_price?: number | null
          tagline?: string | null
          url?: string | null
          use_case_1?: string | null
          use_case_2?: string | null
        }
        Update: {
          affiliate?: string | null
          business_type?: string | null
          category?: string | null
          company_city?: string | null
          company_country?: string | null
          company_twitter?: string | null
          created_at?: string
          email?: string | null
          first_name?: string | null
          id?: number
          last_name?: string | null
          launch_date?: string | null
          long_description?: string | null
          personal_twitter?: string | null
          pricing_type?: string | null
          profile_id?: string | null
          role?: string | null
          short_description?: string | null
          starting_price?: number | null
          tagline?: string | null
          url?: string | null
          use_case_1?: string | null
          use_case_2?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "startups_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      stripe_customers: {
        Row: {
          stripe_customer_id: string | null
          updated_at: string | null
          user_id: string
        }
        Insert: {
          stripe_customer_id?: string | null
          updated_at?: string | null
          user_id: string
        }
        Update: {
          stripe_customer_id?: string | null
          updated_at?: string | null
          user_id?: string
        }
        Relationships: []
      }
      user_products: {
        Row: {
          affiliateLink: string | null
          companyId: number | null
          created_at: string
          descriptionId: number | null
          id: number
          illustrationId: number | null
          name: string | null
          profile_id: string | null
          url: string | null
        }
        Insert: {
          affiliateLink?: string | null
          companyId?: number | null
          created_at?: string
          descriptionId?: number | null
          id?: number
          illustrationId?: number | null
          name?: string | null
          profile_id?: string | null
          url?: string | null
        }
        Update: {
          affiliateLink?: string | null
          companyId?: number | null
          created_at?: string
          descriptionId?: number | null
          id?: number
          illustrationId?: number | null
          name?: string | null
          profile_id?: string | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "user_products_companyId_fkey"
            columns: ["companyId"]
            isOneToOne: false
            referencedRelation: "companies"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_products_illustrationId_fkey"
            columns: ["illustrationId"]
            isOneToOne: false
            referencedRelation: "illustrations"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "user_products_profile_id_fkey"
            columns: ["profile_id"]
            isOneToOne: false
            referencedRelation: "profiles"
            referencedColumns: ["id"]
          },
        ]
      }
      users: {
        Row: {
          created_at: string
          email: string | null
          id: number
          username: string | null
        }
        Insert: {
          created_at?: string
          email?: string | null
          id?: number
          username?: string | null
        }
        Update: {
          created_at?: string
          email?: string | null
          id?: number
          username?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type PublicSchema = Database[Extract<keyof Database, "public">]

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (PublicSchema["Tables"] & PublicSchema["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (PublicSchema["Tables"] &
        PublicSchema["Views"])
    ? (PublicSchema["Tables"] &
        PublicSchema["Views"])[PublicTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof PublicSchema["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof PublicSchema["Tables"]
    ? PublicSchema["Tables"][PublicTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof PublicSchema["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof PublicSchema["Enums"]
    ? PublicSchema["Enums"][PublicEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof PublicSchema["CompositeTypes"]
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof PublicSchema["CompositeTypes"]
    ? PublicSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never
