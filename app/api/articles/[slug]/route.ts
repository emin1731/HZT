import { getArticleBySlug, getPostContent } from "@/lib/posts";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const url = new URL(request.url);
  const pathSlug = url.pathname.split("/").filter(Boolean).pop();
  const rawSlug = params?.slug ?? pathSlug;
  const decodedSlug = rawSlug ? decodeURIComponent(rawSlug) : rawSlug;

  const article = getArticleBySlug(decodedSlug);

  if (!article) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const html = await getPostContent(article.content);

  return new Response(
    JSON.stringify({
      slug: article.slug,
      metadata: article.metadata,
      html,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
