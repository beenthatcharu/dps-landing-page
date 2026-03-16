"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { ArrowLeft, Loader2 } from "lucide-react";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function Step2Page() {

  const router = useRouter();
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [step1Data, setStep1Data] = useState<any>(null);

  const [formData, setFormData] = useState({
    parentName: "",
    address: "",
    city: "",
    preferredStartDate: "",
    message: "",
    phone: "",
    campus: "",
    grade: "",
  });

  useEffect(() => {
    const saved = localStorage.getItem("dps_step_1");
    if (!saved) {
      router.push("/");
      return;
    }
    setStep1Data(JSON.parse(saved));
  }, [router]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {

    e.preventDefault();
    setLoading(true);

    const combinedData = { ...step1Data, ...formData };

    const portalId = "YOUR_PORTAL_ID";
    const formGuid = "YOUR_FORM_GUID";
    const endpoint = `https://api.hsforms.com/submissions/v3/integration/submit/${portalId}/${formGuid}`;

    const hubspotPayload = {
      fields: [
        { name: "firstname", value: combinedData.fullName },
        { name: "child_name", value: combinedData.childName },
        { name: "email", value: combinedData.email },
        { name: "phone", value: combinedData.phone },
        { name: "campus", value: combinedData.campus },
        { name: "grade", value: combinedData.grade },
        { name: "parent_name", value: combinedData.parentName },
        { name: "address", value: combinedData.address },
        { name: "city", value: combinedData.city },
        { name: "preferred_start_date", value: combinedData.preferredStartDate },
        { name: "message", value: combinedData.message },
      ],
      context: {
        pageUri: window.location.href,
        pageName: "DPS Admission Gateway - Step 2",
      }
    };

    try {

      console.log("Submitting to HubSpot:", hubspotPayload);

      await new Promise(r => setTimeout(r, 1500));

      toast({
        title: "Success!",
        description: "Your admission enquiry has been submitted successfully.",
      });

      localStorage.removeItem("dps_step_1");
      router.push("/");

    } catch (error) {

      console.error(error);

      toast({
        variant: "destructive",
        title: "Error",
        description: "Something went wrong. Please try again later.",
      });

    } finally {

      setLoading(false);

    }

  };

  if (!step1Data) return null;

  return (

    <div className="min-h-screen bg-background flex flex-col">

      <div className="flex-grow py-24 px-6 flex items-center justify-center">

        <div className="w-full max-w-2xl space-y-8">

          <Link href="/" className="inline-flex items-center text-primary hover:underline font-bold transition-all">
            <ArrowLeft className="mr-2 w-4 h-4" />
            Back to Step 1
          </Link>

          <Card className="shadow-2xl border-none">

            <CardHeader className="bg-primary text-primary-foreground rounded-t-xl py-8">

              <div className="flex justify-between items-center mb-4">
                <span className="bg-white/20 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                  Step 2 of 2
                </span>
              </div>

              <CardTitle className="text-3xl font-bold font-headline">
                Additional Information
              </CardTitle>

              <CardDescription className="text-primary-foreground/80">
                Help us understand your requirements better.
              </CardDescription>

            </CardHeader>

            <CardContent className="pt-8 pb-10">

              <form onSubmit={handleSubmit} className="space-y-6">

                {/* ONLY THESE 3 FIELDS */}

                <div className="space-y-2">
                  <Label htmlFor="phone">Phone Number</Label>
                  <Input
                    id="phone"
                    placeholder="+1 234 567 890"
                    required
                    value={formData.phone}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="campus">School Campus</Label>
                  <Input
                    id="campus"
                    placeholder="Preferred campus"
                    required
                    value={formData.campus}
                    onChange={handleInputChange}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="grade">Applying for Grade</Label>
                  <Input
                    id="grade"
                    placeholder="e.g. Grade 1"
                    required
                    value={formData.grade}
                    onChange={handleInputChange}
                  />
                </div>

                {/* OTHER FIELDS KEPT BUT COMMENTED (NOT DELETED) */}

                {/*
                Parent Name
                Address
                City
                Preferred Start Date
                Message
                */}

                <Button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent hover:bg-accent/90 text-white font-bold h-14 text-lg shadow-xl shadow-accent/20 transition-all active:scale-[0.98]"
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                      Submitting Enquiry...
                    </>
                  ) : (
                    "Complete Submission"
                  )}
                </Button>

              </form>

            </CardContent>

          </Card>

        </div>

      </div>

      <Footer />

    </div>

  );

}