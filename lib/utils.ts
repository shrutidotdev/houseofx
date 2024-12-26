import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"
type ClassValue = string | number | boolean | undefined | null;
type ClassArray = ClassValue[];
type ClassDictionary = Record<string, unknown>;
type ClassInput = ClassValue | ClassArray | ClassDictionary;

export function cn(...inputs: ClassInput[]): string {
  return twMerge(clsx(inputs))
  // return inputs
  // .flat()
  // .filter(Boolean)
  // .join(' ');
}