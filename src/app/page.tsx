"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";
import { Clock, Calendar, RefreshCw } from "lucide-react";

import ArrowLink from "@/components/links/ArrowLink";
import ButtonLink from "@/components/links/ButtonLink";
import UnderlineLink from "@/components/links/UnderlineLink";
import UnstyledLink from "@/components/links/UnstyledLink";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingDownIcon, TrendingUpIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import GenerationMixBarChart from "@/app/components/GenerationMixBarChart";
import { GenerationTrendChart } from "@/app/components/GenerationTrendChart";
import { Navbar } from "@/app/components/Navbar";

import data from "@/data/daily_energy_mix_latest.json";
const latest = data.latest;
const barChartData = [
  "solar",
  "wind",
  "hydro",
  "nuclear",
  "coal",
  "natural_gas",
  "other",
].map((source: string) => {
  const item = latest[source as keyof typeof latest] as any;
  return {
    source: item.source,
    value: item.megawatthours,
    gigawatthours: item.gigawatthours,
    percent: item.percent,
  };
});

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title></title>
      </Head>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-between">
        <div className="layout relative flex flex-col items-center justify-center text-center">
          {/* <DonutChart /> */}

          {/* <div className="grid grid-cols-1 gap-4 p-4 w-full">
            <Card className="@container/card"> */}
          <div className="flex flex-col sm:flex-row justify-start p-4 w-full">
            <span className="flex items-center">
              <Calendar className="w-6 h-6 pr-2" />
              <p className="text-sm font-bold pr-2">Date:</p>
              <p className="text-sm pr-6">{latest.date}</p>
            </span>
            <span className="flex items-center">
              {/* <Clock className="w-6 h-6 pr-2" /> */}
              <RefreshCw className="w-6 h-6 pr-2" />
              <p className="text-sm font-bold pr-2">Updated:</p>
              <p className="text-sm pr-6">{latest.updated}</p>
            </span>
          </div>
          {/* </Card>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Renewables</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {latest.renewables.percent}%
                </CardTitle>
                <div className="absolute right-4 top-4">
                  {/* <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge> */}
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {latest.renewables.gigawatthours} GWh
                </div>
                <div className="text-muted-foreground">
                  Share of electricity generation
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Nuclear</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {latest.nuclear.percent}%
                </CardTitle>
                <div className="absolute right-4 top-4">
                  {/* <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge> */}
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {/* Trending up this month <TrendingUpIcon className="size-4" /> */}
                  {latest.nuclear.gigawatthours} GWh
                </div>
                <div className="text-muted-foreground">
                  Share of electricity generation
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Fossil Fuels</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {latest.fossil_fuels.percent}%
                </CardTitle>
                <div className="absolute right-4 top-4">
                  {/* <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge> */}
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {latest.fossil_fuels.gigawatthours} GWh
                </div>
                <div className="text-muted-foreground">
                  Share of electricity generation
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 w-full hidden md:block">
            <Card className="@container/card">
              <CardHeader className="flex items-start">
                <CardTitle className="font-semibold">Generation Mix</CardTitle>
                <CardDescription className="">
                  Percent of electricity generated by source
                </CardDescription>
              </CardHeader>
              {/* <div className="absolute right-4 top-4"> */}
              {/* <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge> */}
              {/* </div> */}
              <CardContent className="h-[300px]">
                {/* <ChartContainer
                  config={chartConfig}
                  className="aspect-auto h-[250px] w-full"
                > */}
                <GenerationMixBarChart latestMixData={barChartData} />
                {/* </ChartContainer> */}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 p-4 w-full hidden md:block">
            <Card className="@container/card">
              <CardHeader className="flex items-start">
                <CardTitle className="font-semibold">Last 7 Days</CardTitle>
                <CardDescription className="">
                  Total electricity generation trend
                </CardDescription>
              </CardHeader>
              {/* <div className="absolute right-4 top-4"> */}
              {/* <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge> */}
              {/* </div> */}
              <CardContent className="h-[300px]">
                {/* <ChartContainer
                  config={chartConfig}
                  className="aspect-auto h-[250px] w-full"
                > */}
                <GenerationTrendChart />
                {/* </ChartContainer> */}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* footer */}
        <footer className="w-full flex flex-col items-center justify-center p-4 mt-20">
          <div className="flex items-center text-sm">
            Built by
            <UnderlineLink href="https://joypaulsen.com" className="ml-1">
              Joy Paulsen
            </UnderlineLink>
          </div>
          <div className="flex items-center text-sm">
            Data from
            <UnderlineLink href="https://www.eia.gov/" className="ml-1">
              U.S. Energy Information Administration
            </UnderlineLink>
          </div>
        </footer>
      </section>
    </main>
  );
}
