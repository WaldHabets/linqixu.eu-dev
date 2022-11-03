<script lang="ts">
    import SideHeader from "../lib/site-header.svelte";

    /** Icons */

</script>

<svelte:head>
    <title>Linqi Xu</title>
    <meta name="description" content=">Nursing researcher fascinated by cardiology.">
</svelte:head>

<SideHeader active="about" />
<main>
    <div class="intro-section">
        <section class="intro-text">
            <div class="content-wrapper">
                <h1>Hi, I'm Linqi</h1>
                <h2 class="text --large">Nursing researcher fascinated by cardiology</h2>
                <p class="text --large">Currently researching the intersection of digital health and behavior change techniques in preventive cardiology.</p>
            </div>
        </section>
        <section class="intro-image">
            <img src="/heart.svg" alt="Heart"/>
        </section>
        <div class="intro-scroll">
            <p>See More</p>
            <img src="/arrow-down.svg" alt="Arrow Down"/>
        </div>
    </div>
    <div id="spotlights">
        <section class="spotlight">
            <div class="spotlight-content centered-page small">
                <img src="" alt="Linqi as a Researcher"/>
                <div>
                    <h2>Linqi as a Health Promoter</h2>
                    <p>Healthier lifestyle, better heart.</p>
                </div>
            </div>
        </section>
        <section class="spotlight reverse">
            <div class="spotlight-content centered-page small">
                <img src="" alt="Linqi as a Researcher"/>
                <div>
                    <h2>Linqi as an Artist</h2>
                    <p>Nature-related gouache, sketches and traditional Chinese paintings.</p>
                </div>
            </div>
        </section>
        <section class="spotlight">
            <div class="spotlight-content centered-page small">
                <img src="" alt="Linqi as a Researcher"/>
                <div>
                    <h2>Linqi as an Hiker</h2>
                    <p>Forests with fresh air, green grass with sheep and cows... 😍</p>
                </div>
            </div>
        </section>
    </div>
</main>
<footer class="centered-page small">
    <p>
        Website created & hosted by <a href="https://waldhabets.eu">Wald Habets</a>.
    </p>
    <p>
        <strong>Heart</strong> & <strong>directional arrows</strong> iconography by Creative Stall from <a href="https://thenounproject.com/creativestall/" target="_blank" title="Creative Stall">Noun Project</a>
    </p>
</footer>

<style lang="scss">
    .intro-section {
      min-height: calc(100vh - 50px);
      display: grid;
      grid-template-columns: 1fr 1fr;

      .intro-text {
        margin: 16px;
        display: flex;
        align-items: center;
        justify-content: center;

        h1 {
          font-size: 48px;
          margin-top: 32px;
          padding-bottom: 8px;
          border-bottom: 3px solid #ffb8ff;
          margin-bottom: 16px;
        }
        h2 {
          margin-bottom: 12px;
          font-weight: bold;
          //opacity: 0.7;
        }
        p {
          //opacity: 0.7;
        }
      }

      .intro-image {
        display: flex;
        align-items: center;
        margin: 16px;
        @keyframes animateHeart {
          // scale down and scale up faster in irregular intervals to get the throbbing effect
          0% {
            transform: scale(0.9);
          }
          5% {
            transform: scale(0.95);
          }
          10% {
            transform: scale(0.9);
          }
          15% {
            transform: scale(1);
          }
          50% {
            transform: scale(0.9);
          }
          100% {
            transform: scale(0.9);
          }
        }
        img {
          width: 100%;
          max-width: 80vh;
          animation: animateHeart 2.1s infinite;
        }
      }
      @media screen and (max-width: 756px) {
        grid-template-columns: 1fr;
        .intro-image {
          align-items: start;
          img {
            max-width: 100vw;
          }
        }
      }

      .intro-scroll {
        width: 200px;
        position: absolute;
        bottom: 16px;
        left: calc(50% - 100px);

        display: flex;
        flex-direction: column;
        align-items: center;

        font-weight: bold;
        font-size: 18px;

        img {
          width: 56px;
          height: 56px;
          padding: 8px;
          //background: #ffb8ff;
        }
      }
    }
    #spotlights {
      .spotlight {
        min-height: 386px;
        padding: 32px 0;
        background: #FBDFF3;

        .spotlight-content {
          display: flex;
          min-height: inherit;
          align-items: center;
          justify-content: space-between;

          img {
            border: 2px solid var(--pt-border);
            height: 256px;
            width: 256px;
            border-radius: 50%;
          }
          div {
            text-align: end;
            h2 {
              text-decoration: underline;
              text-decoration-color: #803680;
              text-decoration-thickness: 3px;
              font-size: 24px;
              font-weight: bold;
              padding-bottom: 4px;
              margin-bottom: 8px;
            }
          }
        }
        &.reverse {
          background: transparent;
          .spotlight-content {
            flex-direction: row-reverse;
            div {
              text-align: start;
              h2 {
                text-decoration: underline;
                text-decoration-color: #ffb8ff;
                text-decoration-thickness: 3px;
              }
            }
          }
        }
        @media screen and (max-width: 512px) {
          .spotlight-content,
          &.reverse .spotlight-content {
            flex-direction: column;
            justify-content: space-around;
            img {
              width: 196px;
              height: 196px;
            }
          }
        }
      }
    }
    footer {
      opacity: 0.8;
      padding: 16px 0;
      p {
        margin: 0 16px;
      }
      p:not(:last-of-type) {
        margin-bottom: 4px;
      }
      strong {
        font-weight: bold;
      }
    }
</style>
