"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";
import { Clock, Calendar, RefreshCw, Leaf, Atom, Fuel } from "lucide-react";

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
  Popover,
  PopoverTrigger,
  PopoverContent,
} from "@/components/ui/popover";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { TrendingDownIcon, TrendingUpIcon, Info } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import GenerationMixBarChart from "@/app/components/GenerationMixBarChart";
import { GenerationTrendChart } from "@/app/components/GenerationTrendChart";
import { Navbar } from "@/app/components/Navbar";
import { useEnergyData } from "@/app/hooks/useEnergyData";

export default function HomePage() {
  const { data, loading, error } = useEnergyData();
  // if (loading) return <p>Loading...</p>;
  // if (error || !data) return <p>Error loading energy data.</p>;
  if (!data) return null;

  const barChartData = [
    "solar",
    "wind",
    "hydro",
    "nuclear",
    "coal",
    "natural_gas",
    "other",
  ].map((source: string) => {
    const item = data.latest[source as keyof typeof data.latest] as any;
    return {
      source: item.source,
      value: item.megawatthours,
      gigawatthours: item.gigawatthours,
      percent: item.percent,
    };
  });
  const historyData = data.history.total;

  return (
    <main>
      <Head>
        <title>Daily Grid</title>
      </Head>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-between">
        <div className="flex flex-col items-center justify-center text-center">
          {/* <DonutChart /> */}

          {/* <div className="grid grid-cols-1 gap-4 p-4 w-full">
            <Card className="@container/card"> */}
          <div className="flex flex-col sm:flex-row justify-start py-4 px-6 w-full max-w-5xl">
            <span className="flex items-center">
              <Calendar className="w-6 h-6 pr-2" />
              <p className="text-sm font-bold pr-2">Date:</p>
              <p className="text-sm pr-6">{data.latest.date}</p>
            </span>
            <span className="flex items-center">
              {/* <Clock className="w-6 h-6 pr-2" /> */}
              <RefreshCw className="w-6 h-6 pr-2" />
              <p className="text-sm font-bold pr-2">Updated:</p>
              <p className="text-sm pr-6">{data.latest.updated}</p>
            </span>
          </div>
          {/* </Card>
          </div> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-4 px-6 w-full max-w-5xl">
            <Card className="@container/card rounded-md">
              <CardHeader className="relative">
                <CardDescription className="">
                  <div className="flex items-center justify-center gap-1">
                    <Leaf className="h-5" />
                    Renewables
                  </div>
                </CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {data.latest.renewables.percent}%
                </CardTitle>
                <div className="absolute right-4 top-4">
                  {/* <Badge
                    variant="outline"
                    className="flex gap-1 rounded-lg text-xs"
                  >
                    <TrendingUpIcon className="size-3" />
                    +12.5%
                  </Badge> */}

                  {/* <Popover>
                    <PopoverTrigger asChild>
                      <button>
                        <Info className="w-4 h-4 text-muted-foreground" />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-72 text-sm">
                      This is a more accessible, touch-friendly way to show
                      extra info.
                    </PopoverContent>
                  </Popover> */}
                </div>
              </CardHeader>
              <CardFooter className="flex-col items-start gap-1 text-sm">
                <div className="line-clamp-1 flex gap-2 font-medium">
                  {data.latest.renewables.gigawatthours} GWh
                </div>
                <div className="text-muted-foreground">
                  Electricity generation
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card rounded-md">
              <CardHeader className="relative">
                <CardDescription className="">
                  <div className="flex items-center justify-center gap-1">
                    <Atom className="h-5" />
                    Nuclear
                  </div>
                </CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {data.latest.nuclear.percent}%
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
                  {data.latest.nuclear.gigawatthours} GWh
                </div>
                <div className="text-muted-foreground">
                  Electricity generation
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card rounded-md">
              <CardHeader className="relative">
                <CardDescription className="">
                  <div className="flex items-center justify-center gap-1">
                    <Fuel className="h-5" />
                    Fossil Fuels
                  </div>
                </CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  {data.latest.fossil_fuels.percent}%
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
                  {data.latest.fossil_fuels.gigawatthours} GWh
                </div>
                <div className="text-muted-foreground">
                  Electricity generation
                </div>
              </CardFooter>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 py-4 px-6 w-full max-w-5xl hidden md:block">
            <Card className="@container/card rounded-md">
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
                <GenerationMixBarChart latestData={barChartData} />
                {/* </ChartContainer> */}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 py-4 px-6 w-full max-w-5xl hidden md:block">
            <Card className="@container/card rounded-md">
              <CardHeader className="flex items-start">
                <CardTitle className="font-semibold">14-Day History</CardTitle>
                <CardDescription className="">
                  Total electricity generated, all sources
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
                <GenerationTrendChart historyData={historyData} />
                {/* </ChartContainer> */}
              </CardContent>
            </Card>
          </div>
        </div>

        {/* footer */}
        <footer className="w-full flex flex-col items-center justify-center p-4 mt-20 text-xs md:text-sm">
          <div className="flex items-center">
            Built by
            <UnderlineLink href="https://joypaulsen.com" className="ml-1">
              Joy Paulsen
            </UnderlineLink>
          </div>
          <div className="flex items-center">
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
