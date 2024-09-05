<script>
  import Logo from "./(compontents)/Logo.svelte"
  import StartupWidget from "./(compontents)/StartupWidget.svelte"

  export let data
  const { products } = data
  console.log(data)
</script>

{#if products != null}
  <div class="grid grid-cols-4">
    {#each products as product}
      {#if product.url}
        <StartupWidget
          logo={Logo}
          productID={product.id}
          websiteUrl={product.url}
        ></StartupWidget>
      {/if}
    {/each}
  </div>
{:else}
  <p class="text-white">No products found</p>
{/if}
