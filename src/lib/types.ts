export type Props = {
	src: string;
	avif?: boolean;
	webp?: boolean;
	sizes?: number[];
	alt?: string;
	loading?: 'lazy' | 'eager' | null | undefined;
	decoding?: 'async' | 'auto' | 'sync' | null | undefined;
};
