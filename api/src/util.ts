export async function sleep(timeout: number = 5000) {
  return await new Promise((resolve) => {
    setTimeout(resolve, timeout)
  })
}
