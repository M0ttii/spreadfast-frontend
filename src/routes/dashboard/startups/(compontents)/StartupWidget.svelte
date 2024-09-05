<script lang="ts">
  import { redirect } from "@sveltejs/kit"
  import type { SvelteComponent } from "svelte"
  import Logo from "./Logo.svelte"
  import Button from "$lib/components/ui/button/button.svelte"

  export let logo: typeof Logo
  export let websiteUrl: string
  export let productID: number
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<a
  role="button"
  tabindex="0"
  href={`/dashboard/startups/${productID}`}
  class="flex flex-col whitespace-nowrap rounded-none max-w-72 cursor-pointer"
>
  <div
    class="flex flex-col w-full rounded-md border hover:border-zinc-300 border-solid bg-[#ffffff] border-[#DFDFDF] min-w-96 min-h-80 p-5 space-y-5"
  >
    <div class="flex items-center space-x-4">
      <svelte:component this={logo} />
      <h2 class="text-2xl font-semibold tracking-normal text-[#414141]">
        SaasCraft
      </h2>
    </div>
    <div class="bg-red-400 rounded-xl w-full h-full"></div>
    <div class="flex justify-end space-x-3">
      <Button class="shadow-md border-[#C0BDBD] rounded-xl " variant="outline"
        >Edit</Button
      >
      <Button class="shadow-md">Publish</Button>
    </div>
  </div>
</a>
