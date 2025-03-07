import React from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";
import { useSkillsStore } from "@/stores/useSkillsStore";
import { skillIcons } from "@/constants/icons";
import { SkillsFilterPopover } from "@/components/shared/skills-filter-popover";
import { SkillsSortPopover } from "@/components/shared/skills-sort-popover";
import { SkillsSearchPopover } from "@/components/shared/skills-search-popover";
import { SkillsTabs } from "@/components/shared/skills-tabs";
import { Skill } from "@/types";
import { SimpleIcon } from "simple-icons";

export function Skills() {
  const {
    filteredSkills,
    skillsSearchValue,
    setSkillsSearchValue,
    showControls,
    showAllSoftware,
    setShowControls,
    toggleShowAllSoftware,
  } = useSkillsStore();

  return (
    <div
      className="mt-16 space-y-6 relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Skills</h2>

        <div
          className={`flex items-center gap-2 transition-opacity duration-200 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <SkillsFilterPopover />
          <SkillsSortPopover />
          <SkillsSearchPopover />
        </div>
      </div>

      {/* Active skills filters display */}
      {skillsSearchValue && (
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className="flex items-center gap-1 bg-muted">
            Search: {skillsSearchValue}
            <Button
              variant="ghost"
              size="icon"
              className="h-4 w-4 p-0 ml-1 cursor-pointer"
              onClick={() => setSkillsSearchValue("")}
            >
              <X className="h-3 w-3" />
            </Button>
          </Badge>
        </div>
      )}

      <SkillsTabs>
        <TabsContent value="software" className="mt-4">
          <SkillsGrid
            skills={filteredSkills}
            showAllItems={showAllSoftware}
            category="Software"
            limitCount={9}
            onSeeMoreClick={toggleShowAllSoftware}
          />
        </TabsContent>
        <TabsContent value="expertise" className="mt-4">
          <SkillsGrid skills={filteredSkills} category="Expertise" />
        </TabsContent>
        <TabsContent value="language" className="mt-4">
          <SkillsGrid skills={filteredSkills} category="Language" />
        </TabsContent>
      </SkillsTabs>
    </div>
  );
}

interface SkillsGridProps {
  skills: Skill[];
  showAllItems?: boolean;
  category?: "Software" | "Expertise" | "Language";
  limitCount?: number;
  onSeeMoreClick?: () => void;
}

function SkillsGrid({
  skills,
  showAllItems = true,
  category,
  limitCount = 9,
  onSeeMoreClick,
}: SkillsGridProps) {
  // Filter skills by category if provided
  const filteredByCategorySkills = category
    ? skills.filter((skill) => skill.category === category)
    : skills;

  // Limit the number of items shown based on showAllItems
  const visibleSkills =
    !showAllItems && filteredByCategorySkills.length > limitCount
      ? filteredByCategorySkills.slice(0, limitCount)
      : filteredByCategorySkills;

  const hasMoreToShow = filteredByCategorySkills.length > limitCount;

  // If no skills match the filters
  if (filteredByCategorySkills.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">No skills found</div>
        <Button
          variant="link"
          className="mt-2 cursor-pointer"
          onClick={() => useSkillsStore.getState().clearSkillsFilters()}
        >
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleSkills.map((skill) => {
          const iconData = skillIcons[skill.icon];

          return (
            <div
              key={skill.id}
              className="group flex items-start p-4 rounded-md border border-border bg-card hover:bg-accent transition-colors"
            >
              <div className="mr-4 mt-1 rounded-lg p-2 bg-muted flex-shrink-0">
                {iconData ? (
                  skill.category === "Software" ? (
                    <svg
                      role="img"
                      viewBox="0 0 24 24"
                      className="h-5 w-5 text-muted-foreground"
                      fill="currentColor"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <title>{skill.name}</title>
                      <path d={(iconData as SimpleIcon).path} />
                    </svg>
                  ) : (
                    <div className="h-5 w-5 text-muted-foreground">
                      {/* @ts-ignore - LucideIcon is a valid React component */}
                      {React.createElement(iconData as any, { size: 20 })}
                    </div>
                  )
                ) : (
                  <div className="h-5 w-5 bg-muted-foreground/20 rounded" />
                )}
              </div>
              <div>
                <h3 className="font-medium text-sm">{skill.name}</h3>
                {skill.description && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {skill.description}
                  </p>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {/* See More Button */}
      {hasMoreToShow && onSeeMoreClick && (
        <div className="flex justify-center">
          <Button
            variant="outline"
            onClick={onSeeMoreClick}
            className="w-40 rounded-full cursor-pointer"
          >
            {showAllItems ? "See Less" : "See More"}
          </Button>
        </div>
      )}
    </div>
  );
}
