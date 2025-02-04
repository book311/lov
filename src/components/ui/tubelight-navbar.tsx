import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Link, useLocation, useNavigate } from "react-router-dom"
import { LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

interface NavItem {
  name: string
  url: string
  icon: LucideIcon
  dropdownItems?: { name: string; url: string }[]
}

interface NavBarProps {
  items: NavItem[]
  className?: string
}

export function NavBar({ items, className }: NavBarProps) {
  const location = useLocation()
  const navigate = useNavigate()
  const [activeTab, setActiveTab] = useState("")
  const [isMobile, setIsMobile] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  useEffect(() => {
    const currentPath = location.pathname
    const activeItem = items.find(item => 
      currentPath === item.url || 
      (item.dropdownItems && item.dropdownItems.some(dropItem => currentPath === dropItem.url))
    )
    if (activeItem) {
      setActiveTab(activeItem.name)
    }
  }, [location, items])

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768)
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  const handleNavigation = (url: string, name: string) => {
    setActiveTab(name)
    navigate(url)
  }

  const renderNavItem = (item: NavItem) => {
    const Icon = item.icon
    const isActive = activeTab === item.name

    const linkContent = (
      <>
        <Icon className="md:hidden" size={18} strokeWidth={2.5} />
        <span className="hidden md:inline">{item.name}</span>
        {isActive && (
          <motion.div
            layoutId="lamp"
            className="absolute inset-0 w-full bg-accent/5 rounded-full -z-10"
            initial={false}
            transition={{
              type: "spring",
              stiffness: 300,
              damping: 30,
            }}
          >
            <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-8 h-1 bg-accent rounded-t-full">
              <div className="absolute w-12 h-6 bg-accent/20 rounded-full blur-md -top-2 -left-2" />
              <div className="absolute w-8 h-6 bg-accent/20 rounded-full blur-md -top-1" />
              <div className="absolute w-4 h-4 bg-accent/20 rounded-full blur-sm top-0 left-2" />
            </div>
          </motion.div>
        )}
      </>
    )

    if (item.dropdownItems) {
      return (
        <DropdownMenu key={item.name}>
          <DropdownMenuTrigger asChild>
            <button
              className={cn(
                "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
                "text-foreground/80 hover:text-accent",
                isActive && "bg-foreground-translucent text-accent"
              )}
              onClick={() => handleNavigation(item.url, item.name)}
            >
              {linkContent}
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-background-translucent backdrop-blur-lg border-foreground-translucent">
            {item.dropdownItems.map((dropdownItem) => (
              <DropdownMenuItem 
                key={dropdownItem.url}
                onClick={() => navigate(dropdownItem.url)}
                className="cursor-pointer"
              >
                <span className="w-full text-foreground hover:text-accent">
                  {dropdownItem.name}
                </span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      )
    }

    return (
      <button
        key={item.name}
        onClick={() => handleNavigation(item.url, item.name)}
        className={cn(
          "relative cursor-pointer text-sm font-semibold px-6 py-2 rounded-full transition-colors",
          "text-foreground/80 hover:text-accent",
          isActive && "bg-foreground-translucent text-accent"
        )}
      >
        {linkContent}
      </button>
    )
  }

  return (
    <nav
      className={cn(
        "fixed top-0 left-1/2 -translate-x-1/2 z-50 mt-6",
        "transition-transform duration-300",
        scrollY > 100 ? "transform -translate-y-2" : "",
        className
      )}
    >
      <div className="flex items-center gap-3 bg-background-translucent border border-foreground-translucent backdrop-blur-lg py-1 px-1 rounded-full shadow-neon">
        {items.map(renderNavItem)}
      </div>
    </nav>
  )
}