import { WaitlistForm } from "@/components/waitlist-form"
import { WaitlistFaq } from "@/components/waitlist-faq"

export default function WaitlistPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Join the Future of Contract Management
                </h1>
                <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
                  Be among the first to experience AI-powered contract automation. Join our waitlist today and get early
                  access when we launch.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
              <WaitlistForm />
              <div className="mx-auto w-full max-w-sm space-y-2">
                <div className="rounded-xl border bg-background p-6 shadow-lg">
                  <h3 className="text-xl font-bold mb-4">Why Join?</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-4">
                      <div className="size-2 mt-2 rounded-full bg-primary" />
                      <div>
                        <h4 className="font-semibold">Early Access</h4>
                        <p className="text-sm text-muted-foreground">
                          Be the first to try our AI-powered contract automation
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="size-2 mt-2 rounded-full bg-primary" />
                      <div>
                        <h4 className="font-semibold">Exclusive Benefits</h4>
                        <p className="text-sm text-muted-foreground">
                          Get special pricing and features available only to waitlist members
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-4">
                      <div className="size-2 mt-2 rounded-full bg-primary" />
                      <div>
                        <h4 className="font-semibold">Priority Support</h4>
                        <p className="text-sm text-muted-foreground">
                          Receive dedicated support and onboarding assistance
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
        <WaitlistFaq />
      </div>
    </main>
  )
}

