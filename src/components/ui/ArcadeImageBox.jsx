import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function ArcadeImageBox() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-white to-[#f5fbff] flex items-center justify-center p-6">
      <Card className="relative w-full max-w-6xl h-[500px] rounded-3xl shadow-2xl border border-[#e6edf4] overflow-hidden">
        <div className="absolute top-4 left-4 bg-white rounded-md p-2 shadow">
          <Menu className="w-5 h-5 text-gray-500" />
        </div>

        <div className="flex flex-col justify-center absolute left-16 top-1/3 -translate-y-1/3 z-10">
          <img src="/arcade-icon.svg" alt="Arcade Logo" className="w-8 mb-2" />
          <h1 className="text-2xl md:text-3xl font-bold text-[#0f172a]">Welcome to Arcade</h1>
          <Button className="mt-4 bg-[#0f172a] hover:bg-[#0b1120] text-white px-6 py-2 rounded-md shadow-md">
            Try it now
          </Button>
        </div>

        <div className="absolute top-4 right-4 flex gap-2">
          {Array.from({ length: 6 }).map((_, i) => (
            <div
              key={i}
              className="w-8 h-8 bg-[#f1f5f9] rounded-md shadow flex items-center justify-center"
            >
              <div className="w-3 h-3 rounded-full bg-gray-300" />
            </div>
          ))}
        </div>

        <img
          src="/arcade-dashboard.png" // replace with your dashboard image path
          alt="Arcade Dashboard"
          className="absolute right-0 top-0 h-full object-cover rounded-tr-3xl rounded-br-3xl"
        />

        <div className="absolute bottom-4 right-4 bg-white rounded-md p-2 shadow-md">
          <img src="/arcade-icon.svg" alt="Arcade Icon" className="w-6 h-6" />
        </div>
      </Card>
    </div>
  );
}
