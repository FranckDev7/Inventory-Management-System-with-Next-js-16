'use client';

import Header from '@/components/Header';
import { useState } from 'react';
import Sidebar from '@/components/Sidebar';
import React from 'react';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

import { Button } from '@/components/ui/button';
import { Field } from '@/components/ui/field';
import { Input } from '@/components/ui/input';
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';
import Box from '@mui/material/Box';

const rows: GridRowsProp = [
  {
    id: 1,
    name: 'Mouse',
    category: 'Tech',
    price: 25,
    stock: '20',
    action: 'order',
  },
  {
    id: 2,
    name: 'Hair Oil',
    category: 'the Pro version',
    price: 30,
    stock: '10',
    action: 'order',
  },
  {
    id: 3,
    name: 'LED Light',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 4,
    name: 'PC',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 5,
    name: 'Cream',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 6,
    name: 'RAM',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 7,
    name: 'Screen',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 8,
    name: 'Data Grid Premium',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 9,
    name: 'Data Grid Premium',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
  {
    id: 10,
    name: 'Data Grid Premium',
    category: 'the Premium version',
    price: 40,
    stock: '15',
    action: 'order',
  },
];

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 20, editable: false },
  { field: 'name', headerName: 'Name', width: 250, editable: true },
  { field: 'category', headerName: 'Category', width: 250, editable: true },
  { field: 'price', headerName: 'Price in $', width: 150, editable: true },
  { field: 'stock', headerName: 'Stock', width: 150, editable: true },
  { field: 'action', headerName: 'Action', width: 150, editable: true },
];

export default function ProductList() {
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
            Liste de produits
          </h2>
          <div className={'flex flex-col p-4'}>
            <div
              className={'flex h-[94px] justify-between max-[640px]:flex-col'}
            >
              <div className={'w-[45%] max-[640px]:w-full'}>
                <Select>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Select Product" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="mouse">Mouse</SelectItem>
                      <SelectItem value="hair_Oil">Hair Oil</SelectItem>
                      <SelectItem value="led_Light">LED Light</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className={'w-[45%] max-[640px]:w-[95%]'}>
                <Field orientation="horizontal">
                  <Input
                    type="search"
                    placeholder="Search product"
                    className={'h-10 border-2'}
                  />
                  <Button className={'h-10 cursor-pointer px-4'}>Search</Button>
                </Field>
              </div>
            </div>
            <Box sx={{ height: 400, width: '100%' }}>
              <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                  pagination: {
                    paginationModel: {
                      pageSize: 5,
                    },
                  },
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
              />
            </Box>
          </div>
        </div>
      </div>
    </div>
  );
}
