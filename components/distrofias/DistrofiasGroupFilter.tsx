import React from 'react';
import { MedicalGroup } from '@/lib/distrofias-types';

interface DistrofiasGroupFilterProps {
  groups: MedicalGroup[];
  selectedGroup: string;
  onSelectGroup: (group: string) => void;
  totalDiseasesCount: number;
}

export const DistrofiasGroupFilter: React.FC<DistrofiasGroupFilterProps> = ({
  groups,
  selectedGroup,
  onSelectGroup,
  totalDiseasesCount,
}) => {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-3 pt-1 scrollbar-none">
      <button
        onClick={() => onSelectGroup('todos')}
        className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
          selectedGroup === 'todos'
            ? 'bg-slate-900 text-white dark:bg-slate-100 dark:text-slate-900 shadow-sm'
            : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
        }`}
      >
        Todas as Doenças ({totalDiseasesCount})
      </button>

      {groups.map((group) => (
        <button
          key={group}
          onClick={() => onSelectGroup(group)}
          className={`px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all cursor-pointer ${
            selectedGroup === group
              ? 'bg-brand-blue text-white shadow-sm'
              : 'bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 border border-slate-200 dark:border-slate-700'
          }`}
        >
          {group}
        </button>
      ))}
    </div>
  );
};
