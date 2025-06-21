import { Search, MapPin, Calendar, Users, Star, Heart, Coffee, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

export default function HomePage() {
  const featuredProperties = [
    {
      id: 1,
      title: "Modern Downtown Apartment",
      location: "San Francisco, CA",
      price: 150,
      rating: 4.9,
      reviews: 127,
      image: "/placeholder.svg?height=300&width=400",
      host: "Sarah Chen",
      hostImage: "/placeholder-user.jpg",
      amenities: ["Wifi", "Kitchen", "Parking"],
      type: "Entire apartment",
    },
    {
      id: 2,
      title: "Cozy Beach House",
      location: "Malibu, CA",
      price: 280,
      rating: 4.8,
      reviews: 89,
      image: "/placeholder.svg?height=300&width=400",
      host: "Mike Johnson",
      hostImage: "/placeholder-user.jpg",
      amenities: ["Beach access", "Wifi", "Parking"],
      type: "Entire house",
    },
    {
      id: 3,
      title: "Luxury City Loft",
      location: "New York, NY",
      price: 220,
      rating: 4.7,
      reviews: 203,
      image: "/placeholder.svg?height=300&width=400",
      host: "Emma Davis",
      hostImage: "/placeholder-user.jpg",
      amenities: ["Gym", "Wifi", "Concierge"],
      type: "Entire loft",
    },
    {
      id: 4,
      title: "Mountain Cabin Retreat",
      location: "Aspen, CO",
      price: 195,
      rating: 4.9,
      reviews: 156,
      image: "/placeholder.svg?height=300&width=400",
      host: "David Wilson",
      hostImage: "/placeholder-user.jpg",
      amenities: ["Fireplace", "Hot tub", "Parking"],
      type: "Entire cabin",
    },
  ]

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">R</span>
              </div>
              <span className="text-xl font-bold text-gray-900">RentHub</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Stays
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Experiences
              </Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 font-medium">
                Become a Host
              </Link>
            </nav>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="hidden md:flex">
                RentHub your home
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Avatar className="w-8 h-8">
                  <AvatarImage src="/placeholder-user.jpg" />
                  <AvatarFallback>U</AvatarFallback>
                </Avatar>
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-rose-50 to-pink-50 py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              Find your perfect
              <span className="text-rose-500"> rental home</span>
            </h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Discover unique homes and apartments from trusted landlords around the world
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <Card className="p-2 shadow-lg">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="Where are you going?" className="pl-10 border-0 focus-visible:ring-0 h-14" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="Check in" className="pl-10 border-0 focus-visible:ring-0 h-14" />
                </div>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <Input placeholder="Check out" className="pl-10 border-0 focus-visible:ring-0 h-14" />
                </div>
                <div className="flex">
                  <div className="relative flex-1">
                    <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                    <Input placeholder="Guests" className="pl-10 border-0 focus-visible:ring-0 h-14" />
                  </div>
                  <Button className="ml-2 h-14 px-8 bg-rose-500 hover:bg-rose-600">
                    <Search className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Featured Properties */}
      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Featured Properties</h2>
            <p className="text-lg text-gray-600">Handpicked homes from our most trusted landlords</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProperties.map((property) => (
              <Link key={property.id} href={`/property/${property.id}`}>
                <Card className="group cursor-pointer border-0 shadow-sm hover:shadow-lg transition-all duration-300">
                  <div className="relative overflow-hidden rounded-t-lg">
                    <Image
                      src={property.image || "/placeholder.svg"}
                      alt={property.title}
                      width={400}
                      height={300}
                      className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <Button
                      variant="ghost"
                      size="icon"
                      className="absolute top-3 right-3 bg-white/80 hover:bg-white rounded-full"
                    >
                      <Heart className="w-4 h-4" />
                    </Button>
                    <Badge className="absolute top-3 left-3 bg-white text-gray-900">{property.type}</Badge>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="font-semibold text-gray-900 truncate">{property.title}</h3>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span className="text-sm font-medium">{property.rating}</span>
                      </div>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">{property.location}</p>
                    <div className="flex items-center space-x-2 mb-3">
                      <Avatar className="w-6 h-6">
                        <AvatarImage src={property.hostImage || "/placeholder.svg"} />
                        <AvatarFallback>{property.host[0]}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm text-gray-600">Hosted by {property.host}</span>
                    </div>
                    <div className="flex flex-wrap gap-1 mb-3">
                      {property.amenities.slice(0, 3).map((amenity) => (
                        <Badge key={amenity} variant="secondary" className="text-xs">
                          {amenity}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-gray-900">${property.price}</span>
                        <span className="text-gray-600 text-sm"> / night</span>
                      </div>
                      <span className="text-sm text-gray-500">{property.reviews} reviews</span>
                    </div>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Browse by Category</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { name: "Beachfront", icon: Waves, count: "2,847 properties" },
              { name: "City Center", icon: Coffee, count: "5,234 properties" },
              { name: "Mountain", icon: MapPin, count: "1,456 properties" },
              { name: "Luxury", icon: Star, count: "892 properties" },
            ].map((category) => (
              <Card key={category.name} className="p-6 text-center hover:shadow-lg transition-shadow cursor-pointer">
                <category.icon className="w-12 h-12 mx-auto mb-4 text-rose-500" />
                <h3 className="font-semibold text-gray-900 mb-2">{category.name}</h3>
                <p className="text-sm text-gray-600">{category.count}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-rose-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to start hosting?</h2>
          <p className="text-xl text-rose-100 mb-8">
            Join thousands of landlords earning extra income by listing their properties
          </p>
          <Button size="lg" variant="secondary" className="bg-white text-rose-500 hover:bg-gray-50">
            Become a Host
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-rose-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">R</span>
                </div>
                <span className="text-xl font-bold">RentHub</span>
              </div>
              <p className="text-gray-400">Connecting renters with trusted landlords worldwide.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Safety
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Cancellation
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Community</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Forum
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Hosting</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white">
                    Become a Host
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Host Resources
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white">
                    Community Forum
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 RentHub. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
