"use client";

import { useLoginDialog } from "@/components/login-dialog";
import { Button } from "@/components/ui/button";

export default function LandingContent() {
  const { openLoginDialog } = useLoginDialog();

  return (
    <div className="bg-background">
      <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-primary sm:text-5xl md:text-6xl">
            Welcome to Our Amazing App
          </h1>
          <p className="mt-3 max-w-md mx-auto text-base text-muted-foreground sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
            Experience the power of our innovative solution. Streamline your
            workflow, boost productivity, and achieve your goals with ease.
          </p>
          <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
            <div className="rounded-md shadow">
              <Button onClick={openLoginDialog} size="lg">
                Get Started
              </Button>
            </div>
            <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-primary-foreground">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-extrabold text-primary text-center">
            Key Features
          </h2>
          <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-3">
            {[
              { title: "Feature 1", description: "Description of feature 1" },
              { title: "Feature 2", description: "Description of feature 2" },
              { title: "Feature 3", description: "Description of feature 3" },
            ].map((feature, index) => (
              <div
                key={index}
                className="bg-background rounded-lg shadow-lg p-6"
              >
                <h3 className="text-lg font-medium text-primary">
                  {feature.title}
                </h3>
                <p className="mt-2 text-base text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
