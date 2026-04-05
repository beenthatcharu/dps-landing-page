"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function EnquiryForm() {
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    fullName: "",
    childName: "",
    email: "",
    phone: "",
    campus: "",
    grade: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id, value) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (step === 1) {
      setStep(2);
      return;
    }

    try {
      console.log("Form Data:", formData);
      const res = await fetch("/api/hubspot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          campus: formData.campus,
          grade: formData.grade,
        }),
      });
      const data = await res.json();
      console.log("HubSpot Response:", data);
      router.push("/thank-you");
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <Card className="w-full max-w-[380px] bg-transparent text-foreground shadow-none border-none overflow-hidden rounded-[1.5rem] mx-auto backdrop-blur-md">
      {/* Top Accent Line - DPS Blue/Yellow theme */}
      <div className="h-1.5 bg-gradient-to-r from-[#1e3a8a] to-[#facc15] w-full" />

      <CardHeader className="space-y-1.5 p-8 pb-3">
        <CardTitle className="text-2xl font-bold text-[#1e3a8a] tracking-tight">
          Enquire Now
        </CardTitle>
        <CardDescription className="text-slate-400 text-[11px] font-medium uppercase tracking-wider">
          Please fill in the details below.
        </CardDescription>
      </CardHeader>

      <CardContent className="p-8 pt-4">
        {submitted ? (
          <div className="flex flex-col items-center justify-center text-center space-y-4 py-8">
            <h2 className="text-xl font-bold text-[#1e3a8a]">🎉 Thank You!</h2>
            <p className="text-slate-500 text-sm">
              Your enquiry has been submitted successfully.
            </p>
            <Button
              onClick={() => {
                setSubmitted(false);
                setStep(1);
              }}
              className="bg-[#1e3a8a] hover:bg-[#1e3a8a]/90 text-white rounded-lg px-8"
            >
              Submit Another
            </Button>
          </div>
        ) : (
          <form onSubmit={handleSend} className="space-y-4">
            {/* STEP 1 */}
            {step === 1 && (
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Parent Name
                  </Label>
                  <Input
                    id="fullName"
                    placeholder="Your Name"
                    required
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className="h-11 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Child Name
                  </Label>
                  <Input
                    id="childName"
                    placeholder="Full name of student"
                    required
                    value={formData.childName}
                    onChange={handleInputChange}
                    className="h-11 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="email@example.com"
                    required
                    value={formData.email}
                    onChange={handleInputChange}
                    className="h-11 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div className="grid grid-cols-1 gap-4">
                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="h-11 bg-slate-50/50 border-slate-200 focus:border-[#facc15] focus:ring-0 rounded-lg text-sm transition-all"
                  />
                </div>

                <div className="space-y-1.5">
                   <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">Campus</Label>
                  <Select onValueChange={(v) => handleSelectChange("campus", v)}>
                    <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 rounded-lg text-sm">
                      <SelectValue placeholder="Select Campus" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="main">Kovan Campus</SelectItem>
                      <SelectItem value="branch">Branch Campus</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-1.5">
                  <Label className="text-[10px] uppercase tracking-[0.12em] font-bold text-slate-400 ml-1">Grade</Label>
                  <Select onValueChange={(v) => handleSelectChange("grade", v)}>
                    <SelectTrigger className="h-11 bg-slate-50/50 border-slate-200 rounded-lg text-sm">
                      <SelectValue placeholder="Select Grade" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="nursery">Nursery</SelectItem>
                      <SelectItem value="kg">Kindergarten 1</SelectItem>
                      <SelectItem value="kg">Kindergarten 2</SelectItem>
                      <SelectItem value="1">Grade 1</SelectItem>
                      <SelectItem value="1">Grade 2</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            )}

            <motion.div whileHover={{ scale: 1.01 }} whileTap={{ scale: 0.99 }} className="pt-4">
              <Button
                type="submit"
                className="w-full bg-[#facc15] hover:bg-[#eab308] text-[#1e3a8a] font-black h-12 text-base rounded-lg shadow-sm transition-all"
              >
                {step === 1 ? "Next Step" : "Submit Enquiry"}
              </Button>
            </motion.div>

            {step === 2 && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setStep(1)}
                className="w-full h-8 text-xs text-slate-400 hover:bg-transparent hover:text-slate-600 font-bold"
              >
                ← Back to Previous
              </Button>
            )}

            <div className="flex items-center justify-center space-x-2 pt-2 border-t border-slate-50">
              <ShieldCheck className="w-3 h-3 text-emerald-500" />
              <span className="text-[9px] text-slate-400 uppercase tracking-widest font-bold">Secure Transmission</span>
            </div>
          </form>
        )}
      </CardContent>
    </Card>
  );
}