-- CreateEnum
CREATE TYPE "NotificationType" AS ENUM ('STAGE_CHANGE', 'ROYAL_ASSENT', 'NEW_BILL', 'NEW_AMENDMENT', 'BILL_DEFEATED', 'BILL_WITHDRAWN');

-- CreateTable
CREATE TABLE "Bill" (
    "id" TEXT NOT NULL,
    "parliamentId" INTEGER NOT NULL,
    "shortTitle" TEXT NOT NULL,
    "longTitle" TEXT NOT NULL,
    "billTypeId" INTEGER,
    "billTypeName" TEXT,
    "billTypeCategory" TEXT,
    "currentHouse" TEXT,
    "currentStage" TEXT,
    "originatingHouse" TEXT,
    "lastUpdate" TIMESTAMP(3),
    "isAct" BOOLEAN NOT NULL DEFAULT false,
    "isDefeated" BOOLEAN NOT NULL DEFAULT false,
    "billWithdrawn" TIMESTAMP(3),
    "sessionId" INTEGER,
    "sessionName" TEXT,
    "policyTopics" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "affectedGroups" TEXT[] DEFAULT ARRAY[]::TEXT[],
    "legislationGovUrl" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Bill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillStage" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "stageId" INTEGER NOT NULL,
    "stageName" TEXT NOT NULL,
    "house" TEXT NOT NULL,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "sittingDate" TIMESTAMP(3),
    "description" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BillStage_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillSponsor" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "memberId" INTEGER,
    "name" TEXT NOT NULL,
    "party" TEXT,
    "constituency" TEXT,
    "photoUrl" TEXT,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "BillSponsor_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillPublication" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "publicationType" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "displayDate" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "BillPublication_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "BillSummary" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "language" TEXT NOT NULL DEFAULT 'en',
    "version" INTEGER NOT NULL DEFAULT 1,
    "overview" TEXT NOT NULL,
    "purpose" TEXT NOT NULL,
    "keyChanges" JSONB NOT NULL,
    "impacts" JSONB NOT NULL,
    "implementation" TEXT,
    "tldr" TEXT NOT NULL,
    "modelUsed" TEXT NOT NULL DEFAULT 'claude-sonnet-4-5-20250929',
    "tokensUsed" INTEGER,
    "generatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "BillSummary_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DeviceProfile" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "preferredLang" TEXT NOT NULL DEFAULT 'en',
    "theme" TEXT NOT NULL DEFAULT 'dark',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "DeviceProfile_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TrackedBill" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "notifyStageChange" BOOLEAN NOT NULL DEFAULT true,
    "notifyRoyalAssent" BOOLEAN NOT NULL DEFAULT true,
    "notifyNewAmendment" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "TrackedBill_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "PushSubscription" (
    "id" TEXT NOT NULL,
    "deviceId" TEXT NOT NULL,
    "endpoint" TEXT NOT NULL,
    "p256dh" TEXT NOT NULL,
    "auth" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "PushSubscription_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Notification" (
    "id" TEXT NOT NULL,
    "billId" TEXT NOT NULL,
    "type" "NotificationType" NOT NULL,
    "title" TEXT NOT NULL,
    "body" TEXT NOT NULL,
    "data" JSONB,
    "sentAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Notification_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "SyncLog" (
    "id" TEXT NOT NULL,
    "jobName" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "billsFound" INTEGER,
    "billsSynced" INTEGER,
    "error" TEXT,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "completedAt" TIMESTAMP(3),

    CONSTRAINT "SyncLog_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bill_parliamentId_key" ON "Bill"("parliamentId");

-- CreateIndex
CREATE INDEX "Bill_currentHouse_idx" ON "Bill"("currentHouse");

-- CreateIndex
CREATE INDEX "Bill_billTypeName_idx" ON "Bill"("billTypeName");

-- CreateIndex
CREATE INDEX "Bill_isAct_idx" ON "Bill"("isAct");

-- CreateIndex
CREATE INDEX "Bill_lastUpdate_idx" ON "Bill"("lastUpdate");

-- CreateIndex
CREATE INDEX "BillStage_billId_idx" ON "BillStage"("billId");

-- CreateIndex
CREATE UNIQUE INDEX "BillStage_billId_stageId_key" ON "BillStage"("billId", "stageId");

-- CreateIndex
CREATE INDEX "BillSponsor_billId_idx" ON "BillSponsor"("billId");

-- CreateIndex
CREATE INDEX "BillPublication_billId_idx" ON "BillPublication"("billId");

-- CreateIndex
CREATE INDEX "BillSummary_billId_idx" ON "BillSummary"("billId");

-- CreateIndex
CREATE UNIQUE INDEX "BillSummary_billId_language_version_key" ON "BillSummary"("billId", "language", "version");

-- CreateIndex
CREATE UNIQUE INDEX "DeviceProfile_deviceId_key" ON "DeviceProfile"("deviceId");

-- CreateIndex
CREATE INDEX "TrackedBill_deviceId_idx" ON "TrackedBill"("deviceId");

-- CreateIndex
CREATE INDEX "TrackedBill_billId_idx" ON "TrackedBill"("billId");

-- CreateIndex
CREATE UNIQUE INDEX "TrackedBill_deviceId_billId_key" ON "TrackedBill"("deviceId", "billId");

-- CreateIndex
CREATE UNIQUE INDEX "PushSubscription_endpoint_key" ON "PushSubscription"("endpoint");

-- CreateIndex
CREATE INDEX "PushSubscription_deviceId_idx" ON "PushSubscription"("deviceId");

-- CreateIndex
CREATE INDEX "Notification_billId_idx" ON "Notification"("billId");

-- CreateIndex
CREATE INDEX "Notification_sentAt_idx" ON "Notification"("sentAt");

-- AddForeignKey
ALTER TABLE "BillStage" ADD CONSTRAINT "BillStage_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillSponsor" ADD CONSTRAINT "BillSponsor_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillPublication" ADD CONSTRAINT "BillPublication_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "BillSummary" ADD CONSTRAINT "BillSummary_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackedBill" ADD CONSTRAINT "TrackedBill_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "DeviceProfile"("deviceId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TrackedBill" ADD CONSTRAINT "TrackedBill_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "PushSubscription" ADD CONSTRAINT "PushSubscription_deviceId_fkey" FOREIGN KEY ("deviceId") REFERENCES "DeviceProfile"("deviceId") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Notification" ADD CONSTRAINT "Notification_billId_fkey" FOREIGN KEY ("billId") REFERENCES "Bill"("id") ON DELETE CASCADE ON UPDATE CASCADE;
