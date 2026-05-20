'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { CircleDollarSign } from 'lucide-react';
import { Plus } from 'lucide-react';

export default function Home() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Header onMenuClick={() => setOpen(true)} />
      <div className="grid min-h-screen grid-cols-1 md:grid-cols-[230px_1fr]">
        {/* Sidebar desktop */}
        <Sidebar className={'hidden md:flex'} />
        {/* Sidebar mobile (overlay) */}
        {open && (
          <div className="fixed inset-0 z-50 flex">
            {/* overlay sombre */}
            <div
              className="absolute inset-0 bg-black/50"
              onClick={() => setOpen(false)}
            />

            {/* sidebar */}
            <Sidebar className={'max-[640px]:px-4'} />
          </div>
        )}

        {/* Contenu */}
        <div className="overflow-y-auto bg-gray-100">
          <h2 className={"p-4 text-2xl font-bold text-gray-600"}>Tableau de bord</h2>
          {/* Blocs du début */}
          <div className="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col space-y-3 rounded-lg bg-blue-500 text-white p-3 shadow-md">
              <p className={"text-center"}>Total Products</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-3xl">8</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col space-y-3 rounded-lg bg-green-500 text-white p-3 shadow-md">
              <p className={"text-center"}>Total Stocks</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-3xl">65</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col space-y-3 rounded-lg bg-yellow-500 text-white p-3 shadow-md">
              <p className={"text-center"}>Order Today</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-3xl">0</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col space-y-3 rounded-lg bg-blue-500 text-white p-3 shadow-md">
              <p className={"text-center"}>Revenue</p>
              <div className="flex items-center justify-center gap-4">
                <Plus size={16} />
                <p className="text-3xl">100</p>
              </div>
            </div>
          </div>

          {/* Blocs du millieu */}
          <div className="grid h-[40%] w-full gap-4 p-4 md:grid-cols-4">
            {/* Bloc 1 */}
            <div className="rounded-lg bg-white shadow-md md:col-span-2 xl:col-span-3">
              1
            </div>

            {/* Bloc 2 */}
            <div className="rounded-lg bg-white shadow-md md:col-span-2 xl:col-span-1">
              2
            </div>
          </div>

          {/* Blocs de la fin */}
          <div className="grid h-[40%] w-full gap-4 p-4 md:grid-cols-4">
            {/* Bloc 1 */}
            <div className="rounded-lg bg-white shadow-md md:col-span-2 xl:col-span-3">
              1
            </div>

            {/* Bloc 2 */}
            <div className="rounded-lg bg-white shadow-md md:col-span-2 xl:col-span-1">
              2
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
