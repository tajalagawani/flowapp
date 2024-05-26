"use client";

import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
  Link,
  Button,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Input,
  Avatar,
  Badge,
} from "@nextui-org/react";
import {Icon} from "@iconify/react";

import {AcmeIcon} from "./social";

import NotificationsCard from "./notifications-card";

export default function CanvasToolBar() {
  return (
    <div className="w-full">
      <Navbar
        classNames={{
          base: "pt-2 lg:pt-0 lg:bg-transparent lg:backdrop-filter-none",
          wrapper: "px-4 sm:px-6",
          item: "data-[active=true]:text-primary",
        }}
        height="60px"
      >

        <NavbarContent
          className="ml-auto flex h-12 max-w-fit items-center gap-0 rounded-full p-0 lg:bg-content2 lg:px-1 lg:dark:bg-content1"
          justify="end"
        >
          {/* Search */}
          <NavbarItem className="mr-2 hidden lg:flex">
            <Input
              aria-label="Search"
              classNames={{
                inputWrapper:
                  "bg-default-100 group-data-[hover=true]:bg-default-50 group-data-[focus=true]:bg-100",
              }}
              labelPlacement="outside"
              placeholder="Search..."
              radius="full"
              startContent={
                <Icon className="text-default-500" icon="solar:magnifer-linear" width={20} />
              }
            />
          </NavbarItem>
          {/* Mobile search */}
          <NavbarItem className="lg:hidden">
            <Button isIconOnly radius="full" variant="light">
              <Icon className="text-default-500" icon="solar:magnifer-linear" width={20} />
            </Button>
          </NavbarItem>
          {/* Theme change */}
          <NavbarItem className="hidden lg:flex">
            <Button isIconOnly radius="full" variant="light">
              <Icon className="text-default-500" icon="solar:sun-linear" width={24} />
            </Button>
          </NavbarItem>
          {/* Settings */}
          <NavbarItem className="hidden lg:flex">
            <Button isIconOnly radius="full" variant="light">
              <Icon className="text-default-500" icon="solar:settings-linear" width={24} />
            </Button>
          </NavbarItem>
          {/* Notifications */}
          <NavbarItem className="flex">
            <Popover offset={12} placement="bottom-end">
              <PopoverTrigger>
                <Button
                  disableRipple
                  isIconOnly
                  className="overflow-visible"
                  radius="full"
                  variant="light"
                >
                  <Badge color="danger" content="5" showOutline={false} size="md">
                    <Icon className="text-default-500" icon="solar:bell-linear" width={22} />
                  </Badge>
                </Button>
              </PopoverTrigger>
              <PopoverContent className="max-w-[90vw] p-0 sm:max-w-[380px]">
                <NotificationsCard className="w-full shadow-none" />
              </PopoverContent>
            </Popover>
          </NavbarItem>
          {/* User Menu */}
          <NavbarItem className="px-2">
            <Dropdown placement="bottom-end">
              <DropdownTrigger>
                <button className="mt-1 h-8 w-8 transition-transform">
                  <Badge color="success" content="" placement="bottom-right" shape="circle">
                    <Avatar size="sm" src="https://i.pravatar.cc/150?u=a04258114e29526708c" />
                  </Badge>
                </button>
              </DropdownTrigger>
              <DropdownMenu aria-label="Profile Actions" variant="flat">
                <DropdownItem key="profile" className="h-14 gap-2">
                  <p className="font-semibold">Signed in as</p>
                  <p className="font-semibold">johndoe@example.com</p>
                </DropdownItem>
                <DropdownItem key="settings">My Settings</DropdownItem>
                <DropdownItem key="team_settings">Team Settings</DropdownItem>
                <DropdownItem key="analytics">Analytics</DropdownItem>
                <DropdownItem key="system">System</DropdownItem>
                <DropdownItem key="configurations">Configurations</DropdownItem>
                <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
                <DropdownItem key="logout" color="danger">
                  Log Out
                </DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </NavbarItem>
        </NavbarContent>

        {/* Mobile Menu */}
        <NavbarMenu>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Dashboard
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem isActive>
            <Link aria-current="page" className="w-full" color="primary" href="#">
              Deployments
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Analytics
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Team
            </Link>
          </NavbarMenuItem>
          <NavbarMenuItem>
            <Link className="w-full" color="foreground" href="#">
              Settings
            </Link>
          </NavbarMenuItem>
        </NavbarMenu>
      </Navbar>
    </div>
  );
}
