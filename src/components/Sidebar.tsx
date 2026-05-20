import React from 'react';
import Link from 'next/link';
import CategoryIcon from '@mui/icons-material/Category';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Inventory2Icon from '@mui/icons-material/Inventory2';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import GroupIcon from '@mui/icons-material/Group';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutIcon from '@mui/icons-material/Logout';

const Sidebar = ({ className = '' }: { className?: string | undefined }) => {
  return (
    <div
      className={`flex flex-col items-start justify-start space-y-6 bg-blue-950 p-4 ${className}`}
    >
      <h1 className={'mb-8 text-xl font-bold text-gray-100 '}>
        Système de gestion de stocks
      </h1>
      {/* Dahboard */}
      <Link href={'/'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <DashboardIcon color={"primary"}/>
          <p
            className={
              'text-center text-sm text-gray-200 group-hover:text-blue-400'
            }
          >
            Tableau de bord
          </p>
        </div>
      </Link>
      {/* Products */}
      <Link href={'/products'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <Inventory2Icon color={"primary"}/>
          <p className={'text-sm text-gray-200 group-hover:text-blue-400'}>
            Produits
          </p>
        </div>
      </Link>
      {/* Categories */}
      <Link href={'/stock'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <CategoryIcon color={"primary"} />
          <p className={'text-sm text-gray-200 group-hover:text-blue-400'}>
            Categories
          </p>
        </div>
      </Link>
      {/* Orders */}
      <Link href={'/orders'}>
        <div
            className={
              'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
            }
        >
          <ShoppingCartIcon color={"primary"} />
          <p className={'text-sm text-white group-hover:text-blue-400'}>
            Commandes
          </p>
        </div>
      </Link>
      <Link href={'/sales'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <LocalShippingIcon color={"primary"} />
          <p className={'text-sm text-gray-200 group-hover:text-blue-400'}>
            Fournisseurs
          </p>
        </div>
      </Link>

      <Link href={'/users'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <GroupIcon color={"primary"} />
          <p className={'text-sm text-gray-200 group-hover:text-blue-400'}>
            Utilisateurs
          </p>
        </div>
      </Link>
      <Link href={'/users'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <SettingsIcon color={"primary"} />
          <p className={'text-sm text-gray-200 group-hover:text-blue-400'}>
            Profile
          </p>
        </div>
      </Link>
      <Link href={'/users'}>
        <div
          className={
            'group relative flex w-full cursor-pointer items-center justify-center gap-1 space-x-2'
          }
        >
          <LogoutIcon color={"primary"} />
          <p className={'text-sm text-gray-200 group-hover:text-blue-400'}>
            Deconnecter
          </p>
        </div>
      </Link>
    </div>
  );
};

export default Sidebar;
