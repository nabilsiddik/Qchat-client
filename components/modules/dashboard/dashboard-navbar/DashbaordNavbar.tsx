import DashboardNavbarContent from "./DashboardNavbarContent";

const DashboardNavbar = async () => {
  //   const userInfo: any | null = await getLogedInUser();
  const userInfo: any | null = [];

  return (
    <header className="flex h-18 py-2 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12 border-b">
      <div className="w-full">
        <DashboardNavbarContent userInfo={userInfo} />
      </div>
    </header>
  );
};

export default DashboardNavbar;
