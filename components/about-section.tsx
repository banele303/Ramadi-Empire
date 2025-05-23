import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"

export function AboutSection() {
  return (
    <section className="py-20" id="about">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/new/rc3.jpeg"
              alt="Ramadi Empire team working on a project"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              quality={50}
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Building Excellence, Delivering Results</h2>
            <h3 className="text-xl font-semibold">About Ramadi Empire</h3>
            <p className="text-muted-foreground">
            At Ramadi Empire, we are committed to delivering world-class construction solutions that redefine skylines and transform communities. With expertise in engineering, procurement, and construction management (EPCM), we execute projects of all sizes with precision, efficiency, and innovation.
<br/><br/>
From commercial and residential developments to large-scale infrastructure projects, we provide end-to-end construction services tailored to meet the highest industry standards. Our skilled professionals, advanced machinery, and cutting-edge technology ensure seamless execution at every stage—from planning and design to construction and project completion.
<br/><br/>
Safety, sustainability, and quality are at the core of everything we do. We adhere to strict safety regulations, employ eco-friendly construction practices, and prioritize durability in every structure we build. Whether creating modern urban spaces, roads, bridges, or high-rise buildings, Ramadi Empire is dedicated to constructing spaces that stand the test of time.

With a legacy of excellence and a vision for the future, Ramadi Empire is your trusted partner in construction.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

