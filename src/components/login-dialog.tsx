"use client";

import { useState, createContext, useContext, ReactNode } from "react";
import { useRouter } from "next/navigation";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

interface LoginDialogContextType {
  openLoginDialog: () => void;
  closeLoginDialog: () => void;
}

const LoginDialogContext = createContext<LoginDialogContextType>({
  openLoginDialog: () => {},
  closeLoginDialog: () => {},
});

export function LoginDialogProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const { toast } = useToast();

  const openLoginDialog = () => setIsOpen(true);
  const closeLoginDialog = () => setIsOpen(false);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === "root@gmail.com" && password === "root") {
      closeLoginDialog();
      router.push("/home");
    } else {
      toast({
        title: "Invalid credentials",
        description: "Please sign up or try again with correct credentials.",
        variant: "destructive",
      });
    }
  };

  const handleSignUp = () => {
    closeLoginDialog();
    toast({
      title: "Sign Up",
      description: "Sign up functionality is not implemented yet.",
    });
  };

  return (
    <LoginDialogContext.Provider value={{ openLoginDialog, closeLoginDialog }}>
      {children}
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Log in</DialogTitle>
            <DialogDescription>
              Enter your credentials to log in to your account.
            </DialogDescription>
          </DialogHeader>
          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="Enter your email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="password">Password</Label>
              <Input
                id="password"
                type="password"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <Button type="submit" className="w-full">
              Log in
            </Button>
          </form>
          <DialogFooter>
            <div className="w-full text-center">
              <p className="text-sm text-muted-foreground mb-2">
                Don&apos;t have an account?
              </p>
              <Button
                onClick={handleSignUp}
                variant="outline"
                className="w-full"
              >
                Sign Up
              </Button>
            </div>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </LoginDialogContext.Provider>
  );
}

export const useLoginDialog = () => useContext(LoginDialogContext);
