

import * as React from "react";
import {Button, Input, Select, SelectItem, Spacer} from "@nextui-org/react";
import SchemaApp from "./schemaJson";


import {cn} from "./cn";

interface AccountSettingCardProps {
  className?: string;
}

const timeZoneOptions = [
  {
    label: "Coordinated Universal Time (UTC-3)",
    value: "utc-3",
    description: "Coordinated Universal Time (UTC-3)",
  },
  {
    label: "Coordinated Universal Time (UTC-4)",
    value: "utc-4",
    description: "Coordinated Universal Time (UTC-4)",
  },
  {
    label: "Coordinated Universal Time (UTC-5)",
    value: "utc-5",
    description: "Coordinated Universal Time (UTC-5)",
  },
];

const AccountSetting = React.forwardRef<HTMLDivElement, AccountSettingCardProps>(
  ({className, ...props}, ref) => (
    
    <div ref={ref} className={cn("p-2", className)} {...props}>
    
    
      <Spacer y={1} />
      <h3 className="text-lg font-semibold">Schema</h3>
      <Spacer y={1} />
      <SchemaApp />

    </div>
  ),
);

AccountSetting.displayName = "AccountSetting";

export default AccountSetting;
