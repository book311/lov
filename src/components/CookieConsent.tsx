import { useState, useEffect } from "react";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetFooter,
} from "@/components/ui/sheet";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export const CookieConsent = () => {
  const [open, setOpen] = useState(false);
  const [cookiePreference, setCookiePreference] = useState("essential");

  useEffect(() => {
    const hasConsent = localStorage.getItem("cookieConsent");
    if (!hasConsent) {
      setOpen(true);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted");
    localStorage.setItem("cookiePreference", cookiePreference);
    setOpen(false);
  };

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined");
    localStorage.setItem("cookiePreference", "essential");
    setOpen(false);
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="bottom" className="sm:max-w-xl sm:mx-auto p-4">
        <SheetHeader className="space-y-2">
          <SheetTitle className="text-base">Cookie Preferences</SheetTitle>
          <SheetDescription className="space-y-2 text-sm">
            <p>
              We use cookies to enhance your browsing experience, serve personalized content, and analyze our traffic. Please select your cookie preferences below.
            </p>
            <RadioGroup
              value={cookiePreference}
              onValueChange={setCookiePreference}
              className="space-y-2"
            >
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="essential" id="essential" />
                <Label htmlFor="essential" className="text-sm leading-tight">
                  <span className="font-medium block">Essential Cookies Only</span>
                  These cookies are necessary for the website to function.
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="analytics" id="analytics" />
                <Label htmlFor="analytics" className="text-sm leading-tight">
                  <span className="font-medium block">Analytics Cookies</span>
                  Help us improve our website by collecting usage information.
                </Label>
              </div>
              <div className="flex items-start space-x-3">
                <RadioGroupItem value="all" id="all" />
                <Label htmlFor="all" className="text-sm leading-tight">
                  <span className="font-medium block">All Cookies</span>
                  Accept all cookies including those for personalized content.
                </Label>
              </div>
            </RadioGroup>
          </SheetDescription>
        </SheetHeader>
        <SheetFooter className="sm:flex-row sm:space-x-4 mt-4">
          <Button
            variant="outline"
            onClick={handleDecline}
            size="sm"
          >
            Decline All
          </Button>
          <Button
            onClick={handleAccept}
            className="bg-accent hover:bg-accent-soft"
            size="sm"
          >
            Accept Selected
          </Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
};