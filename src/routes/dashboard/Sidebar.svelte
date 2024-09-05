<script>
  import { page } from "$app/stores"
  import { Home, LineChart, Package, ShoppingCart, Users } from "lucide-svelte"
  import Logo from "./startups/(compontents)/Logo.svelte"
</script>

<nav
  class="text-sm font-medium bg-[#D9D9D9]/20 h-full border border-[#000000]/10"
>
  <div class="flex flex-col p-8 justify-center space-y-7">
    <div class="flex space-x-5 items-center">
      <Logo></Logo>
      <span class="font-inter text-[#212121] font-bold text-lg">Acme Corp</span>
    </div>
    <div class="flex flex-col space-y-4">
      <span class="font-inter text-[#6B6B6B] font-medium text-xs">MENU</span>
      <a
        href="/dashboard/startups"
        class={$page.url.pathname === "/dashboard/startups"
          ? "active dark"
          : "not-active dark"}
      >
        <Home class="h-6 w-6" />
        Your Startups
      </a>
      <a
        href="/dashboard/listings"
        class={$page.url.pathname === "/dashboard/listings"
          ? "active dark"
          : "not-active dark"}
      >
        <ShoppingCart class="h-6 w-6" />
        Listings
      </a>
    </div>
  </div>
</nav>

<style>
  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  @layer components {
    .active {
      @apply border border-[#252429] text-[#2C3239] text-base bg-[#1A191E]  flex items-center gap-3 rounded-lg transition-all;
    }

    .not-active {
      @apply text-muted-foreground text-[#2C3239] text-base flex items-center gap-3 rounded-lg  transition-all;
    }
  }
</style>
