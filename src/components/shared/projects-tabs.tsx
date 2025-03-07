import { Star, Clock } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useProjectsStore } from "@/stores/useProjectsStore";

type ProjectsTabsProps = {
  children: React.ReactNode;
};

export function ProjectsTabs({ children }: ProjectsTabsProps) {
  const { activeProjectTab, setActiveProjectTab } = useProjectsStore();

  return (
    <Tabs
      defaultValue="featured"
      value={activeProjectTab}
      className="w-full"
      onValueChange={setActiveProjectTab}
    >
      <TabsList className="border-b border-border w-full flex justify-start h-auto p-0 bg-transparent space-x-2 md:space-x-6">
        <TabsTrigger
          value="featured"
          className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent h-auto text-muted-foreground data-[state=active]:text-foreground cursor-pointer"
        >
          <Star className="h-4 w-4 mr-0 sm:mr-2" />
          Featured
        </TabsTrigger>
        <TabsTrigger
          value="past"
          className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent h-auto text-muted-foreground data-[state=active]:text-foreground cursor-pointer"
        >
          <Clock className="h-4 w-4 mr-0 sm:mr-2" />
          Past Projects
        </TabsTrigger>
      </TabsList>

      {children}
    </Tabs>
  );
}
