import React from "react";
import ScrollStack, { ScrollStackItem } from "../components/ScrollStack"; // Adjust path if needed

const items = [
  { id: 1, color: "#ff0040", title: "Card One" },
  { id: 2, color: "#590d22", title: "Card Two" },
  { id: 3, color: "#0f172a", title: "Card Three" },
  { id: 4, color: "#4ade80", title: "Card Four" },
];

const NewMainStack = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      
      <div className="h-[50vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold">Scroll Down to See the Stack</h1>
      </div>

      <ScrollStack itemOffset={50}>
        {items.map((item, index) => (
          <ScrollStackItem key={item.id}>
            {/* The Card Itself */}
            <div 
              className="w-[90%] max-w-4xl h-[600px] rounded-[40px] flex flex-col items-center justify-center text-white shadow-2xl"
              style={{ backgroundColor: item.color }}
            >
              <h2 className="text-6xl font-bold">{item.title}</h2>
              <p className="mt-4 text-xl opacity-80">Stuck at index {index}</p>
            </div>
          </ScrollStackItem>
        ))}
      </ScrollStack>

      <div className="h-[50vh] flex items-center justify-center">
        <h1 className="text-4xl font-bold">End of Stack</h1>
      </div>

    </div>
  );
};

export default NewMainStack;