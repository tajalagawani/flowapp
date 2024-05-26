// CategoryCard.tsx
import React from "react";
import { Card, CardHeader, CardBody, Divider, Image } from "@nextui-org/react";
import { Icon } from '@iconify/react';

interface Node {
  key: string;
  title: string;
  icon?: string;
  description: string;
}

interface CategoryCardProps {
  title: string;
  nodes: Node[];
  onDragStart: (event: React.DragEvent, nodeType: string) => void;
  onSelect: (key: string) => void;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, nodes, onDragStart, onSelect }) => {
  return (
    <Card className="w-full mb-4">
      <CardHeader>
        <h3 className="text-lg font-bold">{title}</h3>
      </CardHeader>
      <Divider />
      <CardBody>
        {nodes.map((node) => (
          <div
            key={node.key}
            className="flex items-center gap-2 p-2 border-b last:border-b-0 cursor-pointer hover:bg-gray-100"
            draggable
            onDragStart={(event) => onDragStart(event, node.key)}
            onClick={() => onSelect(node.key)}
          >
            {node.icon && <Icon icon={node.icon} width={24} />}
            <div className="flex flex-col">
              <span className="font-bold">{node.title}</span>
              <span className="text-sm text-gray-500">{node.description}</span>
            </div>
          </div>
        ))}
      </CardBody>
    </Card>
  );
};

export default CategoryCard;
