import React from "react";

// Define props for the items
interface ScrollStackItemProps {
  children: React.ReactNode;
  className?: string;
}

// Item Component
export const ScrollStackItem = ({ children, className = "" }: ScrollStackItemProps) => {
  return (
    <div className={`sticky top-0 h-screen flex items-center justify-center ${className}`}>
      {children}
    </div>
  );
};

// Define props for the container
interface ScrollStackProps {
  children: React.ReactNode;
  className?: string;
  itemOffset?: number; // How much space between stacked cards (e.g., 40px)
}

// Main Container Component
const ScrollStack = ({ children, className = "", itemOffset = 40 }: ScrollStackProps) => {
  const items = React.Children.toArray(children);

  return (
    <div className={`relative w-full ${className}`} style={{ paddingBottom: "20vh" }}>
      {items.map((child, index) => {
        return (
          <div
            key={index}
            className="sticky"
            style={{
              // This is the magic: Each card sticks further down the page
              top: `${index * itemOffset}px`,
              // Ensure z-index puts later cards on top
              zIndex: index + 1,
            }}
          >
            {child}
          </div>
        );
      })}
    </div>
  );
};

export default ScrollStack;