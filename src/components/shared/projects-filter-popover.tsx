import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { useProjectsStore } from "@/stores/useProjectsStore";

export function ProjectsFilterPopover() {
  const {
    projects,
    selectedCategories,
    selectedTechnologies,
    toggleCategory,
    toggleTechnology,
    clearProjectFilters,
  } = useProjectsStore();

  // Get unique categories and technologies for project filter options
  const categories = Array.from(
    new Set(projects.map((project) => project.category))
  );
  const technologies = Array.from(
    new Set(projects.flatMap((project) => project.technologies))
  );

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            selectedCategories.length > 0 || selectedTechnologies.length > 0
              ? "text-primary"
              : "text-muted-foreground"
          } hover:bg-muted cursor-pointer`}
        >
          <Filter className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-4">
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="font-medium text-sm">Filter Projects</h3>
            {(selectedCategories.length > 0 ||
              selectedTechnologies.length > 0) && (
              <Button
                variant="ghost"
                size="sm"
                className="h-8 px-2 text-xs cursor-pointer"
                onClick={clearProjectFilters}
              >
                Clear all
              </Button>
            )}
          </div>

          {/* Category filters */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground">
              Categories
            </h4>
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant="outline"
                  size="sm"
                  className={`text-xs h-7 ${
                    selectedCategories.includes(category)
                      ? "bg-primary/10 border-primary text-primary"
                      : "bg-muted border-border"
                  } cursor-pointer`}
                  onClick={() => toggleCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {/* Technology filters */}
          <div className="space-y-2">
            <h4 className="text-xs font-medium text-muted-foreground">
              Technologies
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {technologies.map((tech) => (
                <div key={tech} className="flex items-center space-x-2 text-sm">
                  <Checkbox
                    className="cursor-pointer"
                    id={tech}
                    checked={selectedTechnologies.includes(tech)}
                    onCheckedChange={() => toggleTechnology(tech)}
                  />
                  <Label htmlFor={tech} className="text-xs">
                    {tech}
                  </Label>
                </div>
              ))}
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
