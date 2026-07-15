'use server'

import { revalidatePath } from "next/cache";
import { serverDelete } from "../core/server";

export async function deleteDestiny(id: string) {
    try {
        // Core utility fetch wrapper-কে কল করা হচ্ছে
        const result = await serverDelete(`/api/destination/${id}`);
        
        // ডিলিট হওয়ার পর UI আপডেট করার জন্য ক্যাশ রিভ্যালিডেট করা হচ্ছে
        revalidatePath('/dashboard/admin/destiny');
        
        return result;
    } catch (error: any) {
        console.error("Server Action Delete Failed:", error);
        return { success: false, error: error.message };
    }
}