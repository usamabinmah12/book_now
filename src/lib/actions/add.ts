'use server'

import { revalidatePath } from "next/cache";
import { serverFetch } from "../core/server"; // তোমার প্রোজেক্টের কোর ফেচ ইউটিলিটি অনুযায়ী অ্যাডজাস্ট করে নিও

export async function createDestiny(payload: any) {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/destination`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(payload),
    });

    if (!res.ok) {
      const errData = await res.json();
      throw new Error(errData.message || "Failed to create destination");
    }

    const data = await res.json();
    revalidatePath('/dashboard/admin/destiny');
    revalidatePath('/explore');
    
    return { success: true, data };
  } catch (error: any) {
    console.error("Server Action Create Failed:", error);
    return { success: false, error: error.message };
  }
}