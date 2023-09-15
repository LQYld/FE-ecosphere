export async function GET(request: Request) {
  const fetchResponse = await fetch(
    `https://github.com/users/LQYld/contributions`
  )
  return new Response(await fetchResponse.text())
}
