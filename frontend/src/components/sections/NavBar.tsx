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

const icons = [
  {
    src: LinkedIn,
    alt: "LinkedIn Icon",
  },
  {
    src: GitHub,
    alt: "Github Icon",
  },
  {
    src: Phone,
    alt: "Phone Icon",
  },
  {
    src: Email,
    alt: "Mail Icon",
  },
];

const SocialIcons = ({ icon, alt }: { icon: any; alt: string }) => {
  return (
    <>
      <img
        src={icon}
        alt={alt}
        className="w-auto h-auto object-contain cursor-pointer hover:scale-105 hover:opacity-70 transition duration-300 ease-in-out"
      />
    </>
  );
};

const NavBar = () => {
  return (
    <nav className="flex flex-row justify-between  p-10 bg-white/80 backdrop-blur-md sticky top-0 z-50 text-primary-text">
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem></NavigationMenuItem>
          {/* About Me Dropdown */}
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
            <NavigationMenuContent className="bg-white opacity-100">
              <ul className="grid w-[300px] gap-3 p-4 md:w-[400px] bg-white opacity-100">
                <ListItem href="#about-me">About Me</ListItem>
                <ListItem href="#experience">Professional Experience</ListItem>
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

      <div className="flex flex-row gap-3">
        {icons.map((i) => (
          <SocialIcons key={i.alt} icon={i.src} alt={i.alt} />
        ))}
      </div>
    </nav>
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
