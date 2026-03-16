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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ShieldCheck } from "lucide-react";

export default function EnquiryForm() {

  const router = useRouter();
  const [step,setStep] = useState(1);

  const [formData, setFormData] = useState({
    fullName: "",
    childName: "",
    email: "",
    phone: "",
    campus: "",
    grade: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSelectChange = (id: string, value: string) => {
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();

    if(step === 1){
      setStep(2);
      return;
    }

    localStorage.setItem("dps_step_1", JSON.stringify(formData));
    router.push("/step-2");
  };

  return (

<Card className="w-full bg-white/95 backdrop-blur-md text-foreground shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden rounded-[2.5rem]">

<div className="h-2 bg-gradient-to-r from-accent to-blue-600 w-full" />

<CardHeader className="space-y-3 p-10 pb-4">

<CardTitle className="text-3xl font-black font-headline text-primary tracking-tight">
Admission Enquiry
</CardTitle>

<CardDescription className="text-muted-foreground/80 text-base font-medium">
Step {step}: Basic Information (Academic Year 2026-27)
</CardDescription>

</CardHeader>

<CardContent className="p-10 pt-4">

<form onSubmit={handleSend} className="space-y-6">

{/* STEP 1 */}

{step === 1 && (

<div className="grid grid-cols-1 gap-5">

<div className="space-y-2">
<Label htmlFor="fullName" className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Name
</Label>

<Input
id="fullName"
placeholder="Your Name"
required
value={formData.fullName}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white transition-all duration-300 rounded-2xl"
/>
</div>

<div className="space-y-2">
<Label htmlFor="childName" className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Name of Child
</Label>

<Input
id="childName"
placeholder="Full name of student"
required
value={formData.childName}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white transition-all duration-300 rounded-2xl"
/>
</div>

<div className="space-y-2">
<Label htmlFor="email" className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Email Address
</Label>

<Input
id="email"
type="email"
placeholder="email@example.com"
required
value={formData.email}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white transition-all duration-300 rounded-2xl"
/>
</div>

{/* Phone hidden but not deleted */}
{/*
<div className="space-y-2">
<Label htmlFor="phone">Phone Number</Label>
<Input id="phone" type="tel" value={formData.phone} onChange={handleInputChange}/>
</div>
*/}

</div>

)}

{/* STEP 2 kept but empty to preserve structure */}

{step === 2 && (
<>
{/* Campus + Grade hidden but preserved */}

{/*
<Select onValueChange={(v) => handleSelectChange("campus", v)}>
<SelectTrigger><SelectValue placeholder="Select Campus"/></SelectTrigger>
<SelectContent>
<SelectItem value="main">Main Campus</SelectItem>
</SelectContent>
</Select>

<Select onValueChange={(v) => handleSelectChange("grade", v)}>
<SelectTrigger><SelectValue placeholder="Select Grade"/></SelectTrigger>
<SelectContent>
<SelectItem value="1">Grade 1</SelectItem>
</SelectContent>
</Select>
*/}
</>
)}

<motion.div
whileHover={{ scale: 1.02 }}
whileTap={{ scale: 0.98 }}
className="pt-2"
>

<Button
type="submit"
className="w-full bg-accent hover:bg-accent/90 text-white font-black h-16 text-lg rounded-2xl shadow-[0_20px_40px_-10px_rgba(var(--accent),0.4)] transition-all flex items-center justify-center"
>

{step === 1 ? "Next Step" : "Continue Application"}

</Button>

</motion.div>

<div className="flex items-center justify-center space-x-2 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">

<ShieldCheck className="w-3 h-3 text-emerald-500" />

<span>Secure data transmission</span>

</div>

</form>

</CardContent>

</Card>

  );
}