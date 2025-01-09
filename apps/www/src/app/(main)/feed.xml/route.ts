import { jobQuery } from "@/server/functions/job/query";
import RSS from "rss";

import { mdToHtml } from "@/lib/md-utils";
import { siteMeta } from "@/lib/site";

export const revalidate = 3600;

export async function GET() {
	const feed = new RSS({
		title: siteMeta.title,
		description: siteMeta.description,
		site_url: siteMeta.url,
		feed_url: `${siteMeta.url}/feed.xml`,
		language: "zh-CN",
		image_url: siteMeta.ogImage,
		generator: "X-Hiring",
	});

	const posts = await jobQuery({ limit: 20, type: "news" });

	for (const post of posts) {
		const description = post.generatedContent
			? mdToHtml(post.generatedContent)
			: "";
		feed.item({
			title: post.title ?? "",
			guid: post.id,
			url: `${siteMeta.url}/${post.id}`,
			description: description, // 文章的介绍，如果有的话
			date: post.originCreateAt ?? "未知", // 文章的发布时间
			categories: post.tags,
			author: `${post.originSite} - ${post.originUsername ?? "未知"}`,
			custom_elements: [
				{
					guid: post.originUrl,
				},
			],
		});
	}

	return new Response(feed.xml(), {
		headers: {
			"content-type": "application/xml",
		},
	});
}
