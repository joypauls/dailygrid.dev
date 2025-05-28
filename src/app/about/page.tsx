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
import { Separator } from "@/components/ui/separator";

import GenerationMixBarChart from "@/app/components/GenerationMixBarChart";
import { GenerationTrendChart } from "@/app/components/GenerationTrendChart";
import { Navbar } from "@/app/components/Navbar";

export default function AboutPage() {
  return (
    <main>
      <Head>
        <title>Daily Grid</title>
      </Head>
      <Navbar />
      <section className="min-h-screen flex flex-col justify-between">
        <div>
          <main className="max-w-3xl mx-auto px-4 py-4">
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <p className=" mb-8 text-lg">
              <strong>Daily Grid</strong> is a daily dashboard that visualizes
              U.S. electricity generation data from the Energy Information
              Administration (EIA). It aims to make real-time grid dynamics
              understandable, accessible, and transparent to the public.
            </p>

            <Separator className="mb-8" />

            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-2">
                📊 What You’re Seeing
              </h2>
              <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                <li>
                  <strong>Energy Mix Chart</strong>: Breakdown of generation
                  sources (e.g., solar, wind, coal) as a percentage of total
                  electricity produced.
                </li>
                <li>
                  <strong>Daily Generation Trend</strong>: Recent changes in
                  daily electricity output, measured in gigawatt-hours (GWh).
                </li>
                <li>
                  <strong>Carbon Intensity (coming soon)</strong>: Grams of CO₂
                  per kilowatt-hour generated, giving a sense of grid
                  "cleanliness".
                </li>
              </ul>
            </section>

            <section className="mb-10">
              <h2 className="text-xl font-semibold mb-2">
                🛠️ Data & Methodology
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                All data is sourced from the{" "}
                <a
                  href="https://www.eia.gov/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  U.S. Energy Information Administration (EIA)
                </a>
                , specifically the hourly balancing authority datasets. We
                aggregate and normalize it daily using a custom open-source
                Python backend, available on GitHub.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-2">🙋 Why This Exists</h2>
              <p className="text-muted-foreground leading-relaxed">
                Electricity powers everything, but most of us don’t know where
                it comes from — or how clean it is. GridSnapshot was built to
                fill that gap. It’s a personal project, portfolio piece, and
                public resource all in one.
              </p>
            </section>
          </main>
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
