import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Layout from "@/components/Layout"
import { ShoppingCart } from "lucide-react"


const products = [
  {
    id: "1",
    name: "Library Stool Chair",
    price: 20.00,
    image: "/images/card.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "2",
    name: "Luxury Rest Chair",
    price: 99.00,
    image: "/images/Library-Stool-Chair 1.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "3",
    name: "Modern Office Chair",
    price: 89.00,
    image: "/images/Library-Stool-Chair 3.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "4",
    name: "Comfort Plus Chair",
    price: 129.00,
    image: "/images/Library-Stool-Chair 4.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "5",
    name: "Executive Chair",
    price: 149.00,
    image: "/images/Wooden Chair.png",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
  {
    id: "6",
    name: "Modern Office Chair",
    price: 149,
    image: "/images/Library-Stool-Chair 6.png",  
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nullam tincidunt erat enim. Lorem ipsum dolor sit amet, consectetur adipisicing"
  },
]

type Params = {
  params: {
    id: any
  }
}

export default function ProductPage({ params }: Params) {
  const { id } = params

  const product = products.find(p => p.id === id) || products[0]
  const featuredProducts = products.filter(p => p.id !== id)
  return (
    <Layout>

      {/* Product Details Section */}
      <main className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden group">
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-cover transition-transform duration-300 group-hover:scale-105"
              priority
            />
          </div>

          {/* Product Info */}
          <div className="flex flex-col  justify-center">
            <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
            <div className="w-28 inline-block bg-[#007580] text-primary-foreground pl-4 py-1 rounded-full text-sm mb-6">
              ${product.price.toFixed(2)} USD
            </div>
            <p className="text-gray-600 mb-8">
              {product.description}
            </p>
            <Button 
              className="w-fit transition-all duration-300 hover:scale-105 bg-[#007580]"
            >
              <ShoppingCart/>
              Add To Cart
            </Button>
          </div>
        </div>

        {/* Featured Products Section */}
        <section className="mt-24">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Featured Products</h2>
            <Link 
              href="/products" 
              className="text-primary hover:underline transition-colors duration-300"
            >
              View all
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {featuredProducts.map((item) => (
              <Link 
                key={item.id}
                href={`/product/${item.id}`}
                className="group"
              >
                <div className="relative aspect-square bg-gray-50 rounded-lg overflow-hidden mb-3">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <h3 className="font-medium text-gray-900 transition-colors duration-300 group-hover:text-primary">
                  {item.name}
                </h3>
                <p className="text-gray-600">
                  ${item.price.toFixed(2)}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  )
}

