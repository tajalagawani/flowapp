// NodeList.tsx
import React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Icon } from '@iconify/react';

interface Node {
  key: string;
  title: string;
  icon?: string;
  description: string;
}

interface Category {
  key: string;
  title: string;
  nodes: Node[];
}

interface NodeListProps {
  categories: Category[];
  onSelect: (key: string) => void;
}

const NodeList: React.FC<NodeListProps> = ({ categories, onSelect }) => {
  const onDragStart = (event: React.DragEvent, nodeType: string) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <List sx={{ width: '100%', bgcolor: 'background.paper' }}>
      {categories.map((category) => (
        <React.Fragment key={category.key}>
          <Typography variant="h6" sx={{ pl: 1, pt: 1 }}>
            {category.title}
          </Typography>
          {category.nodes.map((node) => (
            <React.Fragment key={node.key}>
              <ListItem
                alignItems="flex-start"
                draggable
                onDragStart={(event) => onDragStart(event, node.key)}
                onClick={() => onSelect(node.key)}
                sx={{ cursor: 'pointer' }}
              >
                <ListItemAvatar>
                  <Avatar>
                    <Icon icon={node.icon} width={20} height={20} />
                  </Avatar>
                </ListItemAvatar>
                <ListItemText
                  primary={node.title}
                  secondary={
                    <Typography
                    sx={{ display: 'inline', fontSize: '0.780rem' }}
                    component="span"
                    color="text.primary"
                  >
                      {node.description}
                    </Typography>
                  }
                />
              </ListItem>
              <Divider variant="inset" component="li" />
            </React.Fragment>
          ))}
        </React.Fragment>
      ))}
    </List>
  );
};

export default NodeList;
