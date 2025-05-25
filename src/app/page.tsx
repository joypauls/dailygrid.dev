"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";

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
import { Navbar } from "@/app/components/Navbar";

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from "~/svg/Logo.svg";

// !STARTERCONF -> Select !STARTERCONF and CMD + SHIFT + F
// Before you begin editing, follow all comments with `STARTERCONF`,
// to customize the default configuration.

export default function HomePage() {
  return (
    <main>
      <Head>
        <title>Hi</title>
      </Head>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-between">
        <div className="layout relative flex flex-col items-center justify-center text-center">
          {/* <DonutChart /> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 w-full">
            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Renewables</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  10.0%
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
                  1000 megawatts
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
                  55.1%
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
                  1000 megawatts
                </div>
                <div className="text-muted-foreground">
                  Share of electricity generation
                </div>
              </CardFooter>
            </Card>

            <Card className="@container/card">
              <CardHeader className="relative">
                <CardDescription>Carbon Intensity</CardDescription>
                <CardTitle className="@[250px]/card:text-3xl text-2xl font-semibold tabular-nums">
                  1000
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
                  gCO2e/kWh
                </div>
                <div className="text-muted-foreground">
                  Visitors for the last 6 months
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
                <GenerationMixBarChart />
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
              Energy Information Administration
            </UnderlineLink>
          </div>
        </footer>
      </section>
    </main>
  );
}
