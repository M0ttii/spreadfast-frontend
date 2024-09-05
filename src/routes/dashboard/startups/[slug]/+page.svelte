<script>
  export let data

  const product =
    data.products &&
    data.products.find((product) => product.id.toString() === data.slug)

  console.log(product)
</script>
