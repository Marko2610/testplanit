import { ColumnDef } from "@tanstack/react-table";
import { PromptConfig, PromptConfigPrompt } from "@prisma/client";
import { useTranslations } from "next-intl";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { DateFormatter } from "@/components/DateFormatter";
import { MessageSquareCode } from "lucide-react";
import { EditPromptConfig } from "./EditPromptConfig";
import { DeletePromptConfig } from "./DeletePromptConfig";

export interface ExtendedPromptConfig extends PromptConfig {
  prompts?: PromptConfigPrompt[];
  _count?: { projects: number };
}

export const getColumns = (
  userPreferences: any,
  handleToggleDefault: (id: string, currentIsDefault: boolean) => void,
  tCommon: ReturnType<typeof useTranslations<"common">>,
  t: ReturnType<typeof useTranslations<"admin.prompts">>
): ColumnDef<ExtendedPromptConfig>[] => [
  {
    id: "name",
    accessorKey: "name",
    header: () => (
      <div className="bg-primary-foreground">{tCommon("name")}</div>
    ),
    enableSorting: true,
    enableResizing: true,
    enableHiding: false,
    meta: { isPinned: "left" },
    size: 300,
    cell: ({ row }) => (
      <div className="bg-primary-foreground flex items-center gap-2">
        <MessageSquareCode className="h-4 w-4 text-muted-foreground" />
        <span className="font-medium">{row.original.name}</span>
        {row.original.isDefault && (
          <Badge variant="secondary" className="text-xs">
            {tCommon("fields.default")}
          </Badge>
        )}
      </div>
    ),
  },
  {
    id: "description",
    accessorKey: "description",
    header: tCommon("fields.description"),
    enableSorting: true,
    enableResizing: true,
    size: 300,
    cell: ({ row }) => (
      <span className="text-sm text-muted-foreground">
        {row.original.description || "-"}
      </span>
    ),
  },
  {
    id: "features",
    header: t("features"),
    enableSorting: false,
    enableResizing: true,
    size: 120,
    cell: ({ row }) => {
      const promptCount = row.original.prompts?.length || 0;
      return (
        <Badge variant="outline">
          {t("featureCount", { count: promptCount })}
        </Badge>
      );
    },
  },
  {
    id: "projects",
    header: tCommon("fields.projects"),
    enableSorting: false,
    enableResizing: true,
    size: 100,
    cell: ({ row }) => {
      const projectCount = row.original._count?.projects || 0;
      return (
        <span className="text-sm text-muted-foreground">
          {projectCount}
        </span>
      );
    },
  },
  {
    id: "isDefault",
    accessorKey: "isDefault",
    header: tCommon("fields.default"),
    enableSorting: false,
    enableResizing: true,
    size: 100,
    cell: ({ row }) => (
      <div className="text-center">
        <Switch
          checked={row.original.isDefault}
          disabled={row.original.isDefault}
          onCheckedChange={() =>
            handleToggleDefault(row.original.id, row.original.isDefault)
          }
        />
      </div>
    ),
  },
  {
    id: "isActive",
    accessorKey: "isActive",
    header: tCommon("fields.isActive"),
    enableSorting: true,
    enableResizing: true,
    size: 100,
    cell: ({ row }) => (
      <Badge variant={row.original.isActive ? "default" : "secondary"}>
        {row.original.isActive ? "Active" : "Inactive"}
      </Badge>
    ),
  },
  {
    id: "createdAt",
    accessorKey: "createdAt",
    header: tCommon("fields.createdAt"),
    enableSorting: true,
    enableResizing: true,
    enableHiding: true,
    meta: { isVisible: false },
    size: 150,
    cell: ({ getValue }) => (
      <div className="whitespace-nowrap">
        <DateFormatter
          date={getValue() as Date | string}
          formatString={
            userPreferences.user.preferences?.dateFormat || "MM_DD_YYYY_DASH"
          }
          timezone={userPreferences.user.preferences?.timezone || "Etc/UTC"}
        />
      </div>
    ),
  },
  {
    id: "updatedAt",
    accessorKey: "updatedAt",
    header: tCommon("fields.updatedAt"),
    enableSorting: true,
    enableResizing: true,
    enableHiding: true,
    meta: { isVisible: false },
    size: 150,
    cell: ({ getValue }) => (
      <div className="whitespace-nowrap">
        <DateFormatter
          date={getValue() as Date | string}
          formatString={
            userPreferences.user.preferences?.dateFormat || "MM_DD_YYYY_DASH"
          }
          timezone={userPreferences.user.preferences?.timezone || "Etc/UTC"}
        />
      </div>
    ),
  },
  {
    id: "actions",
    header: tCommon("actions.actionsLabel"),
    enableResizing: true,
    enableSorting: false,
    enableHiding: false,
    size: 100,
    meta: { isPinned: "right" },
    cell: ({ row }) => (
      <div className="bg-primary-foreground whitespace-nowrap flex justify-center gap-1">
        <EditPromptConfig config={row.original} />
        <DeletePromptConfig config={row.original} />
      </div>
    ),
  },
];
