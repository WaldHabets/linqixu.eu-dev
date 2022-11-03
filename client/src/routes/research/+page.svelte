<script lang="ts">
    import ListItemLink from "svelte-components/list-item-link.svelte";
    import SideHeader from "../../lib/site-header.svelte";
</script>

<svelte:head>
    <title>Research | Linqi Xu</title>
    <meta name="description" content='Scientific output related to
    cardiac rehabilitation and secondary prevention,
    digital health tools,
    gamification and
    cardiovascular nursing.'>
</svelte:head>

<SideHeader active="research" />
<main class="centered-page small">
    <header class="page-title">
        <h1>Research</h1>
    </header>
    <section class="container-wrapper">
        <header class="container-header">
            <h1>Research topics</h1>
        </header>
        <ul class="bullet-list">
            <li class="text --medium">Cardiac rehabilitation and secondary prevention</li>
            <li class="text --medium">Digital health tools</li>
            <li class="text --medium">Gamification</li>
            <li class="text --medium">Cardiovascular nursing</li>
        </ul>
    </section>
    <section class="container-wrapper">
        <header class="container-header">
            <h1>Projects</h1>
        </header>
    </section>
    <section class="container-wrapper">
        <header class="container-header">
            <h1>Publications</h1>
        </header>
        <ul class="list-box publications">
            <ListItemLink href="https://doi.org/10.2196/27794" outgoing>
                <h2>The Effects of mHealth-Based Gamification Interventions on Participation in Physical Activity: Systematic Review </h2>
                <p>Published <strong>2022</strong></p>
            </ListItemLink>
        </ul>
    </section>
    <section class="container-wrapper">
        <header class="container-header">
            <h1>Connect</h1>
        </header>
        <ul class="list-box">
            <ListItemLink href="https://orcid.org/0000-0002-4346-0547" outgoing>
                <div class="socials">
                    <img alt="ORCID logo" src="/orcid.png" width="32" height="32" />
                    0000-0002-4346-0547
                </div>
            </ListItemLink>
            <ListItemLink href="https://www.researchgate.net/profile/Linqi-Xu-2" outgoing>
                <div class="socials">
                    <img alt="ResearchGate Logo" src="/researchgate.png" width="32" height="32" />
                    Research Gate
                </div>
            </ListItemLink>
            <ListItemLink href="https://www.linkedin.com/in/linqi-xu-96684124b" outgoing>
                <div class="socials">
                    <img alt="LinkedIn Logo" src="/linkedin.png" width="32" height="32" />
                    Research Gate
                </div>
            </ListItemLink>
        </ul>
    </section>
</main>

<style lang="scss">
  .bullet-list {
    list-style-image: url("/chevron-right.png");
    margin-left: 16px;
    li:not(:last-of-type) {
      margin-bottom: 8px;
    }
  }
    .publications {
      h2 {
        font-size: 18px;
        line-height: 24px;
      }
      p {
        font-size: 14px;
        strong {
          font-weight: bold;
        }
      }
    }
    .socials {
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .container-header {
      h1 {
        font-size: 24px;
      }
    }
</style>