-- CreateTable
CREATE TABLE "ParticipationRequest" (
    "id" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "phone" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "city" TEXT,
    "artField" TEXT,
    "organization" TEXT,
    "role" TEXT,
    "requestType" TEXT,
    "audience" TEXT,
    "subject" TEXT,
    "area" TEXT,
    "budget" TEXT,
    "message" TEXT NOT NULL,
    "consent" BOOLEAN NOT NULL DEFAULT false,
    "status" TEXT NOT NULL DEFAULT 'new',
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ParticipationRequest_pkey" PRIMARY KEY ("id")
);

CREATE INDEX "ParticipationRequest_status_createdAt_idx" ON "ParticipationRequest"("status", "createdAt");
CREATE INDEX "ParticipationRequest_type_createdAt_idx" ON "ParticipationRequest"("type", "createdAt");
CREATE INDEX "ParticipationRequest_email_idx" ON "ParticipationRequest"("email");
