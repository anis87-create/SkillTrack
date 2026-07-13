import React from 'react'

const ActiveSkill = ({ skill }) => {
  return (
    <article
      className="rounded-[28px] border border-gray-100 p-5"
    >
      <div className="flex items-center justify-between gap-4 mb-4">
        <div>
          <p className="text-sm font-semibold text-gray-900">{skill.name}</p>
          <p className="text-xs text-gray-500 mt-1">{skill.level}</p>
        </div>
        <span className="text-sm font-semibold text-gray-900">{skill.pct}%</span>
      </div>

      <div className="h-2.5 rounded-full bg-slate-100 overflow-hidden mb-3">
        <div
          className="h-full rounded-full"
          style={{ width: `${skill.pct}%`, backgroundColor: skill.color }}
        />
      </div>

      <div className="flex items-center justify-between text-xs font-semibold">
        <span
          className="inline-flex items-center rounded-full px-2.5 py-1"
          style={{ backgroundColor: `${skill.color}1a`, color: skill.color }}
        >
          {skill.level}
        </span>
        <span className="text-gray-400">Progrès</span>
      </div>
    </article>
  )
}

export default ActiveSkill
