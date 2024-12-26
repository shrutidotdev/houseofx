"use client";

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

// Categories data
export const categories = [
  { value: "fitness", label: "Fitness & Health", rate: 0.012 },
  { value: "fashion", label: "Fashion & Style", rate: 0.014 },
  { value: "travel", label: "Travel & Lifestyle", rate: 0.011 },
  { value: "food", label: "Food & Cooking", rate: 0.010 },
  { value: "tech", label: "Technology", rate: 0.015 },
  { value: "beauty", label: "Beauty & Cosmetics", rate: 0.013 },
  { value: "gaming", label: "Gaming", rate: 0.009 },
  { value: "education", label: "Education", rate: 0.008 },
];

// CategorySelect Component
interface CategorySelectProps {
  value: string;
  onValueChange: (value: string) => void;
}

export function CategorySelect({ value, onValueChange }: CategorySelectProps) {
  return (
    <div className="space-y-2">
      <label className="text-sm font-medium text-white">Category</label>
      <Select value={value} onValueChange={onValueChange}>
        <SelectTrigger className="bg-black/50 text-white border-white/20">
          <SelectValue placeholder="Select category" />
        </SelectTrigger>
        <SelectContent className="bg-black/90 border-white/20">
          {categories.map((cat) => (
            <SelectItem 
              key={cat.value} 
              value={cat.value}
              className="text-white hover:bg-white/20 focus:bg-white/20 focus:text-white"
            >
              {cat.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// EarningsDisplay Component
interface EarningsDisplayProps {
  earnings: number;
}

export function EarningsDisplay({ earnings }: EarningsDisplayProps) {
  return (
    <div className=" rounded-lg bg-black/50 ">
      <h3 className="text-lg font-semibold text-center mb-2 text-white">
        Estimated Earnings per Post
      </h3>
      <p className="text-3xl font-bold text-center text-green-300">
        ${earnings.toFixed(2)}
      </p>
      <p className="text-sm text-center text-gray-300">
        *Estimates are based on average industry rates and may vary
      </p>
    </div>
  );
}