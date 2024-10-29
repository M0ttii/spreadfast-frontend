import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async ({ parent }) => {
    const { startups } = await parent();
    return { startups };
};
