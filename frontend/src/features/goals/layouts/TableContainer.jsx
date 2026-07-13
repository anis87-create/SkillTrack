import React, { useState } from "react";
import { Pencil, Trash2 } from "lucide-react"; // If using lucide icons for actions
import { checkStatusFromDate, getStatusStyles } from "../../../utils/utils";
import EditModal from "../../../components/EditModal";

const TableContainer = ({ data, deleteTarget, editTarget }) => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const handleEdit = (target) => {
    setOpen(true);
    setSelectedItem(target);
  };

  const renderTargets = () => {
    return data?.map((row) => (
      <tr key={row.id} className="hover:bg-gray-50/50 transition-colors">
        <td className="py-4 px-4  font-medium text-gray-900">{row.title}</td>
        <td className="py-4 px-4 text-gray-500 max-w-xs truncate">
          {row.description}
        </td>
        <td className="py-4 px-4 text-gray-500">{row.date}</td>
        <td className="py-4 px-4">
          {/* Badge layout wrapper */}
          {(() => {
            const status = checkStatusFromDate(row.date);
            return (
              <span
                className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusStyles(status)}`}
              >
                <span className="w-1.5 h-1.5 rounded-full bg-current mr-1.5"></span>
                <span>{status}</span>
              </span>
            );
          })()}
        </td>
        <td className="py-4 px-4">
          {/* Action button designs */}
          <div className="flex items-center justify-center space-x-2">
            <button
              className="p-1.5 text-blue-600 hover:bg-blue-50 rounded transition"
              onClick={() => {
                handleEdit(row);
              }}
            >
              <Pencil className="w-4 h-4" />
            </button>
            <button
              className="p-1.5 text-red-600 hover:bg-red-50 rounded transition"
              onClick={() => deleteTarget(row)}
            >
              <Trash2 className="w-4 h-4" />
            </button>
          </div>
        </td>
      </tr>
    ));
  };

  return (
    <div className="overflow-x-auto my-3 shadow-sm">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="border-b border-gray-100 text-gray-500 text-sm font-semibold">
            <th className="pb-3 pt-2 px-4 font-medium">Objectif</th>
            <th className="pb-3 pt-2 px-4 font-medium">Description</th>
            <th className="pb-3 pt-2 px-4 font-medium">Date cible</th>
            <th className="pb-3 pt-2 px-4 font-medium">Statut</th>
            <th className="pb-3 pt-2 px-4 font-medium text-center">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100 text-sm text-gray-700">
          {renderTargets()}

          {data?.length === 0 && (
            <tr>
              <td
                colSpan="5"
                className="py-8 text-center text-gray-400 font-medium"
              >
                Aucun objectif trouvé pour ce filtre
              </td>
            </tr>
          )}
        </tbody>
      </table>
      {open && (
        <EditModal
          item={selectedItem}
          open={open}
          setOpen={setOpen}
          onClose={() => setOpen(false)}
          editTarget={editTarget}
        />
      )}
    </div>
  );
};

export default TableContainer;
