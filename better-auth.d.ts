import "better-auth";

declare module "better-auth" {
    // 💡 এটি better-auth-এর মেইন ইউজার ইন্টারফেসকে এক্সটেন্ড করবে
    interface User {
        role?: string;
        plan?: string;
    }
}