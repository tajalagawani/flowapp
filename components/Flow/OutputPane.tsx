"use client";

import React from "react";
import {Avatar, Button, Input, Kbd, NavbarItem, Spacer, Tab, Tabs, Tooltip, useDisclosure} from "@nextui-org/react";
import {Icon} from "@iconify/react";
import {useMediaQuery} from "usehooks-ts";
import schema from "./schemaJson";
import { SearchIcon } from "../icons";
import JsonOut from '../Flow/JsonOut'
// import {AcmeLogo} from "./acme";
// import ProfileSetting from "./profile-setting";
// import AppearanceSetting from "./appearance-setting";
// import AccountSetting from "./account-setting";
// import BillingSetting from "./billing-setting";
// import TeamSetting from "./team-setting";
// import SidebarDrawer from "./sidebar-drawer";
// import Sidebar from "./sidebar";
// import {cn} from "./cn";
// import {ChevronDownIcon, SearchIcon} from "@nextui-org/shared-icons";
// import {items} from "./items";
// import CustomItemss from "./CustomItems";

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
export default function OutputPane() {
  const {isOpen, onOpenChange} = useDisclosure();
  const [isCollapsed, setIsCollapsed] = React.useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  const onToggle = React.useCallback(() => {
    setIsCollapsed((prev) => !prev);
  }, []);
  const searchInput = (
		<Input
			aria-label="Search"
			classNames={{
				inputWrapper: "bg-default-100",
				input: "text-sm",
			}}
			endContent={
				<Kbd className="hidden lg:inline-block" keys={["command"]}>
					K
				</Kbd>
			}
			labelPlacement="outside"
			placeholder="Search..."
			startContent={
				<SearchIcon className="text-base text-default-400 pointer-events-none flex-shrink-0" />
			}
			type="search"
		/>
	);
  const sampleCode = `[
    {
        "timestamp": "2024-04-17T20:37:28.527+02:00",
        "Readable date": "April 17th 2024, 8:37:28 pm",
        "Readable time": "8:37:28 pm",
        "Day of week": "Wednesday",
        "Year": "2024",
        "Month": "April",
        "Day of month": "17",
        "Hour": "20",
        "Minute": "37",
        "Second": "28",
        "Timezone": "CEST +02:00"
    }
]`;

  return (
    <div className="flex h-dvh w-full gap-0 sticky top-3 p-3 bg-#f1f3f8 " >
      {/* Sidebar */}
     

      {/*  Settings Content */}
      <div className="w-full max-w-4xl	 flex-1 pt-1 pl-2 sticky top-0">
        {/* Title */}
        <div className="flex items-center gap-x-3">
          <Button isIconOnly className="sm:hidden" size="sm" variant="flat" onPress={onOpenChange}>
            <Icon
              className="text-default-500"
              icon="solar:sidebar-minimalistic-linear"
              width={20}
            />
          </Button>
       

        </div>
        {/* <JsonOut /> */}


        <Tabs
      
          classNames={{
            base: " mb-4",
            cursor: "bg-content1 dark:bg-content1",
            panel: "  pt0",
          }}
        >
          <Tab key="profile" title="Table">

          </Tab>
          <Tab key="appearance" title="JSON">
            <JsonOut code={sampleCode} editable={true} onChange={(newCode) => console.log(newCode)} />
          </Tab>
          <Tab key="account" title="Schema">

          </Tab>
      
        </Tabs>
      </div>
    </div>
  );
}
