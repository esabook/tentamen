import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

import { useTranslation } from "react-i18next";

function getFlagEmoji(countryCode) {
  return [...countryCode.toUpperCase()]
    .map((char) => String.fromCodePoint(127397 + char.charCodeAt()))
    .reduce((a, b) => `${a}${b}`);
}

export function ToggleLanguage() {
  const { t, i18n } = useTranslation();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" size="icon">
          {getFlagEmoji(i18n.language.split("-")[1])}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuLabel>{t("language")}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem onClick={() => i18n.changeLanguage("id-ID")}>
          {getFlagEmoji("ID")} Indonesia
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => i18n.changeLanguage("en-US")}>
          {getFlagEmoji("US")} English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
