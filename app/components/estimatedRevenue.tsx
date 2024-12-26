"use client";

import { useState } from "react";
import { Calculator, Instagram, RotateCcw } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CategorySelect, categories, EarningsDisplay } from "./CategorySelect";

export default function EstimatedRevenueCalculator() {
  const [category, setCategory] = useState("fitness");
  const [followers, setFollowers] = useState("");
  const [likes, setLikes] = useState("");
  const [earnings, setEarnings] = useState<number | null>(null);

  const calculateEarnings = () => {
    const selectedCategory = categories.find((c) => c.value === category);
    if (!selectedCategory || !followers || !likes) return;

    const followersNum = parseInt(followers.replace(/,/g, ""));
    const likesNum = parseInt(likes.replace(/,/g, ""));
    const engagementRate = (likesNum / followersNum) * 100;
    
    let baseRate = selectedCategory.rate;
    if (engagementRate > 5) baseRate *= 1.5;
    if (engagementRate > 10) baseRate *= 2;
    
    const estimatedEarnings = followersNum * baseRate;
    setEarnings(estimatedEarnings);
  };

  const resetCalculator = () => {
    setCategory("fitness");
    setFollowers("");
    setLikes("");
    setEarnings(null);
  };

  return (
    <main className="-mt-7 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-green-900 via-black to-black">
      <div className="max-w-2xl mx-auto">
        <Card className="bg-black/50 border-green-500/30">
          <CardHeader className="text-center space-y-2 flex flex-row gap-1">
            <div className="flex justify-center">
              <Instagram className="w-8 h-10 text-green-400" />
            </div>
            <CardTitle className="text-[18px] leading-5 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-gray-400">
              Instagram Revenue Calculator
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid gap-6">
              <CategorySelect value={category} onValueChange={setCategory} />

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Number of Followers
                </label>
                <Input
                  type="text"
                  placeholder="e.g. 10000"
                  value={followers}
                  onChange={(e) => setFollowers(e.target.value)}
                  className="bg-black/50 text-white border-white/20"
                />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-white">
                  Average Likes per Post
                </label>
                <Input
                  type="text"
                  placeholder="e.g. 1000"
                  value={likes}
                  onChange={(e) => setLikes(e.target.value)}
                  className="bg-black/50 text-white border-white/20"
                />
              </div>

              <div className="flex gap-4">
                <Button 
                  onClick={calculateEarnings}
                 className="flex-1 px-7 py-4 bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25"
                >
                  {/* className=" px-7 py-4 rounded-full bg-gradient-to-r from-[#19ff4b] to-green-600 text-white text-lg font-semibold hover:from-green-600 transition-all duration-300 hover:shadow-lg hover:shadow-green-500/25" */}
                  <Calculator className="mr-2 h-4 w-4" />
                  Calculate
                </Button>

                {earnings !== null && (
                  <Button 
                    onClick={resetCalculator}
                    variant="outline"
                    className="bg-black/50 text-white border-white/20 hover:bg-black/70"
                  >
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                )}
              </div>

              {earnings !== null && <EarningsDisplay earnings={earnings} />}
            </div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}