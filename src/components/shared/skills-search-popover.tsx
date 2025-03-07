import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useSkillsStore } from "@/stores/useSkillsStore";

export function SkillsSearchPopover() {
  const { skillsSearchValue, setSkillsSearchValue } = useSkillsStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            skillsSearchValue ? "text-primary" : "text-muted-foreground"
          } hover:bg-muted cursor-pointer`}
        >
          <Search className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-2">
        <div className="flex items-center">
          <Search className="h-4 w-4 mr-2 text-muted-foreground" />
          <Input
            placeholder="Search skills..."
            className="h-8 text-sm border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={skillsSearchValue}
            onChange={(e) => setSkillsSearchValue(e.target.value)}
          />
          {skillsSearchValue && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setSkillsSearchValue("")}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
