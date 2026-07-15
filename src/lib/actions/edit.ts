'use server'
import { revalidatePath } from "next/cache";
import { serverEdit } from "../core/server";

export async function editDestiny(id: string, editForm: any) {
    try {
        // 1. CRITICAL FIX: Sesh hobar jonno call-tike await koro
        const result = await serverEdit(`/api/editDestiny/${id}`, editForm);
        
        // 2. Clear cache to update client tables/UI
        revalidatePath('/dashboard/admin/destiny');
        
        return result;
    } catch (error) {
        console.error("Server Action Update Failed:", error);
        throw error;
    }
}