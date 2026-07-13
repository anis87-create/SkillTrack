import { Pencil, Trash2 } from 'lucide-react'
import React from 'react'

const LearningSkill = ({ skill }) => {
  return (
    <tr  className="hover:bg-gray-50 transition-colors">
      <td className="py-4 px-4 align-middle font-medium text-gray-900">
        {skill.name}
      </td>
      <td className="py-4 px-4 align-middle w-56">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gray-500 w-14 text-left">
            {skill.pct}%
          </span>
          <div className="flex-1">
            <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden">
              <div
                className="h-full rounded-full bg-primary"
                style={{ width: `${skill.pct}%` }}
              />
            </div>
          </div>
        </div>
      </td>
      <td className="py-4 px-4 align-middle text-gray-700">
        {skill.competence}
      </td>
      <td className="py-4 px-4 align-middle">
        <span className="inline-flex rounded-full bg-[#fef3c7] px-2.5 py-1 text-xs font-semibold text-[#b45309]">
          Intermédiaire
        </span>
      </td>
      <td className="py-4 px-4 align-middle">
        <span
          className="inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold"
          style={{
            backgroundColor: `${skill.priorityColor}1a`,
            color: skill.priorityColor,
          }}
        >
          {skill.priority}
        </span>
      </td>
      <td className="py-4 px-4 text-center">
        <div className="inline-flex items-center justify-center gap-2">
          <button className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition">
            <Pencil className="w-4 h-4" />
          </button>
          <button className="p-1.5 text-red-600 hover:bg-red-50 rounded transition">
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </td>
    </tr>
  )
}

export default LearningSkill
