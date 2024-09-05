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
      descriptions: {
        Row: {
          category: string | null
          created_at: string
          id: number
          keyFeatures: string | null
          longDescription: string | null
          shortDescription: string | null
          tagline: string | null
          tags: string | null
          useCases: string | null
        }
        Insert: {
          category?: string | null
          created_at?: string
          id?: number
          keyFeatures?: string | null
          longDescription?: string | null
          shortDescription?: string | null
          tagline?: string | null
          tags?: string | null
          useCases?: string | null
        }
        Update: {
          category?: string | null
          created_at?: string
          id?: number
          keyFeatures?: string | null
          longDescription?: string | null
          shortDescription?: string | null
          tagline?: string | null
          tags?: string | null
          useCases?: string | null
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
          directories: Json | null
          id: number
          productId: number | null
        }
        Insert: {
          created_at?: string
          directories?: Json | null
          id?: number
          productId?: number | null
        }
        Update: {
          created_at?: string
          directories?: Json | null
          id?: number
          productId?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "listings_productId_fkey"
            columns: ["productId"]
            isOneToOne: false
            referencedRelation: "user_products"
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
        Relationships: [
          {
            foreignKeyName: "profiles_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
      }
      screenshots: {
        Row: {
          created_at: string
          id: number
          illustrationId: number | null
          url: string | null
        }
        Insert: {
          created_at?: string
          id?: number
          illustrationId?: number | null
          url?: string | null
        }
        Update: {
          created_at?: string
          id?: number
          illustrationId?: number | null
          url?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "screenshots_illustrationId_fkey"
            columns: ["illustrationId"]
            isOneToOne: false
            referencedRelation: "illustrations"
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
        Relationships: [
          {
            foreignKeyName: "stripe_customers_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
        ]
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
            foreignKeyName: "user_products_descriptionId_fkey"
            columns: ["descriptionId"]
            isOneToOne: false
            referencedRelation: "descriptions"
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
