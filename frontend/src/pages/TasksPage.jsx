import React from 'react'
import { CalendarDays, MoreHorizontal, Search } from 'lucide-react'
import { tasks } from '../features/tasks/data/tasks'
import Task from '../features/tasks/components/Task'
import { Button } from '@mui/material'
const TasksPage = () => {
  
  const renderTasks = () => {
    return tasks.map((task) => (
            <Task
              key={task.id}
              task={task}
        />
    ))
  }

  return (
    <div className="space-y-6">
      <div className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
        <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
          <div>
            <h1 className="text-3xl font-semibold text-slate-900">Mes tâches</h1>
            <p className="mt-2 text-sm text-slate-500">
              Gère tes tâches et reste productif avec une vue claire des priorités.
            </p>
          </div>
          <Button className="inline-flex items-center justify-center rounded-2xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:opacity-95">
            + Nouvelle tâche
          </Button>
        </div>

        <div className="mt-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-lg">
            <div className="pointer-events-none absolute inset-y-0 left-4 flex items-center text-slate-400">
              <Search className="h-4 w-4" />
            </div>
            <input
              type="search"
              placeholder="Rechercher une tâche..."
              className="h-12 w-full rounded-2xl border border-slate-200 bg-slate-50 px-12 text-sm text-slate-700 outline-none transition focus:border-primary focus:ring-2 focus:ring-primary/10"
            />
          </div>
          <div className="flex flex-wrap gap-3 text-sm font-semibold text-slate-500">
            <button className="rounded-2xl border-b-2 border-primary pb-2 text-primary">Toutes</button>
            <button className="rounded-2xl px-4 py-2 transition hover:text-slate-900">À faire</button>
            <button className="rounded-2xl px-4 py-2 transition hover:text-slate-900">En cours</button>
            <button className="rounded-2xl px-4 py-2 transition hover:text-slate-900">Terminées</button>
          </div>
        </div>
      </div>

      <section className="rounded-[30px] border border-gray-200 bg-white p-6 shadow-sm">
        <div className="overflow-x-auto rounded-[28px] border border-gray-100">
          <table className="min-w-[740px] w-full divide-y divide-gray-100 text-left text-sm text-slate-700">
            <thead className="bg-slate-50 text-slate-500">
              <tr>
                <th className="px-5 py-4 w-16">
                  <input type="checkbox" className="h-4 w-4 rounded border-slate-300 text-primary focus:ring-primary" />
                </th>
                <th className="px-5 py-4 w-[38%]">Tâche</th>
                <th className="px-5 py-4 w-[22%] hidden lg:table-cell">Projet / Objectif</th>
                <th className="px-5 py-4 w-[18%]">Échéance</th>
                <th className="px-5 py-4 hidden sm:table-cell">Priorité</th>
                <th className="px-5 py-4">Statut</th>
                <th className="px-5 py-4">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              {renderTasks()}
            </tbody>
          </table>
        </div>

        <div className="mt-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between text-sm text-slate-500">
          <p>Affichage 1 à {tasks.length} sur {tasks.length} tâches</p>
          <div className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-slate-50 px-2 py-1">
            <button className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100">←</button>
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-white">1</span>
            <button className="rounded-full bg-white px-3 py-2 text-sm font-semibold text-slate-700 shadow-sm transition hover:bg-slate-100">→</button>
          </div>
        </div>
      </section>
    </div>
  )
}

export default TasksPage
