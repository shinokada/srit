<script>
  import { Srit } from "$lib";
  const src = 'images/test-image-2.jpg';
  const sizes = [100, 200, 400, 800];
  const alt = 'Test Image';
</script>

<main>
<h1>Srit: Svelte Responsive Image Tags</h1>

<Srit {src} {sizes} {alt} />

<h2>Introduction</h2>

<p>Svelte Responsive Image Tag (SRIT) is a Svelte component that simplifies the creation of responsive images by automatically selecting the appropriate format based on the browser's capabilities. The component uses the "picture" element to provide multiple image sources in different formats and the "img" element with the "srcset" and "sizes" attributes to choose the optimal source based on the device's screen size and resolution.</p>

<h2>Installation</h2>

<pre><code>pnpm i -D srit</code></pre>

<h2>GitHub repo</h2>

<a href='https://github.com/shinokada/srit' target='_blank' rel='noreferrer'>Srit</a>

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

<h2>Props</h2>

<p>The following props are available for the Srit component:</p>

<table>
  <thead>
    <tr>
      <th>Name</th>
      <th>Description</th>
      <th>Default</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>src</td>
      <td>A required prop that specifies the URL of the image to display.</td>
      <td></td>
    </tr>
    <tr>
      <td>avif</td>
      <td>An optional prop that specifies whether to include an avif source in the picture element.</td>
      <td>true</td>
    </tr>
    <tr>
      <td>webp</td>
      <td>An optional prop that specifies whether to include a webp source in the picture element.</td>
      <td>true</td>
    </tr>
    <tr>
      <td>sizes</td>
      <td>An optional prop that specifies an array of image sizes to include in the srcset attribute of the img element.</td>
      <td>[100, 200, 400, 800]</td>
    </tr>
    <tr>
      <td>alt</td>
      <td>An optional prop that specifies the alternative text for the image.</td>
      <td></td>
    </tr>
    <tr>
      <td>loading</td>
      <td>A string indicating whether the image should be lazily loaded. Can be "lazy", "eager", null, or undefined.</td>
      <td>lazy</td>
    </tr>
    <tr>
      <td>decoding</td>
      <td>A string indicating the decoding mode for the image. Can be "async", "auto", "sync", null, or undefined.</td>
      <td>async</td>
    </tr>
  </tbody>
</table>

<h2>Bimgc to create all your images from one image</h2>

<p>
  You can convert your image to all AVIF and WEBP images by using <a href="https://bimgc.codewithshin.com/?id=package-usage">bimgc</a>. 
</p>

<h2>Installing bimgc</h2>

<pre><code>npm i -g bimgc
bimgc --version
bimgc --help
</code></pre>

<h2>bimgc configuration file</h2>

<p>Create a configuration file, bimgc.config.cjs in the project root directory:</p>

<pre><code>module.exports = &#123;
  inputDir: &quot;static/images&quot;,
  outputDir: &quot;static/images&quot;,
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
    padding: 0 10px 50px 10px;
  }

  h1 {
    text-align: center;
  }

  p {
    font-size: 20px;
  }

  pre{
    background-color: #eee;
    padding: 10px;
    white-space: pre-wrap;
    word-wrap: break-word;
  }

  pre code {
    font-size: 16px;
  }


  table {
  border-collapse: collapse;
  width: 100%;
  margin-bottom: 20px;
  }

  th, td {
    border: 1px solid #ddd;
    padding: 8px;
    font-size: 18px;
  }

  th {
    font-weight: bold;
    background-color: #f2f2f2;
  }

  tr:nth-child(even) {
    background-color: #f2f2f2;
  }

  tr:nth-child(odd) {
    background-color: #fff;
  }

</style>