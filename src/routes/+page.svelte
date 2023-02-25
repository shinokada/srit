<script>
  import { Srit } from "$lib";
  const imageSrc = 'images/test-image-2.jpg';
  const imageSizes = [100, 200, 400, 800];
  const imageAlt = 'Test Image';
</script>

<h1>Srit: Svelte Responsive Image Tag</h1>

<Srit src={imageSrc} sizes={imageSizes} alt={imageAlt} />