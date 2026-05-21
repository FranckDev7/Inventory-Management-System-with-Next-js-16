'use client';

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';
import { useState } from 'react';
import { DollarSign } from 'lucide-react';

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
          <h2 className={'p-4 text-2xl font-bold text-gray-600'}>
            Tableau de bord
          </h2>
          {/* Blocs du début */}
          <div className="grid w-full gap-4 p-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Card 1 */}
            <div className="flex flex-col space-y-3 rounded-md bg-blue-500 p-3 text-white shadow-md">
              <p className={'text-center font-bold'}>Total Products</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-3xl">8</p>
              </div>
            </div>
            {/* Card 2 */}
            <div className="flex flex-col space-y-3 rounded-md bg-green-500 p-3 text-white shadow-md">
              <p className={'text-center font-bold'}>Total Stocks</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-3xl">65</p>
              </div>
            </div>
            {/* Card 3 */}
            <div className="flex flex-col space-y-3 rounded-md bg-yellow-500 p-3 text-white shadow-md">
              <p className={'text-center font-bold'}>Order Today</p>
              <div className="flex items-center justify-center gap-4">
                <p className="text-3xl">0</p>
              </div>
            </div>
            {/* Card 4 */}
            <div className="flex flex-col space-y-3 rounded-md bg-blue-500 p-3 text-white shadow-md">
              <p className={'text-center'}>Revenue</p>
              <div className="flex items-center justify-center gap-2">
                <DollarSign size={32} />
                <p className="text-3xl">100</p>
              </div>
            </div>
          </div>

          {/* Blocs du millieu */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
            <div className="rounded-md bg-white p-4 shadow-md">
              <p className={"font-bold text-lg"}>Produits en rupture de stock</p>
              <div>Liste de produits</div>
            </div>
            <div className="rounded-md bg-white p-4 shadow-md flex flex-col">
              <p className={"mb-4 font-bold text-lg"}>Produits les plus vendus</p>
              <div className={"flex gap-4 text-sm"}>
                  <div>
                    <p className={"font-semibold"}>Name</p>
                    <p className={"font-semibold"}>Category</p>
                    <p className={"font-semibold"}>Total Units Sold</p>
                  </div>
                  <div>
                    <p>: <span className={"pl-2"}>Monitor</span></p>
                    <p>: <span className={"pl-2"}>Electronic</span></p>
                    <p>: <span className={"pl-2"}>2</span></p>
                  </div>
              </div>
            </div>
            <div className="rounded-md bg-white p-4 shadow-md">
              <p className={"mb-4 font-bold text-lg"}>Produits à faible stock</p>
              <div className={"flex gap-4 text-sm"}>
                <div>
                  <p className={"font-semibold"}>Name</p>
                  <p className={"font-semibold"}>Category</p>
                  <p className={"font-semibold"}>Total Units Sold</p>
                </div>
                <div>
                  <p>: <span className={"pl-2"}>Monitor</span></p>
                  <p>: <span className={"pl-2"}>PC</span></p>
                  <p>: <span className={"pl-2"}>RAM</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
