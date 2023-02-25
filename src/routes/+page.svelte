<script>
  import { Srit } from "$lib";
  const imageSrc = 'images/test-image-2.jpg';
  const imageSizes = [100, 200, 400, 800];
  const imageAlt = 'Test Image';
</script>
<main>
<h1>Srit: Svelte Responsive Image Tag</h1>

<Srit src={imageSrc} sizes={imageSizes} alt={imageAlt} />

<h2>Installation</h2>

<pre><code>pnpm i -D srit</code></pre>

<h2>Usage</h2>
<p>The above image is created by the following in a Svelte file:</p>

<pre><code>&lt;script lang=&quot;ts&quot;&gt;
  import Srit from 'srit';

  const imageSrc = 'images/test-image.jpg';
  const imageSizes = [100, 200, 400, 800];
  const imageAlt = 'Test Image';
&lt;/script&gt;

&lt;Srit src=&#123;imageSrc&#125; sizes=&#123;imageSizes&#125; alt=&#123;imageAlt&#125; /&gt;
</code></pre>


<p>The created HTML is the following:</p>

<pre><code>&lt;picture&gt;
  &lt;source 
    type=&quot;image/avif&quot; 
    srcset=&quot;images/test-image-2-100.avif?width=100 100w, 
    images/test-image-2-200.avif?width=200 200w, 
    images/test-image-2-400.avif?width=400 400w, 
    images/test-image-2-800.avif?width=800 800w&quot;&gt;
  &lt;source 
    type=&quot;image/webp&quot; 
    srcset=&quot;images/test-image-2-100.webp?width=100 100w, 
    images/test-image-2-200.webp?width=200 200w, 
    images/test-image-2-400.webp?width=400 400w, 
    images/test-image-2-800.webp?width=800 800w&quot;&gt;
  &lt;img 
    src=&quot;images/test-image-2.jpg&quot; 
    srcset=&quot;images/test-image-2-100.jpg?width=100 100w, 
    images/test-image-2-200.jpg?width=200 200w, 
    images/test-image-2-400.jpg?width=400 400w, 
    images/test-image-2-800.jpg?width=800 800w&quot; 
    sizes=&quot;(max-width: 800px) 100vw, 50vw&quot; 
    loading=&quot;lazy&quot; 
    decoding=&quot;async&quot; 
    alt=&quot;Test Image&quot;&gt;
&lt;/picture&gt;
</code></pre>

<h2>Bimgc to create all your images from one image</h2>

<p>
  You can convert your image to all AVIF and WEBP images by using <a href="https://bimgc.codewithshin.com/?id=package-usage">bimgc</a>. 
</p>

<h2>Installing bimgc</h2>

<pre><code>npm i -g bimgc
bimgc --version
bimgc --help
cd path/to/your/project
</code></pre>

<h2>bimgc configuration file</h2>

<p>Create a configuration file, bimgc.config.cjs in the project root directory:</p>

<pre><code>module.exports = &#123;
  inputDir: &quot;static/images&quot;,
  outputDir: &quot;static/images/output&quot;,
  sizes: [100, 200, 400, 800],
  formats: ['avif', 'webp'],
  imageFiles: ['example-1.jpg', 'example-2.png']
&#125;;</code></pre>

<p>Add the following to the scripts section of your package.json file:</p>

<pre><code>&quot;scripts&quot;: &#123;
  &quot;gen:images&quot;: &quot;bimgc -c bimgc.config.cjs&quot;
&#125;</code></pre>

<p>To generate the images, run the following command:</p>

<pre><code>npm run gen:images</code></pre>

<p>Find more information about <a href="https://bimgc.codewithshin.com/?id=package-usage">bimgc</a>.</p>
</main>

<style>
  main {
    padding: 20px 20px 100px 20px;
  }

  p {
    font-size: 20px;
  }

  pre{
    background-color: #eee;
    padding: 10px;
  }
</style>