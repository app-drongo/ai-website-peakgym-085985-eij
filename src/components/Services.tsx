// Services Component
// Generated: 2025-08-25T19:44:45.880Z
// Template: services-c001
// Context: Homepage
// Position: pages.0.sections.2

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { 
  Dumbbell,
  Users,
  Apple,
  Target,
  Heart,
  Trophy,
  Clock,
  Zap,
  ArrowRight
} from "lucide-react"

export default function Services() {
  const services = [
    {
      id: "personal-training",
      title: "Personal Training",
      description: "One-on-one coaching with certified trainers to maximize your results and ensure proper form.",
      icon: Dumbbell,
      badge: "Popular",
      features: ["Custom workout plans", "Form correction", "Progress tracking"],
      link: "/services/personal-training"
    },
    {
      id: "group-classes",
      title: "Group Fitness Classes",
      description: "High-energy group workouts including HIIT, yoga, spin, Zumba, and strength training.",
      icon: Users,
      features: ["20+ class types", "All fitness levels", "Expert instructors"],
      link: "/services/group-classes"
    },
    {
      id: "nutrition-coaching",
      title: "Nutrition Coaching",
      description: "Personalized meal planning and nutrition guidance to fuel your fitness transformation.",
      icon: Apple,
      badge: "New",
      features: ["Custom meal plans", "Macro tracking", "Supplement guidance"],
      link: "/services/nutrition"
    },
    {
      id: "transformation-program",
      title: "Body Transformation",
      description: "Comprehensive 12-week programs combining training, nutrition, and lifestyle coaching.",
      icon: Target,
      features: ["12-week program", "Body composition analysis", "Lifestyle coaching"],
      link: "/services/transformation"
    },
    {
      id: "wellness-recovery",
      title: "Wellness & Recovery",
      description: "Recovery services including massage therapy, stretching sessions, and wellness programs.",
      icon: Heart,
      features: ["Massage therapy", "Stretching sessions", "Mindfulness training"],
      link: "/services/wellness"
    },
    {
      id: "athletic-performance",
      title: "Athletic Performance",
      description: "Sport-specific training programs for athletes looking to enhance their competitive edge.",
      icon: Trophy,
      features: ["Sport-specific training", "Performance testing", "Injury prevention"],
      link: "/services/athletic"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Our Services
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Comprehensive Fitness
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Solutions for You
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From personal training to nutrition coaching, we offer everything you need 
            to achieve your fitness goals and maintain a healthy lifestyle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => {
            const Icon = service.icon
            
            return (
              <Card 
                key={service.id}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient on Hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center justify-between mb-4">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    {service.badge && (
                      <Badge variant="secondary" className="text-xs">
                        {service.badge}
                      </Badge>
                    )}
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {service.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative space-y-4">
                  <CardDescription className="text-base leading-relaxed">
                    {service.description}
                  </CardDescription>
                  
                  {/* Features List */}
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-muted-foreground">
                        <div className="size-1.5 rounded-full bg-primary mr-2 flex-shrink-0" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                  
                  {/* Learn More Link */}
                  <Button 
                    variant="ghost" 
                    className="w-full group/btn justify-between hover:bg-primary/10"
                    asChild
                  >
                    <a href={service.link}>
                      <span>Book Session</span>
                      <ArrowRight className="size-4 transition-transform group-hover/btn:translate-x-1" />
                    </a>
                  </Button>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300 pointer-events-none" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Not sure which service is right for you?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg">
              Book Free Consultation
            </Button>
            <Button size="lg" variant="outline">
              Take Fitness Assessment
              <ArrowRight className="ml-2 size-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}