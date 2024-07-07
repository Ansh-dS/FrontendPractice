import React, { useState } from "react";
import MessageIcon from "@mui/icons-material/Message";
import Card from "@mui/material/Card";
import * as Avatar from "@radix-ui/react-avatar";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import CardContent from "@mui/material/CardContent";
import Drawer from "@mui/material/Drawer";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { Divider } from "@mui/material";
import * as Dialog from "@radix-ui/react-dialog";

export default function Page() {
  return (
    <div className="relative ">
      {/* back */}
      <div className="flex flex-col  ">
        <div className="w-full h-60 bg-green-600 "></div>
        <div
          className="bg-neutral-200 w-full "
          style={{ maxHeight: "67.3vh" }}
        ></div>
      </div>

      <div className="">
        <Front />
        <MaterialUiDrawer />
      </div>
    </div>
  );
}

function LeftHeader() {
  let [drawer, setDrawer] = useState(false);

  function OpenDrawer() {
    setDrawer(true);
    return <MaterialUiDrawer drawer={drawer} />;
  }

  return (
    <div className="flex-1">
      <Card variant="outlined " className="justify-between">
        <CardContent className="flex flex-row justify-between grow  ">
          <button>
            <Avatar.Root
              onClick={OpenDrawer}
              className="bg-blackA1 inline-flex h-[45px] w-[45px] select-none items-center justify-center overflow-hidden rounded-full align-middle"
            >
              <Avatar.Image
                className="h-full w-full rounded-[inherit] object-cover"
                src="https://images.unsplash.com/photo-1492633423870-43d1cd2775eb?&w=128&h=128&dpr=2&q=80"
                alt="Colm Tuite"
              />
              <Avatar.Fallback
                className="text-violet11 leading-1 flex h-full w-full items-center justify-center bg-white text-[15px] font-medium"
                delayMs={600}
              >
                CT
              </Avatar.Fallback>
            </Avatar.Root>
          </button>

          <div>
            <MessageIcon fontSize="large" />
            <DropdownMenu.Root>
              <DropdownMenu.Trigger>
                <MoreVertIcon fontSize="large" />
              </DropdownMenu.Trigger>

              <DropdownMenu.Content className="p-5 bg-gray-500 text-lg text-white rounded-xl ">
                <DropdownMenu.Arrow />
                <DropdownMenu.Item> hii</DropdownMenu.Item>
                <DropdownMenu.Item> hii</DropdownMenu.Item>
                <DropdownMenu.Item> hii</DropdownMenu.Item>
                <DropdownMenu.Item> hii</DropdownMenu.Item>
              </DropdownMenu.Content>
            </DropdownMenu.Root>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

function RightHeader() {
  return (
    <div className="flex-1 border-2 border-red-500">
      <Card>
        <h1>hii</h1>
      </Card>
    </div>
  );
}

function MaterialUiDrawer(drawer) {
  let [drawer1, setDrawer1] = useState(true);

  function CloseDrawer() {
    return setDrawer1(false);
  }
  return (
    <Drawer
      anchor="left"
      variant="temporary"
      open={drawer}
      onClose={CloseDrawer}
      PaperProps={{
        sx: {
          position: "absolute",
          top: " 112px",
          marginLeft: "14rem",
          width: "20rem",
          height: " 80vh",
          display: "flex",
          flexGrow: "1",
          justifyContent: "left",
          borderRadius: "0.5rem",
        },
      }}
    >
      <div className="overflow:hidden">
        <h1 className=" h-10 w-80 flex flex-1 bg-gray-400 text-white text-lg flex justify-center ">
          Hii
        </h1>
        <Divider />

        <h1 className=" h-10 w-80 flex flex-1 bg-gray-400 text-white text-lg flex justify-center ">
          Hii
        </h1>
        <Divider />
        <h1 className=" h-10 w-80 flex flex-1 bg-gray-400 text-white text-lg flex justify-center ">
          Hii
        </h1>
        <Divider />
        <h1 className=" h-10 w-80 flex flex-1 bg-gray-400 text-white text-lg flex justify-center ">
          Hii
        </h1>
        <Divider />
      </div>
    </Drawer>
  );
}

function Front() {
  return (
    <div className="relative">
      {/* Front */}
      <div className="absolute top-28 w-full flex justify-center">
        <div
          className="bg-gray-100 rounded-lg shadow-md shadow-black-100"
          style={{ width: "70vw", height: "80vh" }}
        >
          <div className="flex justify-between">
            <LeftHeader />
            <RightHeader />
          </div>
        </div>
      </div>
    </div>
  );
}
