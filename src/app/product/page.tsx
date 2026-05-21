'use client';

import Header from "@/components/Header";
import {useState} from "react";
import Sidebar from "@/components/Sidebar";
import React from 'react'
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

import { Button } from "@/components/ui/button"
import { Field } from "@/components/ui/field"
import { Input } from "@/components/ui/input"
import { DataGrid, GridRowsProp, GridColDef } from '@mui/x-data-grid';


const rows: GridRowsProp = [
    { id: 1, name: 'Data Grid', description: 'the Community version' },
    { id: 2, name: 'Data Grid Pro', description: 'the Pro version' },
    { id: 3, name: 'Data Grid Premium', description: 'the Premium version' },
];

const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 20},
    { field: 'name', headerName: 'Name', width: 250 },
    { field: 'category', headerName: 'Category', width: 250 },
    { field: 'price', headerName: 'Price', width: 150 },
    { field: 'stock', headerName: 'Stock', width: 150 },
    { field: 'action', headerName: 'Action', width: 150 },
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
                    <div className={"flex flex-col p-4"}>
                        <div className={"h-[200px] flex justify-between"}>
                            <div className={"w-[45%]"}>
                                <Select>
                                    <SelectTrigger className="w-full">
                                        <SelectValue placeholder="Theme" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectGroup>
                                            <SelectItem value="light">Light</SelectItem>
                                            <SelectItem value="dark">Dark</SelectItem>
                                            <SelectItem value="system">System</SelectItem>
                                        </SelectGroup>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className={"w-[45%]"}>
                                <Field orientation="horizontal">
                                    <Input type="search" placeholder="Search..." className={"border-2 h-10"} />
                                    <Button className={"h-10 px-4 cursor-pointer"}>Search</Button>
                                </Field>
                            </div>
                        </div>
                        <div style={{ height: 300, width: '100%' }}>
                            <DataGrid rows={rows} columns={columns} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}