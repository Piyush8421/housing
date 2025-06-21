import { ArrowLeft, Share, Heart, Star, MapPin, Wifi, Car, Coffee, Waves } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@/components/ui/separator"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

export default function PropertyPage() {
  const property = {
    id: 1,
    title: "Modern Downtown Apartment",
    location: "San Francisco, CA",
    price: 150,
    rating: 4.9,
    reviews: 127,
    host: {
      name: "Sarah Chen",
      image: "/placeholder-user.jpg",
      joinDate: "2019",
      isSuperhostBadge: true,
      responseRate: "100%",
      responseTime: "within an hour",
    },
    images: [
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
      "/placeholder.svg?height=400&width=600",
    ],
    amenities: [
      { name: "Wifi", icon: Wifi },
      { name: "Free parking", icon: Car },
      { name: "Kitchen", icon: Coffee },
      { name: "Pool", icon: Waves },
    ],
    description:
      "Beautiful modern apartment in the heart of downtown San Francisco. Perfect for business travelers and tourists alike. The space features floor-to-ceiling windows with stunning city views, a fully equipped kitchen, and all the amenities you need for a comfortable stay.",
    bedrooms: 2,
    bathrooms: 2,
    guests: 4,
    type: "Entire apartment",
  }

  const reviews = [
    {
      id: 1,
      user: "Mike Johnson",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      date: "March 2024",
      comment:
        "Amazing place! Sarah was a wonderful host and the apartment exceeded our expectations. The location is perfect and the views are incredible.",
    },
    {
      id: 2,
      user: "Emma Davis",
      avatar: "/placeholder-user.jpg",
      rating: 5,
      date: "February 2024",
      comment: "Clean, modern, and exactly as described. Would definitely stay here again!",
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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back Button */}
        <Link href="/" className="inline-flex items-center space-x-2 text-gray-600 hover:text-gray-900 mb-6">
          <ArrowLeft className="w-4 h-4" />
          <span>Back to search</span>
        </Link>

        {/* Property Header */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-3xl font-bold text-gray-900">{property.title}</h1>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="sm" className="space-x-1">
                <Share className="w-4 h-4" />
                <span>Share</span>
              </Button>
              <Button variant="ghost" size="sm" className="space-x-1">
                <Heart className="w-4 h-4" />
                <span>Save</span>
              </Button>
            </div>
          </div>
          <div className="flex items-center space-x-4 text-sm">
            <div className="flex items-center space-x-1">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              <span className="font-medium">{property.rating}</span>
              <span className="text-gray-600">({property.reviews} reviews)</span>
            </div>
            <div className="flex items-center space-x-1">
              <MapPin className="w-4 h-4 text-gray-400" />
              <span className="text-gray-600">{property.location}</span>
            </div>
          </div>
        </div>

        {/* Image Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2 mb-8 rounded-xl overflow-hidden">
          <div className="md:col-span-2 md:row-span-2">
            <Image
              src={property.images[0] || "/placeholder.svg"}
              alt="Main property image"
              width={600}
              height={400}
              className="w-full h-64 md:h-full object-cover"
            />
          </div>
          {property.images.slice(1, 5).map((image, index) => (
            <div key={index}>
              <Image
                src={image || "/placeholder.svg"}
                alt={`Property image ${index + 2}`}
                width={300}
                height={200}
                className="w-full h-32 object-cover"
              />
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Property Info */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">{property.type}</h2>
                  <p className="text-gray-600">
                    {property.guests} guests · {property.bedrooms} bedrooms · {property.bathrooms} bathrooms
                  </p>
                </div>
                <Avatar className="w-12 h-12">
                  <AvatarImage src={property.host.image || "/placeholder.svg"} />
                  <AvatarFallback>{property.host.name[0]}</AvatarFallback>
                </Avatar>
              </div>
              <Separator />
            </div>

            {/* Host Info */}
            <div className="flex items-center space-x-4">
              <Avatar className="w-16 h-16">
                <AvatarImage src={property.host.image || "/placeholder.svg"} />
                <AvatarFallback>{property.host.name[0]}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="font-semibold text-gray-900">Hosted by {property.host.name}</h3>
                <p className="text-gray-600">Joined in {property.host.joinDate}</p>
                {property.host.isSuperhostBadge && <Badge className="mt-1 bg-rose-100 text-rose-700">Superhost</Badge>}
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">About this place</h3>
              <p className="text-gray-600 leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">What this place offers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {property.amenities.map((amenity) => (
                  <div key={amenity.name} className="flex items-center space-x-3">
                    <amenity.icon className="w-5 h-5 text-gray-600" />
                    <span className="text-gray-700">{amenity.name}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews */}
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                <span className="text-lg font-semibold">
                  {property.rating} · {property.reviews} reviews
                </span>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {reviews.map((review) => (
                  <div key={review.id} className="space-y-3">
                    <div className="flex items-center space-x-3">
                      <Avatar className="w-10 h-10">
                        <AvatarImage src={review.avatar || "/placeholder.svg"} />
                        <AvatarFallback>{review.user[0]}</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-gray-900">{review.user}</p>
                        <p className="text-sm text-gray-600">{review.date}</p>
                      </div>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))}
              </div>
              <Button variant="outline" className="mt-6">
                Show all {property.reviews} reviews
              </Button>
            </div>
          </div>

          {/* Booking Card */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24">
              <CardHeader>
                <CardTitle className="flex items-center justify-between">
                  <span className="text-2xl font-bold">
                    ${property.price} <span className="text-base font-normal text-gray-600">/ night</span>
                  </span>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    <span className="text-sm font-medium">{property.rating}</span>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="grid grid-cols-2 gap-2">
                  <div className="border rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-600 uppercase">Check-in</label>
                    <Input type="date" className="border-0 p-0 text-sm" />
                  </div>
                  <div className="border rounded-lg p-3">
                    <label className="text-xs font-medium text-gray-600 uppercase">Check-out</label>
                    <Input type="date" className="border-0 p-0 text-sm" />
                  </div>
                </div>
                <div className="border rounded-lg p-3">
                  <label className="text-xs font-medium text-gray-600 uppercase">Guests</label>
                  <select className="w-full border-0 p-0 text-sm bg-transparent">
                    <option>1 guest</option>
                    <option>2 guests</option>
                    <option>3 guests</option>
                    <option>4 guests</option>
                  </select>
                </div>
                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white">Reserve</Button>
                <p className="text-center text-sm text-gray-600">You won't be charged yet</p>

                <div className="space-y-2 pt-4 border-t">
                  <div className="flex justify-between">
                    <span className="text-gray-600">${property.price} x 5 nights</span>
                    <span>${property.price * 5}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cleaning fee</span>
                    <span>$50</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Service fee</span>
                    <span>$67</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>${property.price * 5 + 50 + 67}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Host Contact */}
            <Card className="mt-6">
              <CardContent className="p-6">
                <div className="flex items-center space-x-4 mb-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={property.host.image || "/placeholder.svg"} />
                    <AvatarFallback>{property.host.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">Contact {property.host.name}</h3>
                    <p className="text-sm text-gray-600">Response rate: {property.host.responseRate}</p>
                  </div>
                </div>
                <Textarea placeholder="Hi Sarah! I'm interested in your property..." className="mb-3" />
                <Button variant="outline" className="w-full">
                  Send Message
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
