import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { TabsContent } from "@/components/ui/tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useProjectsStore } from "@/stores/useProjectsStore";
import { ProjectsFilterPopover } from "@/components/shared/projects-filter-popover";
import { ProjectsSortPopover } from "@/components/shared/projects-sort-popover";
import { ProjectsSearchPopover } from "@/components/shared/projects-search-popover";
import { ProjectsTabs } from "@/components/shared/projects-tabs";
import { Project } from "@/types";

export function Projects() {
  const {
    filteredProjects,
    selectedCategories,
    selectedTechnologies,
    projectSearchValue,
    toggleCategory,
    toggleTechnology,
    setProjectSearchValue,
    clearProjectFilters,
    showControls,
    showAllFeatured,
    showAllPast,
    setShowControls,
    toggleShowAllFeatured,
    toggleShowAllPast,
  } = useProjectsStore();

  // Filter projects by featured status
  const featuredProjects = filteredProjects.filter(
    (project) => project.featured
  );
  const pastProjects = filteredProjects.filter((project) => !project.featured);

  return (
    <div
      className="mt-24 space-y-6 relative"
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Projects</h2>

        <div
          className={`flex items-center gap-2 transition-opacity duration-200 ${
            showControls ? "opacity-100" : "opacity-0"
          }`}
        >
          <ProjectsFilterPopover />
          <ProjectsSortPopover />
          <ProjectsSearchPopover />
        </div>
      </div>

      {/* Active filters display */}
      {(selectedCategories.length > 0 ||
        selectedTechnologies.length > 0 ||
        projectSearchValue) && (
        <div className="flex flex-wrap gap-2 mt-2">
          {selectedCategories.map((category: string) => (
            <Badge
              key={category}
              variant="outline"
              className="flex items-center gap-1 bg-primary/10"
            >
              Category: {category}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1 cursor-pointer"
                onClick={() => toggleCategory(category)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {selectedTechnologies.map((tech: string) => (
            <Badge
              key={tech}
              variant="outline"
              className="flex items-center gap-1 bg-muted"
            >
              Tech: {tech}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1 cursor-pointer"
                onClick={() => toggleTechnology(tech)}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          ))}

          {projectSearchValue && (
            <Badge
              variant="outline"
              className="flex items-center gap-1 bg-muted"
            >
              Search: {projectSearchValue}
              <Button
                variant="ghost"
                size="icon"
                className="h-4 w-4 p-0 ml-1 cursor-pointer"
                onClick={() => setProjectSearchValue("")}
              >
                <X className="h-3 w-3" />
              </Button>
            </Badge>
          )}

          {(selectedCategories.length > 0 ||
            selectedTechnologies.length > 0 ||
            projectSearchValue) && (
            <Button
              variant="ghost"
              size="sm"
              className="h-7 text-xs cursor-pointer"
              onClick={clearProjectFilters}
            >
              Clear all
            </Button>
          )}
        </div>
      )}

      <ProjectsTabs>
        <TabsContent value="featured" className="mt-4">
          <ProjectsGrid
            projects={featuredProjects}
            showAllItems={showAllFeatured}
            limitCount={4}
            onSeeMoreClick={
              featuredProjects.length > 4 ? toggleShowAllFeatured : undefined
            }
          />
        </TabsContent>
        <TabsContent value="past" className="mt-4">
          <ProjectsGrid
            projects={pastProjects}
            showAllItems={showAllPast}
            limitCount={4}
            onSeeMoreClick={
              pastProjects.length > 4 ? toggleShowAllPast : undefined
            }
          />
        </TabsContent>
      </ProjectsTabs>
    </div>
  );
}

interface ProjectsGridProps {
  projects: Project[];
  showAllItems?: boolean;
  limitCount?: number;
  onSeeMoreClick?: () => void;
}

function ProjectsGrid({
  projects,
  showAllItems = true,
  limitCount = 4,
  onSeeMoreClick,
}: ProjectsGridProps) {
  const visibleProjects =
    !showAllItems && projects.length > limitCount
      ? projects.slice(0, limitCount)
      : projects;

  const hasMoreToShow = projects.length > limitCount;

  if (projects.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-muted-foreground mb-4">No projects found</div>
        <Button
          variant="link"
          className="mt-2 cursor-pointer"
          onClick={() => useProjectsStore.getState().clearProjectFilters()}
        >
          Clear all filters
        </Button>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleProjects.map((project: Project) => (
          <Card
            key={project.id}
            className="border-border bg-card hover:bg-accent transition-colors"
          >
            <CardHeader className="pb-2">
              <CardTitle className="text-base">{project.title}</CardTitle>
              <CardDescription className="text-sm text-muted-foreground">
                {project.category}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech: string) => (
                  <Badge
                    key={tech}
                    variant="outline"
                    className="bg-muted text-xs"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* See More Button - only display if there are more than limitCount projects */}
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
