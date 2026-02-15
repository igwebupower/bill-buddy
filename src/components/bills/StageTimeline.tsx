"use client";

import { cn } from "@/lib/utils";
import { Check, Circle, Clock } from "lucide-react";

interface Stage {
  stageId?: number;
  stageName: string;
  house: string;
  sortOrder?: number;
  sittingDate?: string | null;
}

interface StageTimelineProps {
  stages: Stage[];
  currentStage?: string | null;
}

export function StageTimeline({ stages, currentStage }: StageTimelineProps) {
  if (!stages || stages.length === 0) {
    return (
      <p className="text-sm text-muted-foreground">
        No stage information available
      </p>
    );
  }

  const currentIndex = stages.findIndex(
    (s) => s.stageName === currentStage
  );

  return (
    <div className="space-y-1">
      {stages.map((stage, index) => {
        const isPast = index < currentIndex;
        const isCurrent = index === currentIndex;
        const isFuture = index > currentIndex;
        const isLast = index === stages.length - 1;

        return (
          <div key={`${stage.stageName}-${index}`} className="flex gap-3">
            {/* Timeline line + dot */}
            <div className="flex flex-col items-center">
              <div
                className={cn(
                  "flex h-7 w-7 shrink-0 items-center justify-center rounded-full border-2 transition-colors",
                  isPast &&
                    "border-primary bg-primary text-primary-foreground",
                  isCurrent &&
                    "border-primary bg-primary/15 text-primary animate-pulse",
                  isFuture && "border-border bg-muted text-muted-foreground"
                )}
              >
                {isPast ? (
                  <Check className="h-3.5 w-3.5" />
                ) : isCurrent ? (
                  <Clock className="h-3.5 w-3.5" />
                ) : (
                  <Circle className="h-3 w-3" />
                )}
              </div>
              {!isLast && (
                <div
                  className={cn(
                    "w-0.5 flex-1 min-h-6",
                    isPast
                      ? "bg-primary"
                      : "bg-border"
                  )}
                />
              )}
            </div>

            {/* Content */}
            <div className="pb-4 pt-0.5">
              <p
                className={cn(
                  "text-sm font-medium",
                  isCurrent && "text-primary",
                  isFuture && "text-muted-foreground"
                )}
              >
                {stage.stageName}
              </p>
              <div className="flex items-center gap-2 mt-0.5">
                <span
                  className={cn(
                    "text-xs",
                    stage.house === "Commons"
                      ? "text-commons-text"
                      : "text-lords-text"
                  )}
                >
                  {stage.house}
                </span>
                {stage.sittingDate && (
                  <span className="text-xs text-muted-foreground font-mono-numbers">
                    {new Date(stage.sittingDate).toLocaleDateString("en-GB", {
                      day: "numeric",
                      month: "short",
                      year: "numeric",
                    })}
                  </span>
                )}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
