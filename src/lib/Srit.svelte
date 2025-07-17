<script lang="ts">
	import { onMount } from 'svelte';
	import type { Props } from './types';

	let {
		src,
		avif = true,
		webp = true,
		sizes = [100, 200, 400, 800],
		alt = '',
		loading = 'lazy',
		decoding = 'async'
	}: Props = $props();

	let imgStyle = $state('');
	const maxWidth = Math.max.apply(null, sizes);

	function createImageSrcSet(src: string, sizes: number[], format: string = ''): string {
		const imageFilename = src.split('/').pop()!;
		const imageBaseName = imageFilename.split('.').slice(0, -1).join('.');
		const imageExt = format || imageFilename.split('.').pop()!;

		const sizeStrings = sizes.map((size) => {
			const imageUrl = `${src.replace(
				imageFilename,
				`${imageBaseName}-${size}.${imageExt}`
			)}?width=${size}`;
			return `${imageUrl} ${size}w`;
		});

		return sizeStrings.join(', ');
	}

	const avifSrcSet = createImageSrcSet(src, sizes, 'avif');
	const webpSrcSet = createImageSrcSet(src, sizes, 'webp');
	const srcset = createImageSrcSet(src, sizes);

	function getAspectRatioFromSrc(src: string): Promise<number> {
		return new Promise((resolve, reject) => {
			const img = new Image();
			img.onload = () => {
				const aspectRatio = img.width / img.height;
				resolve(aspectRatio);
			};
			img.onerror = () => {
				reject(new Error(`Could not load image: ${src}`));
			};
			img.src = src;
		});
	}

	onMount(() => {
		getAspectRatioFromSrc(src)
			.then((aspectRatio) => {
				imgStyle = `width: 100%; aspect-ratio: ${aspectRatio};`;
			})
			.catch((error) => {
				console.error(error);
			});
	});
</script>

<picture>
	{#if avif}
		<source type="image/avif" srcset={avifSrcSet} />
	{/if}
	{#if webp}
		<source type="image/webp" srcset={webpSrcSet} />
	{/if}
	<img
		{loading}
		{src}
		{srcset}
		sizes="(max-width: {maxWidth}px) 100vw, 50vw"
		style={imgStyle}
		{decoding}
		{alt}
	/>
</picture>

<!--
@component
[Go to docs](https://github.com/shinokada/srit/)
## Type
[Props](https://github.com/shinokada/srit/blob/main/src/lib/types.ts#L1)
## Props
@prop src
@prop avif = true
@prop webp = true
@prop sizes = [100, 200, 400, 800]
@prop alt = ''
@prop loading = 'lazy'
@prop decoding = 'async'
-->
