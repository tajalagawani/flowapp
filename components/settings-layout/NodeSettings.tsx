"use client";

import React from "react";
import {Avatar, Button, Spacer, Tab, Tabs, Tooltip, useDisclosure} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";

import {AcmeLogo} from "./acme";
import ProfileSetting from "./profile-setting";
import AppearanceSetting from "./appearance-setting";
import AccountSetting from "./account-setting";
import BillingSetting from "./billing-setting";
import TeamSetting from "./team-setting";
import SidebarDrawer from "./sidebar-drawer";
import Sidebar from "./sidebar";
import {cn} from "./cn";

import {items} from "./items";

/**
 * This example requires installing the `usehooks-ts` and `lodash` packages.
 * `npm install usehooks-ts lodash`
 *
 * import {useMediaQuery} from "usehooks-ts";
 * import {isEqual, uniqWith} from "lodash";
 *
 *
 * 💡 TIP: You can use the usePathname hook from Next.js App Router to get the current pathname
 * and use it as the active key for the Sidebar component.
 *
 * ```tsx
 * import {usePathname} from "next/navigation";
 *
 * const pathname = usePathname();
 * const currentPath = pathname.split("/")?.[1]
 *
 * <Sidebar defaultSelectedKey="home" selectedKeys={[currentPath]} />
 * ```
 */
interface NodeSettingsProps {
  nodeName: string;
  nodeDescription: string;
}

export default function NodeSettings({ nodeName, nodeDescription }: NodeSettingsProps) {
  const { isOpen, onOpenChange } = useDisclosure();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);
  return (
    <div className="flex h-dvh w-full gap-4">
      {/* Sidebar */}


      {/*  Settings Content */}
      <div className="w-full max-w-3xl flex-2 p-8">
        {/* Title */}
        <div className="flex items-center gap-x-5">
          <Button isIconOnly className="sm:hidden" size="sm" variant="flat" onPress={onOpenChange}>
            <Icon
              className="text-default-500"
              icon="solar:sidebar-minimalistic-linear"
              width={20}
            />
          </Button>
          <h1 className="text-3xl font-bold leading-9 text-default-foreground">
            {nodeName}
          </h1>
        </div>
        <h2 className="mt-2 text-small text-default-500">{nodeDescription}</h2>

        {/*  Tabs */}
        <Tabs
          fullWidth
          classNames={{
            base: "mt-6",
            cursor: "bg-content1 dark:bg-content1",
            panel: "w-full p-0 pt-4",
          }}
        >
          <Tab key="profile" title="Profile">
            <ProfileSetting />
          </Tab>
          <Tab key="appearance" title="Appearance">
            <AppearanceSetting />
          </Tab>
          <Tab key="account" title="Account">
            <AccountSetting />
          </Tab>
          <Tab key="billing" title="Billing">
            <BillingSetting />
          </Tab>
          <Tab key="team" title="Team">
            <TeamSetting />
          </Tab>
        </Tabs>
      </div>
    </div>
  );
}
