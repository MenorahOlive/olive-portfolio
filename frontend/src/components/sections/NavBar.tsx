"use client";
import Email from "../../assets/Email.png";
import GitHub from "../../assets/GitHub.png";
import Phone from "../../assets/Phone.png";
import LinkedIn from "../../assets/LinkedIn.png";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

const icons = [
  {
    src: LinkedIn,
    alt: "LinkedIn Icon",
    href: "https://www.linkedin.com/in/olive-nyang-or-86a13524b/",
    target: "_blank",
  },
  {
    src: GitHub,
    alt: "Github Icon",
    href: "https://github.com/MenorahOlive",
    target: "_blank",
  },
  {
    src: Phone,
    alt: "Phone Icon",
    href: "tel:+254715312448",
    target: "_self",
  },
  {
    src: Email,
    alt: "Mail Icon",
    href: "mailto:olivemenorah@gmail.com?subject=Portfolio%20Inquiry&body=Hi%20Olive,",
    target: "_self",
  },
];

const SocialIcons = ({
  icon,
  alt,
  href,
  target,
}: {
  icon: any;
  alt: string;
  href: string;
  target: string;
}) => {
  return (
    <>
      <a
        href={href}
        target={target}
        rel="noopener noreferrer"
        className="flex items-center justify-center"
      >
        <img
          src={icon}
          alt={alt}
          className="w-auto h-auto object-contain cursor-pointer hover:scale-105 hover:opacity-70 transition duration-300 ease-in-out"
        />
      </a>
    </>
  );
};

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between  p-10 bg-white/80 backdrop-blur-md sticky top-0 z-50 text-primary-text">
      {/*Mobile View */}
      <div className="lg:hidden">
        <MobileNav />
      </div>
      {/*Desktop View*/}
      <div className="hidden lg:block">
        <NavigationMenu>
          <NavigationMenuList>
            <NavigationMenuItem></NavigationMenuItem>
            {/* About Me Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white opacity-100">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] bg-white opacity-100">
                  <ListItem href="#about-me">About Me</ListItem>
                  <ListItem href="#experience">
                    Professional Experience
                  </ListItem>
                  <ListItem href="#skills">Major Skills</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Tech Stack Dropdown */}
            <NavigationMenuItem>
              <NavigationMenuTrigger>Tech Stack</NavigationMenuTrigger>
              <NavigationMenuContent className="bg-white opacity-100">
                <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] bg-white opacity-100">
                  <ListItem href="#programming-languages">
                    Programming Languages
                  </ListItem>
                  <ListItem href="#frontend-technologies">
                    Frontend Technologies
                  </ListItem>
                  <ListItem href="#backend-and-database-technologies">
                    Backend & Database Technologies
                  </ListItem>
                  <ListItem href="#ide-and-tools">IDE & Tools</ListItem>
                </ul>
              </NavigationMenuContent>
            </NavigationMenuItem>

            {/* Simple Links */}
            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="#my-projects">My Projects</a>
              </NavigationMenuLink>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <a href="#contact">Contact Me</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>

      {/*Social Icons */}
      <div className="flex flex-row gap-3 items-center">
        {icons.map((i) => (
          <SocialIcons
            key={i.alt}
            icon={i.src}
            alt={i.alt}
            href={i.href}
            target={i.target}
          />
        ))}
      </div>
    </nav>
  );
};

const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button className="p-2 outline-none">
          <Menu className="h-6 w-6" />
        </button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] bg-white">
        <SheetHeader>
          <SheetTitle className="text-left text-2xl font-bold">Menu</SheetTitle>
        </SheetHeader>
        <div className="mt-8 flex flex-col gap-6">
          <a
            href="#about-me"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            About Me
          </a>
          <a
            href="#programming-languages"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            Tech Stack
          </a>

          <div className="h-px bg-border my-2" />
          <a
            href="#my-projects"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            My Projects
          </a>
          <a
            href="#contact"
            onClick={() => setOpen(false)}
            className="text-lg font-medium"
          >
            Contact Me
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
};

/**
 * Reusable component for the items inside the dropdown
 */
const ListItem = ({
  className,
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"a"> & { title?: string }) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          href={href}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-md font-medium leading-none">
            {children || title}
          </div>
        </a>
      </NavigationMenuLink>
    </li>
  );
};

export default NavBar;
