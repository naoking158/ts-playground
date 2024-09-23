Bun.serve({
  async fetch(req) {
    const path = new URL(req.url).pathname

    console.log(path)
    
    const file = await Bun.file(path).bytes()
    
    return new Response(file)
  },
})
