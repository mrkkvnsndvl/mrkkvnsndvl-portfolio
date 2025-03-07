import { Monitor, CheckCircle, Languages } from "lucide-react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useSkillsStore } from "@/stores/useSkillsStore";

type SkillsTabsProps = {
  children: React.ReactNode;
};

export function SkillsTabs({ children }: SkillsTabsProps) {
  const { activeSkillsTab, setActiveSkillsTab } = useSkillsStore();

  return (
    <Tabs
      defaultValue="software"
      value={activeSkillsTab}
      className="w-full"
      onValueChange={setActiveSkillsTab}
    >
      <TabsList className="border-b border-border w-full flex justify-start h-auto p-0 bg-transparent space-x-2 md:space-x-6">
        <TabsTrigger
          value="software"
          className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent h-auto text-muted-foreground data-[state=active]:text-foreground cursor-pointer"
        >
          <Monitor className="h-4 w-4 mr-0 sm:mr-2" />
          Software
        </TabsTrigger>
        <TabsTrigger
          value="expertise"
          className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent h-auto text-muted-foreground data-[state=active]:text-foreground cursor-pointer"
        >
          <CheckCircle className="h-4 w-4 mr-0 sm:mr-2" />
          Expertise
        </TabsTrigger>
        <TabsTrigger
          value="language"
          className="px-0 py-2 data-[state=active]:border-b-2 data-[state=active]:border-primary data-[state=active]:shadow-none rounded-none bg-transparent h-auto text-muted-foreground data-[state=active]:text-foreground cursor-pointer"
        >
          <Languages className="h-4 w-4 mr-0 sm:mr-2" />
          Languages
        </TabsTrigger>
      </TabsList>

      {children}
    </Tabs>
  );
}
