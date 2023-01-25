<script>
  import {
    SEO,
    EmbedPreviewerLink,
    Theme,
  } from '@reuters-graphics/graphics-components';
  import App from '$lib/App.svelte';
  import content from '$locales/en/content.json';
  import { dev } from '$app/environment';
  import { assets } from '$app/paths';
  import { page } from '$app/stores';

  // Styles
  import '$lib/styles/global.scss';
</script>

<SEO
  lang="en"
  baseUrl="{import.meta.env.BASE_URL}"
  pageUrl="{$page.url}"
  seoTitle="{content.SEOTitle}"
  seoDescription="{content.SEODescription}"
  shareTitle="{content.ShareTitle}"
  shareDescription="{content.ShareDescription}"
  shareImgPath="{`${assets}/${content.ShareImgPath}`}"
  shareImgAlt="{content.ShareImgAlt}"
/>

<Theme>
  <App />
</Theme>

<!-- Only visible in dev! -->
<EmbedPreviewerLink dev="{dev}" />
