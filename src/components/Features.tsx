// Features Component
// Generated: 2025-08-25T19:44:45.880Z
// Template: features-c001
// Context: Homepage
// Position: pages.0.sections.1

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Dumbbell, 
  Heart, 
  Users, 
  Clock, 
  Target, 
  Apple,
  Trophy,
  Shield,
  Zap
} from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: Dumbbell,
      title: "Personal Training",
      description: "One-on-one sessions with certified trainers tailored to your fitness goals and experience level.",
      badge: "Popular"
    },
    {
      icon: Users,
      title: "Group Classes",
      description: "High-energy group workouts including HIIT, yoga, spin, and strength training classes.",
      badge: "Fitness"
    },
    {
      icon: Apple,
      title: "Nutrition Coaching",
      description: "Personalized meal plans and nutrition guidance to fuel your transformation journey.",
      badge: "Wellness"
    },
    {
      icon: Clock,
      title: "24/7 Access",
      description: "Train on your schedule with round-the-clock gym access for premium members.",
      badge: "Convenience"
    },
    {
      icon: Target,
      title: "Goal Tracking",
      description: "Advanced body composition analysis and progress tracking to monitor your success.",
      badge: "Analytics"
    },
    {
      icon: Heart,
      title: "Wellness Programs",
      description: "Holistic approach including recovery sessions, mindfulness, and stress management.",
      badge: "Health"
    },
    {
      icon: Trophy,
      title: "Transformation Challenges",
      description: "Monthly fitness challenges and competitions to keep you motivated and engaged.",
      badge: "Motivation"
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Clean, sanitized equipment and professional supervision for injury-free workouts.",
      badge: "Safety"
    },
    {
      icon: Zap,
      title: "High-Intensity Training",
      description: "Cutting-edge HIIT and functional fitness programs for maximum results in minimum time.",
      badge: "Performance"
    }
  ]

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Why Choose Peak Performance
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything You Need to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Reach Your Peak
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Comprehensive fitness solutions designed to transform your body, mind, and lifestyle 
            with expert guidance and state-of-the-art facilities.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <Card 
                key={index} 
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                
                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            )
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience the Peak Performance difference?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Free Consultation
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              Schedule Gym Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}