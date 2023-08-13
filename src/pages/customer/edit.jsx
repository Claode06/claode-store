import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Layout from "../../components/layout";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import ContainerForm from "../../components/container/formContainer";
import InputText from "../../components/common/Input/inputText";
import SelectOption from "../../components/common/Input/selectOption";

const EditCustomer = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [loadingSubmit, setLoadingSubmit] = useState(false);
  const { id } = useParams();

  const listOption = [
    { value: 1, name: "Silver" },
    { value: 2, name: "Gold" },
    { value: 3, name: "Platinum" },
  ];

  async function onSubmit(e) {
    toast.success("Berhasil");
    navigate("/customer");

    // submit jika menggunakan api

    // setLoadingSubmit(true);
    // try {
    //   await api.post("/customer", e);
    //   toast.success("Berhasil");
    //   navigate("/customer");
    // } catch (err) {
    //   toast.error(err.message);
    // } finally {
    //   setLoadingSubmit(false);
    // }
  }

  return (
    <Layout title="Create Customer">
      <ContainerForm>
        <div className="row row-gap-3">
          <div className="col-12">
            <label className="mb-2">Nama Pelanggan</label>
            <InputText
              placeholder="Masukkan Nama Pelanggan . . ."
              register={register("name")}
            />
          </div>
          <div className="col-6">
            <label className="mb-2">Kode Pelanggan</label>
            <InputText
              placeholder="Masukkan Kode Pelanggan . . ."
              register={register("code")}
            />
          </div>
          <div className="col-6">
            <label className="mb-2">Jenis Member</label>
            <SelectOption
              listOption={listOption}
              register={register("member")}
            />
          </div>
        </div>

        <div className="d-flex justify-content-end gap-2 pt-5">
          <button
            className="btn btn-success px-4"
            onClick={handleSubmit(onSubmit)}
          >
            Save
          </button>
          <button
            className="btn btn-secondary px-4"
            onClick={() => {
              navigate("/customer");
            }}
          >
            Cancel
          </button>
        </div>
      </ContainerForm>
    </Layout>
  );
};

export default EditCustomer;
