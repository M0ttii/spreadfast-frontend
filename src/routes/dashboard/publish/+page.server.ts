import { error, fail } from '@sveltejs/kit';
import type { Actions } from './$types';

export const actions = {
    createListing: async ({ request, locals: { supabase, safeGetSession } }) => {
        const formData = await request.formData();
        const selectedDirectories = JSON.parse(formData.get('selectedDirectories') as string);
        const productId = formData.get('productId');

        if (!selectedDirectories || selectedDirectories.length === 0) {
            return fail(400, { error: 'No directories selected' });
        }

        if (!productId) {
            return fail(400, { error: 'Product ID is required' });
        }

        try {
            // Get supabase and session from locals

            const { session } = await safeGetSession();
            if (!session) {
                throw error(401, 'Unauthorized');
            }

            // Insert new listing
            const { data: listing, error: listingError } = await supabase
                .from('listings')
                .insert({
                    productId,
                    profile_id: session.user.id,
                    state: 'draft'
                })
                .select()
                .single();

            if (listingError) throw listingError;

            // Insert listings_directories entries
            const { error: directoriesError } = await supabase
                .from('listings_directories')
                .insert(
                    selectedDirectories.map((directory_id: number) => ({
                        listing_id: listing.id,
                        directory_id,
                        profile_id: session.user.id
                    }))
                );

            if (directoriesError) throw directoriesError;

            return { success: true };
        } catch (err) {
            console.error('Error creating listing:', err);
            return fail(500, { error: 'Failed to create listing' });
        }
    }
} satisfies Actions;
