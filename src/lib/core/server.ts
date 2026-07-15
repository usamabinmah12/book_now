import { getUserToken } from "./session";

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

// Authorization header structure binding safely
export const authHeader = async (): Promise<Record<string, string>> => {
  const token = await getUserToken();
  return token ? { authorization: `Bearer ${token}` } : {};
};

// 1. GET (Read Operation)
export const serverFetch = async (path: string) => {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Fetch error! Status: ${res.status}`);
    return await res.json();
  } catch (error: any) {
    console.error("Error in serverFetch:", error);
    return null;
  }
};

// 2. GET (Protected Route)
export const protectedFetch = async (path: string) => {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      headers: await authHeader(),
      cache: "no-store",
    });
    if (!res.ok) throw new Error(`Protected Fetch error! Status: ${res.status}`);
    return await res.json();
  } catch (error: any) {
    console.error("Error in protectedFetch:", error);
    return null;
  }
};

// 3. PUT (Edit Destination/Assets)
export const serverEdit = async (path: string, editForm: any) => {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify(editForm),
      cache: "no-store",
    });

    if (!res.ok) {
      const errorData = await res.json().catch(() => ({}));
      throw new Error(errorData.message || `HTTP error! status: ${res.status}`);
    }

    return await res.json();
  } catch (error: any) {
    console.error("Error in serverEdit:", error);
    return { success: false, error: error.message };
  }
};

// 4. DELETE
export const serverDelete = async (path: string) => {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        ...(await authHeader()),
      },
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
    return await res.json();
  } catch (error: any) {
    console.error("Error in serverDelete:", error);
    return { success: false, error: error.message };
  }
};

// 5. POST/PUT Mutator
export const serverMutation = async (path: string, data: any, method = "POST") => {
  try {
    const res = await fetch(`${baseUrl}${path}`, {
      method: method,
      headers: {
        "Content-Type": "application/json",
        ...(await authHeader()),
      },
      body: JSON.stringify(data),
      cache: "no-store",
    });

    if (!res.ok) throw new Error(`Mutation HTTP error! status: ${res.status}`);
    return await res.json();
  } catch (error: any) {
    console.error("Error in serverMutation:", error);
    return { success: false, error: error.message };
  }
};