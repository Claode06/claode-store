import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../../components/layout";
import { useForm } from "react-hook-form";
import ContainerForm from "../../components/container/formContainer";
import InputText from "../../components/common/Input/inputText";
import SelectOption from "../../components/common/Input/selectOption";
import TextArea from "../../components/common/Input/textArea";
import { toast } from "react-toastify";

const EditSupplier = () => {
  const { register, handleSubmit, setValue } = useForm();
  const navigate = useNavigate();
  const [loadingSubmit, setLoadingSubmit] = useState(false);

  const listOption = [
    { value: 1, name: "Aktif" },
    { value: 0, name: "Tidak Aktif" },
  ];

  async function onSubmit(e) {
    toast.success("Berhasil");
    navigate("/supplier");

    // submit jika menggunakan api

    // setLoadingSubmit(true);
    // try {
    //   await api.post("/supplier", e);
    //   toast.success("Berhasil");
    //   navigate("/supplier");
    // } catch (err) {
    //   toast.error(err.message);
    // } finally {
    //   setLoadingSubmit(false);
    // }
  }

  return (
    <Layout title="Edit Supplier">
      <ContainerForm>
        <div className="row row-gap-3">
          <div className="col-6">
            <label className="mb-2">Nama Supplier</label>
            <InputText
              placeholder="Masukkan Nama Supplier . . ."
              register={register("name")}
            />
          </div>
          <div className="col-6">
            <label className="mb-2">Jenis Member</label>
            <SelectOption
              listOption={listOption}
              register={register("status")}
            />
          </div>
          <div className="col-12">
            <label className="mb-2">Alamat Supplier</label>
            <TextArea
              placeholder="Masukkan Alamat . . ."
              register={register("address")}
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
              navigate("/supplier");
            }}
          >
            Cancel
          </button>
        </div>
      </ContainerForm>
    </Layout>
  );
};

export default EditSupplier;
