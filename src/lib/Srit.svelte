<script lang="ts">
  import { BROWSER } from 'esm-env';
  export let src: string;
  export let avif: boolean = true;
  export let webp: boolean = true;
  export let sizes = [100, 200, 400, 800];
  export let alt = '';
  export let loading: 'lazy' | 'eager' | null | undefined = 'lazy';
  export let decoding: 'async' | 'auto' | 'sync' | null | undefined = 'async';
  let imgStyle: string;
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

    const srcSetString = sizeStrings.join(', ');

    return srcSetString;
  }

  const avifSrcSet = createImageSrcSet(src, sizes, 'avif');
  const webpSrcSet = createImageSrcSet(src, sizes, 'webp');
  const srcset = createImageSrcSet(src, sizes);

  async function getAspectRatioFromSrc(src: string): Promise<number> {
    if (!BROWSER) {
      return Promise.resolve(1);
    }
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
  getAspectRatioFromSrc(src)
    .then((aspectRatio) => {
      imgStyle = `width: 100%; aspect-ratio: ${aspectRatio};`;
      // output: "width: 100%; aspect-ratio: 1.791044776119403;"
    })
    .catch((error) => {
      console.error(error);
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
  # Svelte Responsive Image Tag (SRIT)
  [Go to Srit](https://srit.vercel.app/)
  &nbsp;
  ## Props
  &nbsp;
  @prop src: string;
  @prop avif: boolean = true
  @prop webp: boolean = true
  @prop sizes = [100, 200, 400, 800]
  @prop alt = ''
  @prop loading: "lazy" | "eager" | null | undefined = 'lazy'
  @prop decoding : "async" | "auto" | "sync" | null | undefined = 'async'  
  &nbsp;
  ## Example
  &nbsp;
  ```
  <script lang="ts">
    import Srit from 'srit';
    const imageSrc = 'images/test-image.jpg';
    const imageSizes = [100, 200, 400, 800];
    const imageAlt = 'Test Image';
  </script>

  <Srit src={imageSrc} sizes={imageSizes} alt={imageAlt} />
  ```
  &nbsp;&nbsp;
  ## Bimgc to create all your images from one image
  &nbsp;
  Convert your image to all AVIF and WEBP images by using [bimgc](https://bimgc.codewithshin.com/?id=package-usage).
  
-->
