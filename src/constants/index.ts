export const BAAS_MODE: 'supabase' | 'firebase' =
	process.env.NEXT_PUBLIC_BAAS_MODE === 'supabase' ||
	process.env.NEXT_PUBLIC_BAAS_MODE === 'firebase'
		? process.env.NEXT_PUBLIC_BAAS_MODE
		: 'supabase';
