"use client";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";

export default function ThemeToggle() {
  /*
   * set themeConfig:
   * - if window (if not in the browser) is undefined, set themeConfig to "system"
   * - else, set themeConfig to the value of localStorage.getItem("theme")
   * - if localStorage.getItem("theme") is null, set themeConfig to "system"
   */
  const [themeConfig, setThemeConfig] = useState<theme>(() => {
    return (
      (typeof window === "undefined" && "system") ||
      (localStorage.getItem("theme") as theme) ||
      "system"
    );
  });

  // * set theme to the choosen theme in localStorage and themeConfig state
  const setTheme = (theme: theme) => {
    localStorage.setItem("theme", theme);
    setThemeConfig(theme);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          id="theme-toggle"
          variant="theme"
          className="rounded-full my-auto z-[99999] size-10 max-md:size-8 relative"
          size="icon"
        >
          <SunIcon className="rotate-0 scale-[1.56] max-md:scale-125 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-[1.56] max-md:dark:scale-125" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="dark:bg-neutral-700 rounded-lg"
      >
        {["light", "dark", "system"].map((themeOption) => (
          <DropdownMenuItem
            key={themeOption}
            className={`cursor-pointer ${themeOption === themeConfig ? "bg-neutral-100 dark:bg-neutral-500" : ""}`}
            onSelect={() => setTheme(themeOption as theme)}
          >
            {themeOption}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
