import { Mail, MapPin, Phone } from "lucide-react"

export function CompanyInfo() {
  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold mb-4">Ramadi Empire</h2>
        <p className="text-muted-foreground">Ramadi Empire cc2025</p>
      </div>

      <div className="grid gap-6">
        <div className="flex items-start gap-4">
          <MapPin className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">Location</h3>
            <p className="text-muted-foreground">Senet House, 157 Van Riebeeck Ave</p>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Mail className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">Email</h3>
            <a
              href="mailto:info@ramadiempire.com"
              className="text-muted-foreground hover:text-primary transition-colors"
            >
              info@ramadiempire.com
            </a>
          </div>
        </div>

        <div className="flex items-start gap-4">
          <Phone className="w-6 h-6 text-primary" />
          <div>
            <h3 className="font-semibold">Phone</h3>
            <a href="tel:0762232914" className="text-muted-foreground hover:text-primary transition-colors">
              076 223 2914
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

