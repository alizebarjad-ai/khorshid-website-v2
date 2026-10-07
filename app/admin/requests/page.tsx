import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { prisma } from "@/lib/prisma";
import { ADMIN_COOKIE, verifyAdminSession } from "@/lib/admin-auth";
import AdminRequests from "../admin-requests";
export default async function RequestsPage() { const store=await cookies(); if(!verifyAdminSession(store.get(ADMIN_COOKIE)?.value)) redirect("/admin/login"); const requests=await prisma.participationRequest.findMany({orderBy:{createdAt:"desc"},take:500}); return <AdminRequests initialRequests={requests}/>; }