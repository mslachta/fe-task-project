import React, { useState } from "react";
import { useForm } from "react-hook-form";

interface FormData {
  text: string;
  number: number;
  date: string;
}

const AppForm: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<FormData>();
  const [items, setItems] = useState<FormData[]>([]);
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const onSubmit = (data: FormData) => {
    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = data;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, data]);
    }
    reset();
  };

  const onDelete = (index: number) => {
    setItems(items.filter((_, i) => i !== index));
  };

  const onEdit = (index: number) => {
    setEditIndex(index);
    reset(items[index]);
  };

  return (
    <div className="bg-gray-900 text-white p-4 rounded-lg">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label htmlFor="text" className="block text-sm font-medium text-gray-400">Name</label>
          <input
            type="text"
            id="text"
            {...register("text", { required: true })}
            placeholder="Enter text"
            className="block w-full py-2 px-3 text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        <label htmlFor="text" className="block text-sm font-medium text-gray-400">Estimated hours booked on project</label>
        <input
          type="number"
          {...register("number")}
          placeholder="Enter number"
          className="block w-full py-2 px-3 text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <label htmlFor="text" className="block text-sm font-medium text-gray-400">What date do you have your eye on?</label>
        <input
          type="date"
          {...register("date")}
          placeholder="Select date"
          className="block w-full py-2 px-3 text-white bg-gray-800 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
        <button
          type="submit"
          className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-black shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
        >
          {editIndex === null ? "Add" : "Update"}
        </button>
      </form>
      <ul className="mt-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-gray-800 p-2 rounded-lg"
          >
            <div>
              {item.text} - {item.number} - {item.date}
            </div>
            <div>
              <button
                onClick={() => onEdit(index)}
                className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Edit
              </button>
              <button
                onClick={() => onDelete(index)}
                className="rounded bg-indigo-500 px-2 py-1 text-xs font-semibold text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppForm;
