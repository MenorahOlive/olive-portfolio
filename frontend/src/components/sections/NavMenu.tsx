"use client";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const NavMenu = () => {
  return (
    <>
      <NavigationMenu>
        <NavigationMenuList>
          <NavigationMenuItem>
            <NavigationMenuTrigger>About Me</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <NavigationMenuLink href="#about-me" title="About Me">
                  {" "}
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#experience"
                  title="Professional Experience"
                >
                  {" "}
                </NavigationMenuLink>
                <NavigationMenuLink href="#skills" title="Major Skills">
                  {" "}
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Tech Stack</NavigationMenuTrigger>
            <NavigationMenuContent>
              <ul className="w-96">
                <NavigationMenuLink
                  href="#programming-languages"
                  title="Programming Languages"
                >
                  {" "}
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#frontend-technologies"
                  title="Frontend Technologies"
                >
                  {" "}
                </NavigationMenuLink>
                <NavigationMenuLink
                  href="#backend-and-database-technologies"
                  title="Backend & Database Technologies"
                >
                  {" "}
                </NavigationMenuLink>
                <NavigationMenuLink href="#ide-and-tools" title="IDE & Tools">
                  {" "}
                </NavigationMenuLink>
              </ul>
            </NavigationMenuContent>
          </NavigationMenuItem>
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
    </>
  );
};

export default NavMenu;
