export default {
  async fetch(request, env) {
    if (env.ASSETS) {
      return env.ASSETS.fetch(request);
    }
    return new Response("Royal Dent Dental Center — Dairut Branch is live.", {
      headers: { "Content-Type": "text/plain; charset=utf-8" }
    });
  }
};
