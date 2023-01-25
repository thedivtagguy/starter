<script>
  import { Block } from '@reuters-graphics/graphics-components';
  import HeroImage from '$images/hero.png';
  export let content;
</script>

<!-- This is the hero section. Write semantically correct HTML -->
<div class="hero">
  <div class="hero__content">
    <h1 class="hero__title">The Great Indian</h1>
    <svg viewBox="0 0 50  18">
      <text x="0" y="12">#Boycott</text>
    </svg>
    <div class="image-section">
      <img class="hero-image" src="{HeroImage}" alt="The Great Indian" />
      <h2 class="subheading">{@html content.Dek}</h2>
    </div>
  </div>
  {#if $$slots.byline || $$slots.dateline}
    <aside class="article-metadata" class:pt-1="{!content.Dek}">
      {#if $$slots.byline}
        <div class="byline-container">
          <div class="byline">
            <!-- Byline named slot -->
            <slot name="byline" />
          </div>
        </div>
      {/if}
      {#if $$slots.dateline}
        <div class="dateline-container">
          <div class="published">
            <!-- Dateline named slot -->
            <slot name="dateline" />
          </div>
        </div>
      {/if}
    </aside>
  {/if}
</div>

<style lang="scss">
  // Import global.scss
  @import 'src/lib/styles/colors.scss';

  .hero {
    margin: 5rem auto;
  }

  .hero__content {
    position: relative;
  }

  .hero__title {
    color: $background;
    background-color: $black;
    text-align: center;
    padding: 0.5rem 1rem;
    font-size: 3rem;
    font-weight: 500;
    line-height: 1.2;
    margin-bottom: 0.5rem;
    font-family: 'Gloucester', sans-serif;
    text-transform: uppercase;
  }

  //   Before the title are two images on either side, spaced apart

  .hero__title::before,
  .hero__title::after {
    content: '';
    display: inline-block;
    width: 8rem;
    height: 2rem;
    background-image: url('/images/fleuron.png');
    background-size: cover;
    background-position: center;
    margin: 0 0.5rem;
  }

  svg {
    width: 100%;
  }

  text {
    font-family: 'Bebas Neue', cursive;
    text-align: center;
    font-weight: 500;
    text-transform: uppercase;
    fill: $black;
    text-shadow: 2px 2px 0 #787878, 4px 4px 0 #2c2c2c, 6px 6px 0 rgb(60, 60, 60),
      8px 8px 0 #000000;
  }

  .image-section {
    position: relative;
    z-index: 1;
    height: 100%;
    width: 100%;
    display: block;
  }

  .hero-image {
    width: 100%;
    height: auto;
    position: relative;
    z-index: 1;
    top: -16vh;
  }

  .subheading {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 70%;
    text-align: center;
    font-size: 1.2rem;
    font-weight: 400;
    line-height: 1.5;
    z-index: 2;
    font-family: 'Libre Baskerville', sans-serif;
    font-style: italic;
    color: $background;
    background-color: $black;
    padding: 0.5rem 1rem;
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px,
      rgba(0, 0, 0, 0.3) 0px 7px 13px -3px,
      rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
  }

  .article-metadata {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .byline {
    font-size: 1rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    font-family: 'Libre Baskerville', sans-serif;
    font-style: italic;
  }

  .published {
    font-size: 0.9rem;
    font-weight: 400;
    text-align: center;
    line-height: 1.5;
    font-family: 'Libre Baskerville', sans-serif;
    font-style: italic;
  }
  @media (max-width: 600px) {
    .hero {
      margin: 2rem auto;
    }
    .hero {
      margin: 1rem auto;
    }

    .hero__title {
      font-size: 2rem;
    }

    // Before the title are two images on either side, spaced apart
    .hero__title::before,
    .hero__title::after {
      width: 2rem;
      height: 1rem;
    }

    .subheading {
      font-size: 1.2rem;
    }
  }
</style>
