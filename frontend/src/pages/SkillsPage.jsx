import React from "react";
import { Pencil, Trash2 } from "lucide-react";
import { activeSkills, learningSkills } from '../features/skills/data/skills';
import ActiveSkill from "../features/skills/components/ActiveSkill.jsx";
import LearningSkill from "../features/skills/components/LearningSkill";
import { Button } from "@mui/material";

const SkillsPage = () => {
  const renderActiveSkills = () => {
    return activeSkills.map((skill) => (
      <ActiveSkill
        key={skill.id}
        skill={skill}
      />
    ));
  };
  const renderLearningSkills = () => {
    return learningSkills.map((skill) => (
      <LearningSkill
        key={skill.id}
        skill={skill}
      />
    ));
  };
  return (
    <div className="p-4">
      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between mb-6">
        <div className="flex flex-col">
          <h2 className="text-[30px] font-semibold mb-1.5">Mes compétences</h2>
          <p className="text-[14px] text-gray-500">
            Organise et améliore tes compétences techniques avec un tableau
            clair.
          </p>
        </div>
        <button className="bg-primary text-white rounded-lg px-4 h-10 hover:opacity-95 transition-all">
          + Ajouter une compétence
        </button>
      </div>

      <div className="space-y-6">
        <section className="bg-white border border-gray-200 rounded-[30px] p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">
                Mes compétences en cours
              </h3>
              <span className="inline-flex items-center justify-center rounded-full bg-[#eef2ff] text-primary px-3 py-1 text-xs font-semibold">
                6
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Visualise rapidement tes progrès et les prochaines étapes.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {renderActiveSkills()}
          </div>
        </section>

        <section className="bg-white border border-gray-200 rounded-[30px] p-5 shadow-sm">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between mb-5">
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-semibold">
                Compétences à développer
              </h3>
              <span className="inline-flex items-center justify-center rounded-full bg-[#eef2ff] text-primary px-3 py-1 text-xs font-semibold">
                5
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Priorise ce qui mérite ton attention dès maintenant.
            </p>
          </div>

          <div className="overflow-x-auto shadow-sm">
            <table className="min-w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-100 text-gray-500 text-sm font-semibold">
                  <th className="py-3 px-4">Compétence</th>
                  <th className="py-3 px-4 min-w-55">Niveau actuel</th>
                  <th className="py-3 px-4">Compétence</th>
                  <th className="py-3 px-4">Objectif visé</th>
                  <th className="py-3 px-4">Priorité</th>
                  <th className="py-3 px-4 text-center">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
                {renderLearningSkills()}
              </tbody>
            </table>
          </div>

          <div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#eef2ff] text-primary">
              i
            </span>
            <p>
              Une compétence est considérée comme « en cours » dès que vous
              atteignez 50% de progression.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default SkillsPage;
