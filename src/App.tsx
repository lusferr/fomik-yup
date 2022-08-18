import { Field, Formik } from 'formik';
import React from 'react';
import './App.css';
import CustomInput from './components/customInput';
import { formSchema } from './schemas';

interface FormModel {
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string,
  imagem?: File 
}

export default function App() {


  return (
    <div className="App">
      <h1>formik + yup</h1>
      <Formik<FormModel>
        initialValues={{
          email: 'aa@email.com',
          nome: 'aaaaa',
          senha: 'Aa12345',
          confirmarSenha: 'Aa12345',
          imagem: undefined
        }}
        validationSchema={formSchema}
        onSubmit={(values, actions) => {
          //alert(JSON.stringify(values))
          console.log(values)
          alert(values.imagem)

          //actions.resetForm()
        }}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors, touched, setFieldValue }) => (
          <form action="" onSubmit={handleSubmit}>

            <CustomInput label='Nome' id='nome' name='nome' placeholder='Seu nome'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.nome}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput label='Email' id='email' name='email' placeholder='Seu email'
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput label='Senha' id='senha' name='senha' placeholder='Sua senha' type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.senha}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput label='Repita a senha novamente' id='confirmarSenha' name='confirmarSenha' placeholder='Sua senha' type="password"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.confirmarSenha}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />

            <CustomInput
              label='Selecionar imagem'
              id='imagem'
              name='imagem'
              type="file"
              value={undefined}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                if (e.target.files != null && e.target.files != undefined) {
                  setFieldValue('imagem', e.target.files[0])
                }
              }}
            />

          

            <button type='submit'>Enviar</button>
          </form>
        )}
      </Formik>
    </div>
  );
}


