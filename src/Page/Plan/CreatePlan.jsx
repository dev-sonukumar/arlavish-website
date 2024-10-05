import React, { useEffect, useState } from "react";
import { Button, Input, Modal, Wraper } from "../../components/ComponentsIndex";
import { useDispatch, useSelector } from "react-redux";
import { createplan } from "../../ReduxToolkit/Slice//Plan";
import { ClipLoader } from "react-spinners";
function CreatePlan() {
  const dispatch = useDispatch();
  const { loadingStatus } = useSelector((state) => state.plan);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [duration, setDuration] = useState("");
  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  //
  const handleCreatePlan = (e) => {
    e.preventDefault();
    dispatch(createplan({ name, price, duration }));
    setName("");
    setPrice("");
    setDuration("");
    setSelectedId(null);
  };

  useEffect(() => {
    if (loadingStatus === "succeeded") {
      closeModal();
    }
  }, [loadingStatus]);

  return (
    <>
      <Button onClick={openModal}>Create Service</Button>
      {/* model editing */}
      <Modal
        isOpen={isModalOpen}
        closeModal={closeModal}
        title="Create Service"
      >
        <form onSubmit={handleCreatePlan}>
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
            <Button children="SUBMIT" type="submit">
              {loadingStatus === "loading" ? (
                <div className="flex justify-center items-center">
                  <div className="flex justify-center items-center">
                    <ClipLoader color="white" size={25} />
                  </div>
                </div>
              ) : (
                "SUBMIT"
              )}
            </Button>
          </Wraper>
        </form>
      </Modal>
    </>
  );
}

export default CreatePlan;
