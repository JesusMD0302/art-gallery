import { ExternalLink, Menu } from "lucide-react";
import { Button, buttonVariants } from "../ui/button";
import { Sheet, SheetContent, SheetTitle, SheetTrigger } from "../ui/sheet";

interface NavMobileProps {
  links: { path: string; label: string }[];
}

export default function NavMobile({ links }: NavMobileProps) {
  return (
    <Sheet>
      <SheetTrigger
        render={
          <Button
            variant="ghost"
            size="icon"
            aria-label="Abrir menú de navegación"
          >
            <Menu className="h-5 w-5" />
          </Button>
        }
      />

      <SheetContent side="right" className="p-4">
        <SheetTitle>Menú de navegación</SheetTitle>

        <div className="mt-8 flex flex-col gap-5">
          {links.map((link) => (
            <a href={link.path} className={buttonVariants({ variant: "link" })}>
              {link.label}
            </a>
          ))}
          <a href="/#contact" className={buttonVariants()}>
            Nosotros <ExternalLink />
          </a>
        </div>
      </SheetContent>
    </Sheet>
  );
}
