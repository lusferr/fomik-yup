import { Formik } from 'formik';
import React from 'react';
import './App.css';
import {formSchema} from './schemas';

interface FormModel {
  nome: string,
  email: string,
  senha: string,
  confirmarSenha: string
}

export default function App() {
  return (
    <div className="App">
      <h1>formik + yup</h1>
      <Formik<FormModel>
        initialValues={{
          email: '',
          nome: '',
          senha: '',
          confirmarSenha: ''
        }}
        validationSchema = {formSchema}
        onSubmit={(values, actions) => {
          alert(JSON.stringify(values))
          console.log(values)
          console.log(actions)
          
          actions.resetForm()
        }}
      >
        {({ handleSubmit, values, handleChange, handleBlur, errors, touched, isSubmitting }) => (
          <form action="" onSubmit={handleSubmit}>

            <label htmlFor="nome">Nome</label>
            <input id='nome' name='nome' type="text" placeholder='Seu nome'
              value={values.nome}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.nome && touched.nome ? "input-error" : ""}
            />
            {errors.nome && touched.nome && <p>{errors.nome}</p>}

            <label htmlFor="email">Email</label>
            <input id='email' name='email' type="email" placeholder='Seu email'
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.email && touched.email ? "input-error" : ""}
            />
            {errors.email && touched.email && <p>{errors.email}</p>}

            <label htmlFor="senha">Senha</label>
            <input id='senha' name='senha' type="password" placeholder='Sua senha'
              value={values.senha}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.senha && touched.senha ? "input-error" : ""}
            />
            {errors.senha && touched.senha && <p>{errors.senha}</p>}

            <label htmlFor="confirmarSenha">Repita a senha novamente</label>
            <input id='confirmarSenha' name='confirmarSenha' type="password" placeholder='Digite novamente sua senha'
              value={values.confirmarSenha}
              onChange={handleChange}
              onBlur={handleBlur}
              className={errors.confirmarSenha && touched.confirmarSenha ? "input-error" : ""}
            />
            {errors.confirmarSenha && touched.confirmarSenha && <p>{errors.confirmarSenha}</p>}

            <button disabled={isSubmitting} type='submit'>Enviar</button>
          </form>
        )}
      </Formik>
    </div>
  );
}


