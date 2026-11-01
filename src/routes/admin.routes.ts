const prefix = "/admin";

export const adminRoutes = [
  {
    title: "Management",
    items: [
     
      {
        title: "Create Hospital",
        url: `${prefix}/create-hospital`,
      },
      {
        title: "All Hospitals",
        url: `${prefix}/all-hospitals`,
      },
    ],
  },
  {
    title: "App Settings",
    items: [
      {
        title: "Routing",
        url: "#",
      },
      {
        title: "Data Fetching",
        url: "#",
      },
    ],
  },
];
