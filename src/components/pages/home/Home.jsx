// @ts-nocheck
import React, { useState } from "react";
import useFetch from "../../../ApiClient/GetApi";
import Card from "./homeElements/Card";
import NewsCard from "./homeElements/NewsCard";
import { ContentCSS } from "../../../Utils/Styles";
import MainLayout from "../layout/MainLayout";
import { BASE_URL } from "../../../Utils/urls";

export default function Home() {
  const { data } = useFetch("dashboard/v1/suiteTools");
  const topApps = useFetch("dashboard/v1/getTopApps");
  return (
    <>
      <MainLayout />
      <section className={ContentCSS}>
        <h2 className="text-xl font-semibold">Suite Tools  <hr className="border-t-2 my-2"/> </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {data?.data?.length > 0
            ? data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app.appName}
                  icon={
                    app?.logo === null
                      ? "https://source.unsplash.com/500x500/?logos"
                      : `${BASE_URL}${app?.logo}`
                  }
                  location={app.appUrl}
                  alt={index}
                />
              ))
            : ""}
        </div>
        <h2 className="text-xl font-semibold">Top Apps<hr className="border-t-2 my-2"/></h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-5">
          {topApps?.data?.data?.length > 0
            ? topApps?.data?.data?.map((app, index) => (
                <Card
                  key={index}
                  title={app.appName}
                  icon={
                    app?.logo === null
                      ? "https://source.unsplash.com/500x500/?logos"
                      : `${BASE_URL}${app?.logo}`
                  }
                  location={app.appUrl}
                  alt={index}
                />
              ))
            : ""}
        </div>

        <NewsCard
          img="https://i.ytimg.com/vi/seNKZeot5A8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgVChJMA8=&rs=AOn4CLBi1q3K0RJyVC3Dq3sQn2Pdn8ZaJg"
          title="Together, We Rise Video"
          order="order-2"
          desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
          in debitis soluta labore modi hic ullam aspernatur vero voluptate
          error. Reprehenderit illum rerum aspernatur quod temporibus
          consequuntur cumque provident omnis! Laborum totam pariatur harum
          quod non natus, voluptatibus laboriosam numquam fugiat possimus, ut
          eius sint? Consequatur nobis ad, fuga eveniet asperiores quia.
          Distinctio laborum debitis, aliquid similique accusamus corporis.
          Aperiam voluptates ea rerum repellendus hic, distinctio corporis
          officia dolores."
        />
        <div className="grid grid-cols-2 gap-3 my-5">
          <NewsCard
            img="https://i.ytimg.com/vi/seNKZeot5A8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgVChJMA8=&rs=AOn4CLBi1q3K0RJyVC3Dq3sQn2Pdn8ZaJg"
            title="Top 10 reports coming in June"
            order="order-1"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
          in debitis soluta labore modi hic ullam aspernatur vero voluptate
          error."
          />
          <NewsCard
            img="https://i.ytimg.com/vi/seNKZeot5A8/maxresdefault.jpg?sqp=-oaymwEmCIAKENAF8quKqQMa8AEB-AHUBoAC4AOKAgwIABABGGUgVChJMA8=&rs=AOn4CLBi1q3K0RJyVC3Dq3sQn2Pdn8ZaJg"
            title="Jared james' Advice? Breathe and Be Ready"
            order="order-1"
            desc="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Inventore,
          in debitis soluta labore modi hic."
          />
        </div>
      </section>
    </>
  );
}
