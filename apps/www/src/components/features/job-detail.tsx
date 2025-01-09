import type { RouterOutput } from "@/server/api/root";
import type React from "react";
import { memo } from "react";
import Markdown from "react-markdown";

import { JobSiteTag } from "@/components/shared/job-site-tag";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { cn, formatPosDate } from "@/lib/utils";

interface JobDetailServerProps extends React.ComponentPropsWithoutRef<"div"> {
  data: NonNullable<RouterOutput["job"]["detail"]>;
}

export const JobDetail = memo(({ data, ...props }: JobDetailServerProps) => {
  return (
    <div
      {...props}
      className={cn("mx-auto w-full max-w-2xl py-8", props.className)}
    >
      <div>
        <div className="mb-4 md:flex md:items-center md:space-x-3">
          <div className="flex items-center space-x-3">
            <JobSiteTag type={data.originSite} />
            <div className="flex items-center space-x-2">
              <Avatar className="h-5 w-5 border border-zinc-100">
                {data.originUserAvatar && (
                  <AvatarImage src={data.originUserAvatar} />
                )}
                <AvatarFallback>
                  {data.originUsername?.slice(0, 1).toLocaleUpperCase() || "?"}
                </AvatarFallback>
              </Avatar>
              <div className="max-w-[240px]">
                <div className="truncate text-sm">{data.originUsername}</div>
              </div>
            </div>
          </div>
          <div className="mt-3 md:mt-0 text-sm text-gray-500">
            {data.originCreateAt
              ? `${formatPosDate(data.originCreateAt)} 发布`
              : "未知"}
          </div>
        </div>
        <div className="text-2xl">{data.title}</div>
        <div className="mt-4 flex flex-wrap items-center gap-3">
          {data.tags.map((tag) => (
            <Badge
              key={tag}
              variant="outline"
              className="max-w-60 px-4 py-1 font-medium text-gray-700 md:text-sm"
            >
              <span className="truncate">{tag}</span>
            </Badge>
          ))}
        </div>
      </div>
      <Separator className="my-7" />
      <article className="prose prose-gray w-full max-w-full">
        <Markdown>{data.generatedContent}</Markdown>
      </article>
    </div>
  );
});

JobDetail.displayName = "JobDetail";
