import React from 'react';
import { IoMenu } from 'react-icons/io5';
import { Search } from 'lucide-react';
import { FaBell } from 'react-icons/fa';
import { User } from 'lucide-react';

type HeaderProps = {
  onMenuClick: () => void;
};

const Header = ({ onMenuClick }: HeaderProps) => {
  return (
    <div className={'flex items-center justify-between p-3 shadow-md'}>
      <div className={'ml-6 cursor-pointer md:hidden'}>
        <IoMenu size={30} onClick={onMenuClick} />
      </div>
      <div className={'hidden cursor-pointer md:block'}>
        <span className={'font text-2xl font-bold text-red-600 capitalize'}>
          SEP
        </span>
        <span className={'text-sm font-extrabold text-gray-500'}>CONGO</span>
      </div>
      <div className={'flex items-center gap-4 sm:ml-auto'}>
        <Search className={'cursor-pointer'} />
        <FaBell className={'cursor-pointer'} />
        <div className={'flex cursor-pointer items-center gap-2'}>
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200">
            <User className="h-5 w-5 text-gray-600" />
          </div>
          <span className={'block text-sm'}>Franck M</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
