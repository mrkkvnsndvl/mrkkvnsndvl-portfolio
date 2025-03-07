import { Button } from "@/components/ui/button";
import { Search, X } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Input } from "@/components/ui/input";
import { useProjectsStore } from "@/stores/useProjectsStore";

export function ProjectsSearchPopover() {
  const { projectSearchValue, setProjectSearchValue } = useProjectsStore();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className={`h-8 w-8 ${
            projectSearchValue ? "text-primary" : "text-muted-foreground"
          } hover:bg-muted cursor-pointer`}
        >
          <Search className="h-4 w-4" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-72 p-2">
        <div className="flex items-center">
          <Search className="h-4 w-4 mr-2 text-muted-foreground" />
          <Input
            placeholder="Search projects..."
            className="h-8 text-sm border-none focus-visible:ring-0 focus-visible:ring-offset-0"
            value={projectSearchValue}
            onChange={(e) => setProjectSearchValue(e.target.value)}
          />
          {projectSearchValue && (
            <Button
              variant="ghost"
              size="icon"
              className="h-6 w-6 cursor-pointer"
              onClick={() => setProjectSearchValue("")}
            >
              <X className="h-3 w-3" />
            </Button>
          )}
        </div>
      </PopoverContent>
    </Popover>
  );
}
