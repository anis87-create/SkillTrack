import { CalendarDays, MoreHorizontal } from 'lucide-react'
import React from 'react'

const Task = ({ task }) => {
  const projectStyles = {
      React: 'bg-violet-100 text-violet-700',
      'Node.js': 'bg-emerald-100 text-emerald-700',
      PostgreSQL: 'bg-sky-100 text-sky-700',
      DevOps: 'bg-slate-100 text-slate-700',
      Tests: 'bg-indigo-100 text-indigo-700',
      Sécurité: 'bg-rose-100 text-rose-700',
    }
   const statusStyles = {
      'À faire': 'bg-amber-100 text-amber-700',
      'En cours': 'bg-sky-100 text-sky-700',
      Terminé: 'bg-emerald-100 text-emerald-700',
    }
  
    const priorityStyles = {
      Haute: 'bg-rose-100 text-rose-600',
      Moyenne: 'bg-amber-100 text-amber-700',
      Basse: 'bg-emerald-100 text-emerald-700',
    }
      
  return (
    <tr key={task.id} className="hover:bg-slate-50 transition-colors">
      <td className="px-5 py-4">
        <input
          type="checkbox"
          className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary"
        />
      </td>
      <td className="px-5 py-4 font-medium text-slate-900 wrap-break-word">{task.title}</td>
      <td className="px-5 py-4 hidden lg:table-cell">
        <span
          className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${projectStyles[task.project] || 'bg-slate-100 text-slate-700'}`}
        >
          {task.project}
        </span>
      </td>
      <td className="px-5 py-4 text-slate-500 min-w35">
        <div className="inline-flex items-center gap-2 whitespace-nowrap">
          <CalendarDays className="h-4 w-4 text-slate-400" />
          <span>{task.dueDate}</span>
        </div>
      </td>
      <td className="px-5 py-4 hidden sm:table-cell whitespace-nowrap">
        <span
          className={`inline-flex items-center whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${priorityStyles[task.priority]}`}
        >
          {task.priority === 'Haute'
            ? '↑ Haute'
            : task.priority === 'Moyenne'
            ? '— Moyenne'
            : '↓ Basse'}
        </span>
      </td>
      <td className="px-5 py-4 whitespace-nowrap">
        <span
          className={`inline-flex whitespace-nowrap rounded-full px-3 py-1 text-xs font-semibold ${statusStyles[task.status]}`}
        >
          {task.status}
        </span>
      </td>
      <td className="px-5 py-4 text-right text-slate-400">
        <MoreHorizontal className="h-5 w-5 hover:text-slate-600 cursor-pointer" />
      </td>
    </tr>
  )
}

export default Task
