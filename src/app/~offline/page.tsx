"use client";

import { WifiOff } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function OfflinePage() {
  return (
    <div className="flex items-center justify-center min-h-[60vh]">
      <Card className="p-8 text-center max-w-md">
        <WifiOff className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
        <h1 className="text-xl font-semibold mb-2">You are offline</h1>
        <p className="text-muted-foreground mb-6">
          Bill Buddy needs an internet connection to fetch the latest bills and
          generate AI summaries. Previously viewed bills may still be available
          in your cache.
        </p>
        <Button
          onClick={() => window.location.reload()}
          variant="outline"
        >
          Try again
        </Button>
      </Card>
    </div>
  );
}
