import Image from "next/image"
import Link from "next/link"
import { format } from "date-fns"

interface PortfolioItem {
  _id: string
  title: string
  slug: { current: string }
  image: string
  category: string
  completionDate: string
}

export default function PortfolioList({ items }: { items: PortfolioItem[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <Link href={`/portfolio/${item.slug.current}`} key={item._id} className="block">
          <div className="border rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
            <Image
              src={item.image || "/placeholder.svg"}
              alt={item.title}
              width={400}
              height={300}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{item.title}</h2>
              <p className="text-sm text-muted-foreground mb-1">{item.category}</p>
              <p className="text-sm text-muted-foreground">{format(new Date(item.completionDate), "MMMM d, yyyy")}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  )
}

