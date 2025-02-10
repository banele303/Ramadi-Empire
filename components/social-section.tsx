import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export function SocialSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-12">
          <h2 className="text-3xl md:text-4xl font-bold">Follow us on social</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="relative aspect-square">
                <Image
                  src={`https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-02-07%20at%2011.15.04-WvtpYupOZDbb7n0ZT58UTZwvOGwLXH.png`}
                  alt={`Social media image ${i}`}
                  fill
                  className="object-cover rounded-lg hover:opacity-80 transition-opacity"
                />
              </div>
            ))}
          </div>

          <Button size="lg" variant="outline" asChild>
            <Link href="/social">Social</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}

