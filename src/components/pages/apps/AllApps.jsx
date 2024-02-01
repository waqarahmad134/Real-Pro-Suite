import React from "react";
import useFetch from "../../../ApiClient/GetApi";
import MainLayout from "../layout/MainLayout";
import Card from "../home/homeElements/Card";
import { ContentCSS } from "../../../Utils/Styles";
import { BASE_URL } from "../../../Utils/urls";

export default function AllApps() {
  const { data } = useFetch("dashboard/v1/allApps");
  console.log("🚀 ~ AllApps ~ data:", data);
  return (
    <div>
      <MainLayout />
      <section className={ContentCSS}>
        <h2 className="text-xl font-semibold">All Apps</h2>
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 grid-cols-2 gap-5">
          {data?.data?.length > 0
            ? data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app.appName}
                  icon={app?.logo === null ? "https://source.unsplash.com/500x500/?logos" : `${BASE_URL}${app?.logo}`}
                  location={app.appUrl}
                  alt={index}
                />
              ))
            : ""}
        </div>
      </section>
    </div>
  );
}
