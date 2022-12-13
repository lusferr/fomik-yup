import React from "react";
import { Formik } from "formik";
import "./App.css";
import ButtonLoader from "./components/ButtonLoader";
import CustomInput from "./components/customInput";
import PreviewImage from "./components/PreviewImage";
import { formSchema } from "./schemas";

import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Modal from "react-modal";
import PasswordStrengthBar from 'react-password-strength-bar';

import InputMask from "react-input-mask";

interface FormModel {
  nome: string;
  email: string;
  senha: string;
  confirmarSenha: string;
  imagem?: File;
}

Modal.setAppElement('#root');

export default function App() {
  const notify = () => {
    toast.success("Plataforma cadastrada", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  const [loading, setLoading] = React.useState<boolean>(false);
  const [modalIsOpen, setIsOpen] = React.useState<boolean>(false);

  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="App">
      <h1>formik + yup</h1>
      <Formik<FormModel>
        initialValues={{
          email: "",
          nome: "",
          senha: "",
          confirmarSenha: "",
          imagem: undefined,
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          setLoading(true);

          //fake api call
          setTimeout(() => {
            setLoading(false);
            toast.success('Deu certo!');
            //alert(JSON.stringify(values));
            actions.resetForm();
          }, 2000);
        }}
        onReset={() => {
          setTimeout(() => {
            //CRIAR UM MODAL PARA DIRECIONAR AO CADASTRO E PLANOS
            setIsOpen(true);
          }, 3000);
        }}
      >
        {({
          handleSubmit,
          values,
          handleChange,
          handleBlur,
          errors,
          touched,
          setFieldValue,
        }) => (
          <form action="" onSubmit={handleSubmit}>

            <CustomInput
              label="Nome"
              id="nome"
              name="nome"
              placeholder="Seu nome"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nome}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput
              label="Email"
              id="email"
              name="email"
              placeholder="Seu email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput
              label="Senha"
              id="senha"
              name="senha"
              placeholder="Sua senha"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.senha}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <PasswordStrengthBar
              scoreWords={['Muito fraca', 'Fraca', 'Ok', 'Bom', 'Forte']}
              password={values.senha}
              shortScoreWord='Senha muito curta'
            />

            <CustomInput
              label="Repita a senha novamente"
              id="confirmarSenha"
              name="confirmarSenha"
              placeholder="Sua senha"
              type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmarSenha}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput
              label="Selecionar imagem"
              id="imagem"
              name="imagem"
              type="file"
              accept="image/*"
              value={undefined}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files !== null && e.target.files !== undefined) {
                  setFieldValue("imagem", e.target.files);
                }
              }}
            />
            <PreviewImage image={values.imagem} />

            <ButtonLoader disabled={loading} type="submit">
              {loading ? (
                <div className="lds-ring">
                  <div></div>
                </div>
              ) : (
                <>Enviar</>
              )}
            </ButtonLoader>
          </form>
        )}
      </Formik>
      <ToastContainer
        position="top-right"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <ToastContainer />

      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <h2>Modal</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero tenetur perspiciatis ex dolorem delectus suscipit quasi iusto esse quisquam consequuntur quidem itaque, dignissimos molestiae? Nobis ab quod id autem rerum?</p>
        <button type="button" onClick={closeModal}>Close Modal</button>
      </Modal>
    </div>
  );
}
