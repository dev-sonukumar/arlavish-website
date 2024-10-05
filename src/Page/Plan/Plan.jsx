import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getallplan,
  updateplan,
  deleteplan,
} from "../../ReduxToolkit/Slice/Plan";
import Table from "../../components/Table/Table";
import {
  Heading,
  Input,
  Modal,
  Row,
  Wraper,
  Button,
} from "../../components/ComponentsIndex";
import CreatePlan from "./CreatePlan";

function Plan() {
  // api
  const dispatch = useDispatch();
  const { plans, status } = useSelector((state) => state.plan);
  // variable
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const [selectedId, setSelectedId] = useState(null);
  // model
  const [isModalOpen, setIsModalOpen] = useState(false);
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  //  call api
  useEffect(() => {
    if (status === "idle") {
      dispatch(getallplan());
    }
  }, [dispatch, status]);
  // desrture id
  const handleEdit = (id) => {
    const selectedPlan = plans.find((plan) => plan._id === id);
    if (selectedPlan) {
      setName(selectedPlan.name);
      setPrice(selectedPlan.price);
      setDuration(selectedPlan.duration);
      setSelectedId(id);
      openModal();
    }
  };
  // handle update
  const handleUpdatePlan = (e) => {
    e.preventDefault();
    const data = {
      name,
      price,
      duration,
    };
    dispatch(updateplan({ selectedId, data }));
    setName("");
    setPrice("");
    setDuration("");
    setSelectedId(null);
    closeModal(); // Close modal after updating
  };
  // delete
  const handleDelete = (planId) => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this Plan?"
    );
    if (isConfirmed) {
      dispatch(deleteplan(planId));
    }
  };

  const columns = [
    { label: "Plan Name", accessor: "name" },
    { label: "Plan Price", accessor: "price" },
    { label: "Duration", accessor: "duration" },
  ];

  return (
    <>
      <Row className="m-3">
        <Heading
          children={"Services"}
          className={"text-2xl font-medium my-2"}
        />
        <Row className="flex justify-end">
          <CreatePlan />
        </Row>
        <Table
          columns={columns}
          data={plans || []}
          status={status}
          onEdit={handleEdit}
          onDelete={handleDelete}
        />

        {/* model editing */}
        <Modal
          isOpen={isModalOpen}
          closeModal={closeModal}
          title="Update Service"
        >
          <form onSubmit={handleUpdatePlan}>
            <Input
              label="Name"
              type="text"
              placeholder="Plan Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Plan Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
            <Input
              type="text"
              placeholder="Duration"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <Wraper className="flex justify-end">
              <Button type="submit">Update</Button>
            </Wraper>
          </form>
        </Modal>
      </Row>
    </>
  );
}

export default Plan;
