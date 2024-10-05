import React, { useEffect, useState } from "react";
import { Button, Column, Heading, Row, Wraper } from "../ComponentsIndex";
import Icon from "../Button/Icon";

export default function Modal({
  isOpen = false,
  closeModal,
  className = "",
  title = "",
  children,
  ...props
}) {
  const [showModal, setShowModal] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setShowModal(true);
    } else {
      const timer = setTimeout(() => setShowModal(false), 300); 
      return () => clearTimeout(timer);
    }
  }, [isOpen]);

  return (
    <>
      {showModal && (
        <Row
          className={`fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50 transition-opacity duration-300 ease-out ${
            isOpen ? "opacity-100" : "opacity-0"
          } ${className}`}
          tabIndex={-1}
          {...props}
        >
          <Column
            className={`relative w-full max-w-lg mx-auto transform transition-all duration-300 ease-out ${
              isOpen ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <Wraper className="bg-white rounded-lg shadow-lg overflow-hidden">
              <Wraper className="px-6 py-4 border-b border-gray-200">
                <Heading className="text-xl font-semibold">{title}</Heading>
                <Button
                  type="button"
                  className="absolute top-3 right-3 p-2 hover:text-red-600"
                  onClick={closeModal}
                  aria-label="Close"
                >
                  {/* &times; */}
                  <Icon children={"x-lg"} />
                </Button>
              </Wraper>
              <Wraper className="px-6 py-4">{children}</Wraper>
            </Wraper>
          </Column>
        </Row>
      )}
    </>
  );
}
