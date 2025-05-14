import React from "react";
import { ArrowUp } from "lucide-react";
function Footer() {
  return (
    <footer className="py-2 px-4 bg-card relative border-t border-border mt-2 pt-2 flex flex-wrap justify-between items-center">
      {" "}
      <p className="text-sm text-muted-foreground">
        {" "}
        &copy; {new Date().getFullYear()} SadipKhatri. All rights reserved.
      </p>
      <a
        href="#hero"
        className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
      >
        <ArrowUp size={20} />
      </a>
    </footer>
  );
}

export default Footer;
