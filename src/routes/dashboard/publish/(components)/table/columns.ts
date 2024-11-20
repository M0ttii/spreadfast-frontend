import type { ColumnDef } from "@tanstack/table-core";

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Directory = {
    created_at: string;
    directory: string | null;
    display_name: string | null;
    id: number;
    logo_url: string | null;
    monthly_visits: number | null;
    url: string | null;
};

export const columns: ColumnDef<Directory>[] = [
    {
        accessorKey: "id",
        header: "ID",
    },
    {
        accessorKey: "display_name",
        header: "Name",
    },
    {
        accessorKey: "monthly_visits",
        header: "Monthly Visits",
    },
];