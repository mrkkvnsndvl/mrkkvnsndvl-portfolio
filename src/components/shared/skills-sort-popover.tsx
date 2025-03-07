import { Button } from "@/components/ui/button";
import { ArrowUpDown, ChevronUp, ChevronDown } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useSkillsStore } from "@/stores/useSkillsStore";

export function SkillsSortPopover() {
  const {
    skillsSortCriteria,
    skillsSortDirection,
    setSkillsSortCriteria,
    setSkillsSortDirection,
  } = useSkillsStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="h-8 w-8 text-muted-foreground hover:bg-muted cursor-pointer"
        >
          <ArrowUpDown className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-56 p-4">
        <div className="space-y-4">
          <h3 className="font-medium text-sm">Sort Skills</h3>

          {/* Sort criteria */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground">
              Sort by
            </h4>
            <RadioGroup
              value={skillsSortCriteria}
              onValueChange={setSkillsSortCriteria}
              className="space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="name"
                  id="sort-name"
                />
                <Label htmlFor="sort-name" className="text-sm font-normal">
                  Name
                </Label>
              </div>
            </RadioGroup>
          </div>

          {/* Sort direction */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground">
              Direction
            </h4>
            <RadioGroup
              value={skillsSortDirection}
              onValueChange={setSkillsSortDirection}
              className="space-y-1"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="asc"
                  id="skills-sort-asc"
                />
                <Label
                  htmlFor="skills-sort-asc"
                  className="text-sm font-normal flex items-center"
                >
                  <ChevronUp className="h-3 w-3 mr-1" /> Ascending
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem
                  className="cursor-pointer"
                  value="desc"
                  id="skills-sort-desc"
                />
                <Label
                  htmlFor="skills-sort-desc"
                  className="text-sm font-normal flex items-center"
                >
                  <ChevronDown className="h-3 w-3 mr-1" /> Descending
                </Label>
              </div>
            </RadioGroup>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
