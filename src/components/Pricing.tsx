// Pricing Component
// Generated: 2025-08-25T19:44:45.880Z
// Template: pricing-c001
// Context: Memberships
// Position: pages.3.sections.1

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check, Star, Zap, Dumbbell, Users, Trophy } from "lucide-react"
import { cn } from "@/lib/utils"

export default function Pricing() {
  const plans = [
    {
      name: "Basic",
      description: "Perfect for fitness beginners starting their journey",
      price: "$39",
      period: "/month",
      badge: null,
      icon: Dumbbell,
      features: [
        "24/7 gym access",
        "Basic equipment usage",
        "Locker room access",
        "Fitness assessment",
        "Mobile app access",
        "Guest pass (2 per month)"
      ],
      cta: "Start Your Journey",
      popular: false
    },
    {
      name: "Premium",
      description: "Best for serious athletes and fitness enthusiasts",
      price: "$79",
      period: "/month",
      badge: "Most Popular",
      icon: Users,
      features: [
        "Everything in Basic",
        "Unlimited group classes",
        "2 personal training sessions",
        "Nutrition consultation",
        "Recovery zone access",
        "Supplement discounts",
        "Priority class booking",
        "Guest passes (5 per month)"
      ],
      cta: "Transform Your Body",
      popular: true
    },
    {
      name: "Elite",
      description: "For champions who demand the ultimate fitness experience",
      price: "$149",
      period: "/month",
      badge: "Peak Performance",
      icon: Trophy,
      features: [
        "Everything in Premium",
        "Unlimited personal training",
        "Custom meal planning",
        "Body composition analysis",
        "VIP locker with towel service",
        "Massage therapy sessions",
        "Competition prep coaching",
        "Unlimited guest passes"
      ],
      cta: "Achieve Peak Performance",
      popular: false
    }
  ]

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2 border-primary/20">
            <Dumbbell className="size-3 mr-2" />
            Membership Plans
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Path to
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Peak Performance
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Unlock your potential with our flexible membership options. No contracts, 
            no hidden fees. Just pure results and unlimited motivation.
          </p>
          
          {/* Billing Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Monthly
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Annual
              <Badge variant="secondary" className="ml-2 text-xs bg-primary/10 text-primary">
                Save 25%
              </Badge>
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => {
            const IconComponent = plan.icon
            return (
              <Card 
                key={index}
                className={cn(
                  "relative overflow-hidden transition-all duration-300 hover:shadow-lg",
                  plan.popular 
                    ? "border-primary/50 shadow-lg shadow-primary/10 scale-105" 
                    : "border-border/50 hover:border-primary/20"
                )}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <Badge className="bg-primary text-primary-foreground px-4 py-1">
                      <Star className="size-3 mr-1" />
                      {plan.badge}
                    </Badge>
                  </div>
                )}

                {/* Background Gradient */}
                {plan.popular && (
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
                )}

                <CardHeader className="relative text-center pb-8">
                  {plan.badge && !plan.popular && (
                    <Badge variant="outline" className="mb-4 mx-auto w-fit border-primary/30 text-primary">
                      {plan.badge}
                    </Badge>
                  )}
                  
                  <div className="mb-4 mx-auto w-fit p-3 bg-primary/10 rounded-full">
                    <IconComponent className="size-6 text-primary" />
                  </div>
                  
                  <CardTitle className="text-2xl mb-2">{plan.name}</CardTitle>
                  <CardDescription className="text-base mb-6">
                    {plan.description}
                  </CardDescription>
                  
                  <div className="flex items-end justify-center gap-1">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    {plan.period && (
                      <span className="text-muted-foreground mb-1">{plan.period}</span>
                    )}
                  </div>
                </CardHeader>

                <CardContent className="relative space-y-6">
                  {/* Features List */}
                  <ul className="space-y-3">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center gap-3">
                        <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Check className="size-3 text-primary" />
                        </div>
                        <span className="text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA Button */}
                  <Button 
                    className={cn(
                      "w-full text-base py-6 font-semibold",
                      plan.popular 
                        ? "bg-primary hover:bg-primary/90 text-primary-foreground" 
                        : "border-primary/20 hover:bg-primary/10 hover:border-primary/40"
                    )}
                    variant={plan.popular ? "default" : "outline"}
                  >
                    {plan.popular && <Zap className="size-4 mr-2" />}
                    {plan.cta}
                  </Button>

                  {plan.name === "Premium" && (
                    <p className="text-center text-sm text-muted-foreground">
                      7-day free trial • Cancel anytime
                    </p>
                  )}
                </CardContent>
              </Card>
            )
          })}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">
            Corporate Wellness Programs Available
          </h3>
          <p className="text-muted-foreground mb-6">
            Transform your workplace with our corporate fitness solutions. 
            Group discounts, on-site training, and wellness workshops available.
          </p>
          <Button variant="outline" size="lg" className="border-primary/20 hover:bg-primary/10">
            Schedule Corporate Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}