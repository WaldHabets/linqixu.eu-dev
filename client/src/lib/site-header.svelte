<script lang="ts">
    export let active: "about" | "projects" | "gallery" = "about";
</script>

<header id="site-header">
    <div id="site-header-content" class="centered-page wide">
        <a href="/" class={active === 'about' ? 'active' : ''}>About me</a>
        <a href="/research" class={active === 'research' ? 'active' : ''}>Research</a>
        <a href="/gallery" class={active === 'gallery' ? 'active' : ''}>Art Gallery</a>
    </div>
</header>

<style lang="scss">
#site-header {
  border-bottom: 2px solid var(--pt-border);
  background: var(--pt-container-bg);
  position: sticky;
  top: 0;
  z-index: 100001;
  #site-header-content {
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    a {
      box-sizing: border-box;
      height: 40px;
      line-height: 32px;
      padding: 4px 16px;
      border-radius: 8px;
      text-decoration: none;
      font-weight: bold;
      font-size: 16px;
      &:hover {
        background: #FBDFF3;
        cursor: pointer;
      }
      &.active {
        background: #ffb8ff;
      }
    }
  }
}
</style>