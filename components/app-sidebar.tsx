"use client";
import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarRail,
} from "@/components/ui/sidebar";
import {
  Activity,
  ActivityIcon,
  BaggageClaim,
  Bot,
  ChartNoAxesCombined,
  GitPullRequestIcon,
  Inbox,
  List,
  ListCheck,
  MessageSquare,
  MessageSquareDiff,
  MessageSquareQuote,
  MessagesSquare,
  PersonStanding,
  PlaneTakeoff,
  ScrollText,
  Settings,
  Star,
  User,
  User2,
  Users,
} from "lucide-react";

const data = {
  adminNavItems: [
    {
      title: "Activity Management",
      icon: <Activity />,
      isActive: false,
      items: [
        {
          title: "Activities",
          url: "/admin/dashboard/activity",
          icon: <ActivityIcon />,
        },
      ],
    },
    {
      title: "User Management",
      icon: <User />,
      isActive: true,
      items: [
        {
          title: "Users",
          url: "/admin/dashboard/users",
          icon: <PersonStanding />,
        },
      ],
    },
    {
      title: "Travel Management",
      icon: <PlaneTakeoff />,
      isActive: false,
      items: [
        {
          title: "Travel Plans",
          url: "/admin/dashboard/travel-plans",
          icon: <BaggageClaim />,
        },
      ],
    },
  ],
  userNavItems: [
    {
      title: "Overview",
      icon: <ChartNoAxesCombined size={30} />,
      isActive: true,
      url: "/dashboard/user/overview",
      items: [],
    },
    {
      title: "Chat Inbox",
      icon: <MessagesSquare size={30} />,
      isActive: false,
      url: "/dashboard/user/chat-inbox",
      items: [],
    },
    {
      title: "Add Document",
      icon: <ScrollText size={30} />,
      isActive: false,
      url: "/dashboard/user/add-document",
      items: [],
    },
    {
      title: "Agent",
      icon: <Bot size={30} />,
      isActive: false,
      items: [],
    },
    {
      title: "Feedback",
      icon: <MessageSquareQuote size={30} />,
      isActive: false,
      items: [],
    },
    {
      title: "Settings",
      icon: <Settings size={30} />,
      isActive: false,
      items: [
        {
          title: "Profile",
          url: "/user/dashboard/profile",
          icon: <User2 />,
        },
        {
          title: "Help",
          url: "/user/dashboard/profile",
          icon: <User2 />,
        },
        {
          title: "Contact",
          url: "/user/dashboard/profile",
          icon: <User2 />,
        },
      ],
    },
  ],
};

type AppSidebarProps = React.ComponentProps<typeof Sidebar> & {
  userInfo: any;
};

export function AppSidebar({ userInfo, ...props }: AppSidebarProps) {
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarContent>
        <NavMain
          adminNavItems={data.adminNavItems}
          userNavItems={data.userNavItems}
          userInfo={userInfo}
        />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={userInfo} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
