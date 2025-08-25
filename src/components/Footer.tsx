// Footer Component
// Generated: 2025-08-25T19:44:45.880Z
// Template: footer-c001
// Context: layout
// Position: layout.footer.0

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Youtube,
  Dumbbell,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Clock,
  Award
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Programs",
      links: [
        { name: "Personal Training", href: "/personal-training" },
        { name: "Group Classes", href: "/classes" },
        { name: "Strength Training", href: "/strength" },
        { name: "Cardio Workouts", href: "/cardio" },
        { name: "Nutrition Coaching", href: "/nutrition" },
        { name: "Online Training", href: "/online" }
      ]
    },
    {
      title: "Membership",
      links: [
        { name: "Membership Plans", href: "/memberships" },
        { name: "Day Passes", href: "/day-pass" },
        { name: "Corporate Plans", href: "/corporate" },
        { name: "Student Discounts", href: "/student" },
        { name: "Family Packages", href: "/family" },
        { name: "Free Trial", href: "/trial" }
      ]
    },
    {
      title: "About",
      links: [
        { name: "Our Story", href: "/about" },
        { name: "Meet Our Trainers", href: "/trainers" },
        { name: "Success Stories", href: "/transformations" },
        { name: "Facilities", href: "/facilities" },
        { name: "Community Events", href: "/events" },
        { name: "Careers", href: "/careers" }
      ]
    },
    {
      title: "Support",
      links: [
        { name: "Contact Us", href: "/contact" },
        { name: "FAQ", href: "/faq" },
        { name: "Class Schedule", href: "/schedule" },
        { name: "Membership Portal", href: "/portal" },
        { name: "Health & Safety", href: "/safety" },
        { name: "Cancellation Policy", href: "/cancellation" }
      ]
    }
  ]

  const socialLinks = [
    { name: "Facebook", icon: Facebook, href: "https://facebook.com/peakperformancegym" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com/peakperformancegym" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com/peakperformancegym" },
    { name: "YouTube", icon: Youtube, href: "https://youtube.com/peakperformancegym" }
  ]

  return (
    <footer className="bg-secondary border-t border-primary/20">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-3 mb-6">
                <div className="size-12 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center shadow-lg">
                  <Dumbbell className="size-6 text-secondary font-bold" />
                </div>
                <div className="flex flex-col">
                  <span className="font-black text-xl text-background">PEAK</span>
                  <span className="font-bold text-sm text-primary -mt-1">PERFORMANCE</span>
                </div>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Transform your body, elevate your mind, and achieve peak performance. Join our community of fitness enthusiasts and unlock your potential with expert trainers and state-of-the-art equipment.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">info@peakperformancegym.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) FIT-PEAK</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">2500 Fitness Blvd, Peak City, PC 12345</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Clock className="size-5 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Mon-Fri: 5AM-11PM | Sat-Sun: 6AM-10PM</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-4 bg-secondary/50 p-6 rounded-xl border border-primary/10">
              <div className="flex items-center gap-2">
                <Award className="size-5 text-primary" />
                <h4 className="font-bold text-sm text-background uppercase tracking-wide">Fitness Tips & Updates</h4>
              </div>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 text-sm border border-primary/20 rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary"
                />
                <Button size="sm" className="px-4 bg-primary hover:bg-primary/90 text-secondary font-bold">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Get workout tips, nutrition advice, and exclusive member offers. Unsubscribe anytime.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-bold text-sm text-background uppercase tracking-wide">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 font-medium"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary/20 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 Peak Performance Gym. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Empowering fitness journeys since 2015
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2 font-bold uppercase tracking-wide">Follow Us:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-10 rounded-lg bg-primary/10 hover:bg-primary flex items-center justify-center transition-all duration-200 group border border-primary/20"
                  >
                    <Icon className="size-5 text-primary group-hover:text-secondary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-primary/10">
            <Link href="/privacy" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
              Terms of Service
            </Link>
            <Link href="/waiver" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
              Liability Waiver
            </Link>
            <Link href="/accessibility" className="text-xs text-muted-foreground hover:text-primary transition-colors font-medium">
              Accessibility
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}