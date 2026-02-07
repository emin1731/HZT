import { getPostBySlug, getPostContent } from "@/lib/posts";

export async function GET(
  request: Request,
  { params }: { params: { slug: string } },
) {
  const url = new URL(request.url);
  const pathSlug = url.pathname.split("/").filter(Boolean).pop();
  const rawSlug = params?.slug ?? pathSlug;
  const decodedSlug = rawSlug ? decodeURIComponent(rawSlug) : rawSlug;

  const post = getPostBySlug(decodedSlug);

  if (!post) {
    return new Response(JSON.stringify({ error: "Not found" }), {
      status: 404,
      headers: { "Content-Type": "application/json" },
    });
  }

  const html = await getPostContent(post.content);

  return new Response(
    JSON.stringify({
      slug: post.slug,
      metadata: post.metadata,
      html,
    }),
    {
      status: 200,
      headers: { "Content-Type": "application/json" },
    },
  );
}
