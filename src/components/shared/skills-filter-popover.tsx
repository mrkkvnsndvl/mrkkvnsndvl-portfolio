import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useSkillsStore } from "@/stores/useSkillsStore";

export function SkillsFilterPopover() {
  const { skillsSearchValue, activeSkillsTab, clearSkillsFilters } =
    useSkillsStore();

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
          <Filter className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm">Filter Skills</h3>
            {skillsSearchValue && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs cursor-pointer"
                onClick={clearSkillsFilters}
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Category description */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground">
              Currently viewing
            </h4>
            <div className="p-2 bg-muted rounded-md text-sm">
              {activeSkillsTab === "software" &&
                "Software tools and programming languages"}
              {activeSkillsTab === "expertise" &&
                "Professional domains and methodologies"}
              {activeSkillsTab === "language" &&
                "Communication and language abilities"}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
