"use client";

import { memo, useCallback, useMemo } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { addDays, addYears } from "date-fns";

import { cn } from "@/lib/utils";
import { ComboOptionInput } from "@/components/shared/combo-option-input";
import { DatePickerWithRange } from "@/components/shared/date-picker-with-range";
import { trackEvent } from "@openpanel/nextjs";

const sortMap = [
  {
    key: "news",
    label: "最新",
  },
  {
    key: "trending",
    label: "热门",
  },
];

interface JobFilterProps {
  s?: string[];
  dateRange?: string[];
  type?: string;
}

export const JobFilter = memo(({ s = [], dateRange, type }: JobFilterProps) => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const dateRangeValue = useMemo(() => {
    const [startDate, endDate] = dateRange || [];
    return {
      from: startDate ? new Date(startDate) : undefined,
      to: endDate ? new Date(endDate) : undefined,
    };
  }, [dateRange]);

  const updateQueryParams = useCallback(
    (data: JobFilterProps) => {
      const params = new URLSearchParams(searchParams.toString());

      if (data.s != null) {
        params.set("s", data.s.join(","));
      }
      if (data.dateRange != null) {
        params.set(
          "dateRange",
          data.dateRange.length ? data.dateRange.join(",") : "",
        );
      }
      if (data.type != null) {
        params.set("type", data.type);
      }
      router.replace(`/?${params.toString()}`);
      trackEvent("job_filter", { params: params.toString() });
    },
    [router, searchParams],
  );

  return (
    <div className="w-full items-center max-md:space-y-3 md:flex md:space-x-2">
      <div className="relative flex-grow">
        <ComboOptionInput
          initValue={s}
          onChange={(val) => updateQueryParams({ s: val })}
        />
      </div>
      <DatePickerWithRange
        placeholder="日期范围"
        defaultDate={dateRangeValue}
        onChange={(dateValue) => {
          const range: string[] = [];
          if (dateValue?.from) {
            range.push(dateValue.from.toISOString());
          }
          if (dateValue?.to) {
            range.push(dateValue.to.toISOString());
          }
          updateQueryParams({ dateRange: range });
        }}
        disabled={[
          { from: addDays(new Date(), 1), to: addYears(new Date(), 100) },
        ]}
      />
      <div className="flex h-10 min-w-[240px] items-center gap-1 rounded-xl border border-input p-1">
        {sortMap.map((sortType) => (
          <div
            key={sortType.key}
            className={cn(
              "flex h-8 w-1/2 cursor-pointer items-center justify-center rounded-sm bg-white capitalize hover:bg-gray-100 max-md:text-sm",
              type === sortType.key ? "bg-gray-100" : "",
            )}
            onClick={() => updateQueryParams({ type: sortType.key })}
          >
            {sortType.label}
          </div>
        ))}
      </div>
    </div>
  );
});

JobFilter.displayName = "JobFilter";
