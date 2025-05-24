'use client';

import Head from 'next/head';
import * as React from 'react';
import '@/lib/env';

import ArrowLink from '@/components/links/ArrowLink';
import ButtonLink from '@/components/links/ButtonLink';
import UnderlineLink from '@/components/links/UnderlineLink';
import UnstyledLink from '@/components/links/UnstyledLink';
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";

import DonutChart from '@/app/components/DonutChart';
import { Navbar } from '@/app/components/Navbar';

/**
 * SVGR Support
 * Caveat: No React Props Type.
 *
 * You can override the next-env if the type is important to you
 * @see https://stackoverflow.com/questions/68103844/how-to-override-next-js-svg-module-declaration
 */
import Logo from '~/svg/Logo.svg';

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
      <section className='bg-white dark:bg-zinc-900'>
        <div className='layout relative flex min-h-screen flex-col items-center justify-center py-12 text-center'>

          {/* <DonutChart /> */}

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-6 w-full">
            <Card className="bg-white dark:bg-zinc-900 shadow-md rounded-md">
              <CardHeader>
                <CardTitle className="font-semibold text-lg">Renewables</CardTitle>
                <CardDescription>Real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-normal">10%</div>
                {/* <div className="text-xs text-muted-foreground">Updated 5 min ago</div> */}
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-zinc-900 shadow-md rounded-md">
              <CardHeader>
                <CardTitle className="font-semibold text-lg">Fossil Fuels</CardTitle>
                <CardDescription>Real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-normal">55%</div>
                {/* <div className="text-xs text-muted-foreground">Updated 5 min ago</div> */}
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-zinc-900 shadow-md rounded-md">
              <CardHeader>
                <CardTitle className="font-semibold text-lg">Carbon Intensity</CardTitle>
                <CardDescription>Real-time</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-normal">382 gCO₂/kWh</div>
                {/* <div className="text-xs text-muted-foreground">Updated 5 min ago</div> */}
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 p-6 w-full h-[550px]">
          <Card className="bg-white dark:bg-zinc-900 shadow-md rounded-md py-4">
          <DonutChart /> 
          </Card>
          </div>

          <div className="grid grid-cols-1 gap-4 p-6 w-full h-[550px]">
          <Card className="bg-white dark:bg-zinc-900 shadow-md rounded-md py-4">
          <DonutChart /> 
          </Card>
          </div>

          {/* <footer className='text-gray-700'>
            © {new Date().getFullYear()} By{' '}
            <UnderlineLink href='https://joypaulsen.com'>
              Joy Paulsen
            </UnderlineLink>
          </footer> */}
        </div>
      </section>
    </main>
  );
}
