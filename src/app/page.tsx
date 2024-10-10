import { LoginDialogProvider } from "@/components/login-dialog";
import LandingNavbar from "./landing/landing-navbar";
import LandingContent from "./landing/landing-content";

export default function LandingPage() {
  return (
    <LoginDialogProvider>
      <div className="flex flex-col min-h-screen">
        <LandingNavbar />
        <main className="flex-grow">
          <LandingContent />
        </main>
        <footer className="bg-primary-foreground py-6 text-center">
          <p className="text-sm text-muted-foreground">
            © 2023 Your Company. All rights reserved.
          </p>
        </footer>
      </div>
    </LoginDialogProvider>
  );
}
