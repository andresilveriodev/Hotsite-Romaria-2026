import { scheduleCategories } from "@/data/romaria-content";
import { infoModals } from "@/lib/landing-config";

export type ModalKey = keyof typeof infoModals | null;
export type CategoryFilter = (typeof scheduleCategories)[number]["id"];
