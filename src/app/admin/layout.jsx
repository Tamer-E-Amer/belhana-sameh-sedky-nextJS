import { AdminPageTitle, AdminSidebar, ProfileNotificationSearch } from "@/components";
export default function AdminLayout({ children }) {
  return (
    <div className="flex  items-start">
      {/* sidebar */}

      <div className="flex  items-start justify-between gap-0">
        <AdminSidebar />
      </div>
      {/* content */}
      <div className="bg-admin-bg w-full h-screen flex flex-col p-4 overflow-y-scroll">
        {/* title and search */}
        <div className="flex items-center justify-between gap-4 mb-4">
          {/* title */}
          <AdminPageTitle/>
          <ProfileNotificationSearch />
        </div>
        {children}
      </div>
    </div>
  );
}
