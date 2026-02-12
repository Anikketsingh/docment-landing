import Link from "next/link"
import { Mail, Phone, MapPin, Linkedin } from "lucide-react"
import Image from 'next/image'
import logo from '@/public/logo.png'

export function Footer() {
  return (
    <footer id="contact" className="border-t border-gray-200/50 bg-white/60 backdrop-blur-sm font-inter">
      <div className="container px-4 md:px-6 py-12 mx-auto max-w-6xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 lg:gap-12">
          {/* Brand Column */}
          <div className="space-y-4">
            <Link 
              href="/" 
              className="flex items-center space-x-1 hover:opacity-90 transition-opacity"
            >
              <Image src={logo} alt="Docment Logo" className="relative h-10 w-10" />
              <span className="font-bold text-xl tracking-tight">Docment</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              AI-powered contract automation for the modern world. Create, verify, and execute legally binding contracts within minutes.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Quick Links</h3>
            <ul className="space-y-2">
              {['Features', 'Pricing', 'About', 'Blog', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    href={`#${item.toLowerCase()}`}
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Information */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <a href="mailto:betadocment.ai@gmail.com" className="hover:text-foreground transition-colors">
                    betadocment.ai@gmail.com
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <a href="tel:+917766037844" className="hover:text-foreground transition-colors">
                    +91 77660 37844
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <Phone className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                  <a href="tel:+918959888088" className="hover:text-foreground transition-colors">
                    +91 89598 88088
                  </a>
                </span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
                <span className="text-sm text-muted-foreground">
                G-05, Design Innovation Centre, University of Delhi, New Delhi, IN -110007
                </span>
              </li>
            </ul>
          </div>

          {/* Founders */}
          <div className="space-y-4">
            <h3 className="font-semibold text-base">Meet Our Founders</h3>
            <div className="space-y-4">
              {/* Founder 1 (Vishal) */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Vishal</p>
                <div className="flex space-x-2">
                  <a href="https://www.linkedin.com/in/venccord/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:vishalnasingh@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
              
              {/* Founder 2 (Aniket) */}
              <div className="space-y-2">
                <p className="text-sm font-medium">Aniket</p>
                <div className="flex space-x-2">
                  <a href="https://www.linkedin.com/in/-aniket-singh-/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Linkedin className="h-4 w-4" />
                  </a>
                  <a href="mailto:its.aniketsingh04@gmail.com" className="text-muted-foreground hover:text-foreground transition-colors">
                    <Mail className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Legal Links */}
        <div className="mt-10 pt-6 border-t border-muted flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Docment. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}