import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function generateWhatsAppLink(text: string) {
  return `https://wa.me/2349038450299?text=${encodeURIComponent(text)}`;
}
