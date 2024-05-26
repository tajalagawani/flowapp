// NodesModal.tsx
import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button } from '@nextui-org/react';
import { Card, CardHeader, CardBody, Image } from '@nextui-org/react';

interface NodesModalProps {
  mode: 'add' | 'edit' | 'view';
  isOpen: boolean;
  onClose: () => void;
}

const NodesModal: React.FC<NodesModalProps> = ({ mode, isOpen, onClose }) => {
  const cardData = [
    { title: 'Card 1', description: 'Description 1', imgUrl: 'https://nextui.org/images/hero-card-complete.jpeg' },
    { title: 'Card 2', description: 'Description 2', imgUrl: 'https://nextui.org/images/hero-card-complete.jpeg' },
    { title: 'Card 1', description: 'Description 1', imgUrl: 'https://nextui.org/images/hero-card-complete.jpeg' },
    

  ];

  return (
    <Modal isOpen={isOpen} onOpenChange={onClose}>
      <ModalContent>
        <ModalHeader>{mode.charAt(0).toUpperCase() + mode.slice(1)} Node</ModalHeader>
        <ModalBody>
          <div className="flex flex-row gap-4">
            {cardData.map((card, index) => (
              <Card key={index} className="w-1/2">
                <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
                  <p className="text-tiny uppercase font-bold">{card.title}</p>
                  <small className="text-default-500">{card.description}</small>
                </CardHeader>
                <CardBody className="overflow-visible py-1">
                  <Image alt="Card background" className="object-cover rounded-xl" src={card.imgUrl} width={270} />
                </CardBody>
              </Card>
            ))}
          </div>
        </ModalBody>
        <ModalFooter>
          <Button color="danger" variant="light" onPress={onClose}>Close</Button>
          {mode !== 'view' && <Button color="primary" onPress={onClose}>{mode === 'add' ? 'Add Node' : 'Save Changes'}</Button>}
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default NodesModal;
