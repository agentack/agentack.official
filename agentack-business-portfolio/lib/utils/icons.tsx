import {
  Workflow,
  Bot,
  BarChart3,
  Zap,
  Cog,
  Globe,
  Shield,
  Cloud,
  Smartphone,
  Database,
  LineChart,
  RefreshCw,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Workflow,
  Bot,
  BarChart3,
  Zap,
  Cog,
  Globe,
  Shield,
  Cloud,
  Smartphone,
  Database,
  LineChart,
  RefreshCw,
};

export function getServiceIcon(iconName: string): LucideIcon {
  return iconMap[iconName] || Zap;
}
