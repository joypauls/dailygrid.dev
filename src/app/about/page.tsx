"use client";

import Head from "next/head";
import * as React from "react";
import "@/lib/env";
import { Clock, Calendar, RefreshCw } from "lucide-react";

import UnderlineLink from "@/components/links/UnderlineLink";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

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
          <main className="max-w-3xl mx-auto px-6 py-4">
            <h1 className="text-3xl font-bold mb-4">About</h1>
            <p className="mb-6 text-lg">
              <strong>Daily Grid</strong> is a dashboard that allows users to
              explore and visualize daily electricity generation data for the
              United States. This app aims to play a small role in bringing our
              energy systems into focus, helping us understand where our
              electrical power comes from and its impact on the environment.
            </p>

            <h2 className="text-xl font-semibold mb-2">Upcoming Features</h2>
            <ul className="list-disc list-inside space-y-2 mb-8">
              <li>📈 Improved historical context</li>
              <li>🌎 Regional breakdowns</li>
              <li>📊 More charts!</li>
            </ul>

            <Separator className="mb-8" />

            <h1 className="text-3xl font-bold mb-8">Details</h1>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Metric Cards</h2>
              <p className="leading-relaxed mb-2">
                Each card displays the percentage of total electricity generated
                on the previous day from the below categories. Note that the
                percentages on these cards won't necessarily add up to exactly
                100% because they are based on total generation, and some
                generation sources (sources categorized as "other") are not
                counted toward any of these categories.
              </p>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Renewables</strong>: Includes solar, wind, hydro, and
                  geothermal. Biofuels are not broken out specifically in the
                  EIA data so they aren't included here, but their contribution
                  is very small.
                </li>
                <li>
                  <strong>Fossil Fuels</strong>: Includes coal, natural gas, and
                  petroleum (very minor source).
                </li>
                <li>
                  <strong>Nuclear</strong>: Just nuclear plants.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Charts</h2>
              <ul className="list-disc list-inside space-y-2">
                <li>
                  <strong>Generation Mix Chart</strong>: Breakdown of generation
                  sources (e.g., solar, wind, coal) as a percentage of total
                  electricity produced from the previous day. The category
                  "Other" shows the contributions of all other sources not
                  specifically broken out in the chart.
                </li>
                <li>
                  <strong>14-day History Chart</strong>: The last two weeks of
                  daily changes in total generation from all sources.
                </li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Geography</h2>
              <p className="leading-relaxed">
                The dashboard focuses on the United States, and currently
                displays aggregate data for the entire lower 48 states. Future
                enhancements will include regional breakdowns to provide more
                interesting views into electricity generation patterns.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Data Source</h2>
              <p className="leading-relaxed">
                All data is sourced from the{" "}
                <a
                  href="https://www.eia.gov/opendata/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-foreground"
                >
                  U.S. Energy Information Administration (EIA)
                </a>
                , specifically using their open APIs. Our backend fetches,
                aggregates, and normalizes it every morning. The home page
                displays information on data freshness at the top. Since the
                dashboard currently shows daily metrics, the most recent data
                will be from the previous day. Sometimes, the data source can be
                more than a day latent but we still check daily.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-xl font-semibold mb-2">Devices</h2>
              <p className="leading-relaxed">
                While intended for desktop use, the app is fully responsive and
                works well on mobile devices. In order to adapt to smaller
                screens, some charts may be simplified or simply not be
                displayed on mobile. For the best experience, viewing on desktop
                or a tablet is recommended.
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
