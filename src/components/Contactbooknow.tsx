// Contactbooknow Component
// Generated: 2025-08-25T19:44:45.881Z
// Template: contact-c001
// Context: Book Now
// Position: pages.5.sections.1

"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send,
  Calendar,
  Dumbbell,
  Users,
  Apple
} from "lucide-react"

export default function Contactbooknow() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission here
    console.log("Booking request submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  const bookingOptions = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one fitness coaching",
      contact: "Book 1-hour sessions",
      action: "Schedule Training"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "Join our fitness community",
      contact: "50+ classes weekly",
      action: "Reserve Spot"
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description: "Personalized meal planning",
      contact: "Expert nutritionists",
      action: "Book Consultation"
    }
  ]

  const gymLocations = [
    {
      city: "Downtown",
      address: "123 Fitness Ave, Suite 100",
      hours: "5:00 AM - 11:00 PM"
    },
    {
      city: "Westside",
      address: "456 Strength Street, Building B",
      hours: "24/7 Access"
    },
    {
      city: "Northside",
      address: "789 Performance Plaza, Floor 2",
      hours: "5:00 AM - 10:00 PM"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Book Now
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Start Your Fitness
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Transformation
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Ready to take the next step? Book your session, class, or consultation 
            and let our expert team guide you towards your fitness goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Booking Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Book Your Session
              </CardTitle>
              <CardDescription>
                Fill out the form below and we'll confirm your booking within 2 hours.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium mb-2">
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Select a service</option>
                    <option value="personal-training">Personal Training</option>
                    <option value="group-classes">Group Classes</option>
                    <option value="nutrition-coaching">Nutrition Coaching</option>
                    <option value="gym-membership">Gym Membership</option>
                    <option value="consultation">Free Consultation</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Additional Notes
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Tell us about your fitness goals or any specific requirements..."
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Book My Session
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Booking Information */}
          <div className="space-y-8">
            {/* Service Options */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Dumbbell className="size-5 text-primary" />
                What Can You Book?
              </h3>
              <div className="grid gap-4">
                {bookingOptions.map((option, index) => {
                  const Icon = option.icon
                  return (
                    <Card key={index} className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group">
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{option.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">{option.description}</p>
                            <p className="font-medium text-primary">{option.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>

            {/* Gym Locations */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Our Locations
              </h3>
              <div className="space-y-3">
                {gymLocations.map((location, index) => (
                  <div key={index} className="p-4 border border-border/50 rounded-lg">
                    <div className="flex items-start justify-between">
                      <div>
                        <h4 className="font-semibold">{location.city} Location</h4>
                        <p className="text-sm text-muted-foreground mt-1">{location.address}</p>
                      </div>
                      <Badge variant="secondary" className="text-xs">
                        {location.hours}
                      </Badge>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Contact & Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Contact & Hours
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Phone className="size-4 text-primary" />
                    <span className="text-sm">(555) PEAK-GYM</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="size-4 text-primary" />
                    <span className="text-sm">book@peakperformancegym.com</span>
                  </div>
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Calendar className="size-4" />
                    Same-day bookings available for most services
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}