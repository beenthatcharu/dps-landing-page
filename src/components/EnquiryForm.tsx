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

  // ✅ UPDATED FUNCTION (HubSpot API CONNECTED)
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
        headers: {
          "Content-Type": "application/json",
        },
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

      // redirect after success
      router.push("/thank-you");

    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (

<Card className="w-full bg-white/95 backdrop-blur-md text-foreground shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] border border-white/50 overflow-hidden rounded-[2.5rem]">

<div className="h-2 bg-gradient-to-r from-accent to-blue-600 w-full" />

<CardHeader className="space-y-3 p-10 pb-4">

<CardTitle className="text-3xl font-black font-headline text-primary tracking-tight">
 Enquire Now
</CardTitle>

<CardDescription className="text-muted-foreground/80 text-base font-medium" />

</CardHeader>

<CardContent className="p-10 pt-4">

{submitted ? (

<div className="flex flex-col items-center justify-center text-center space-y-6 py-10">

<h2 className="text-2xl font-bold text-primary">
🎉 Thank You!
</h2>

<p className="text-muted-foreground max-w-sm">
Your enquiry has been submitted successfully. Our team will contact you soon.
</p>

<Button
onClick={() => {
  setSubmitted(false);
  setStep(1);
}}
className="mt-4"
>
Submit Another Response
</Button>

</div>

) : (

<form onSubmit={handleSend} className="space-y-6">

{/* STEP 1 */}
{step === 1 && (

<div className="grid grid-cols-1 gap-5">

<div className="space-y-2">
<Label className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Name
</Label>

<Input
id="fullName"
placeholder="Your Name"
required
value={formData.fullName}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white rounded-2xl"
/>
</div>

<div className="space-y-2">
<Label className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Name of Child
</Label>

<Input
id="childName"
placeholder="Full name of student"
required
value={formData.childName}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white rounded-2xl"
/>
</div>

<div className="space-y-2">
<Label className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Email Address
</Label>

<Input
id="email"
type="email"
placeholder="email@example.com"
required
value={formData.email}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white rounded-2xl"
/>
</div>

</div>

)}

{/* STEP 2 */}
{step === 2 && (

<div className="grid grid-cols-1 gap-5">

<div className="space-y-2">
<Label className="text-[10px] uppercase tracking-[0.2em] font-black text-primary/40 ml-1">
Phone Number
</Label>

<Input
id="phone"
placeholder="+91 9876543210"
value={formData.phone}
onChange={handleInputChange}
className="h-14 bg-secondary/40 border-transparent focus:border-accent/20 focus:bg-white rounded-2xl"
/>
</div>

<Select onValueChange={(v) => handleSelectChange("campus", v)}>
<SelectTrigger className="h-14 rounded-2xl bg-secondary/40 border-transparent">
<SelectValue placeholder="Select Campus"/>
</SelectTrigger>
<SelectContent>
<SelectItem value="main">Main Campus</SelectItem>
<SelectItem value="branch">Branch Campus</SelectItem>
</SelectContent>
</Select>

<Select onValueChange={(v) => handleSelectChange("grade", v)}>
<SelectTrigger className="h-14 rounded-2xl bg-secondary/40 border-transparent">
<SelectValue placeholder="Select Grade"/>
</SelectTrigger>
<SelectContent>
<SelectItem value="nursery">Nursery</SelectItem>
<SelectItem value="kg">Kindergarten</SelectItem>
<SelectItem value="1">Grade 1</SelectItem>
</SelectContent>
</Select>

</div>

)}

<motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }} className="pt-2">

<Button
type="submit"
className="w-full bg-accent hover:bg-accent/90 text-white font-black h-16 text-lg rounded-2xl"
>
{step === 1 ? "Next Step" : "Submit"}
</Button>

</motion.div>

{step === 2 && (
<Button
type="button"
variant="ghost"
onClick={() => setStep(1)}
className="w-full text-sm"
>
← Back
</Button>
)}

<div className="flex items-center justify-center space-x-2 text-[10px] text-muted-foreground uppercase tracking-[0.2em] font-black">

<ShieldCheck className="w-3 h-3 text-emerald-500" />

<span>Secure data transmission</span>

</div>

</form>

)}

</CardContent>

</Card>

  );
}