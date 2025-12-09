# 🌐 Portafolio Personal – Berkan Beyhanov Raimov

Este proyecto es un **portafolio personal** desarrollado en React durante el curso de 2º de DAW.  
Incluye una presentación profesional, un listado de proyectos, una página de contacto y una sección de newsletter.

## 🚀 Demo en producción

🔗 **URL en Netlify:** [berkan-portafolio.netlify.app](https://berkan-portafolio.netlify.app)

---

## 🚀 Tecnologías utilizadas

- **React (Vite)**
- **JavaScript (ES6+)**
- **useState**, **useEffect**
- **useImmer** (para manejo inmutable del estado)
- **HTML5 / CSS3**
- **React Icons**
- **Git + GitHub**

---

## ⚛️ Hooks utilizados

### ✔ **useState**
Usado para:
- Tema claro/oscuro  
- Lista de proyectos  
- Estado del newsletter  
- Control de carga y errores  

### ✔ **useEffect**
Utilizado para:
- Cargar datos desde `data.json`
- Actualizar el título de la página
- Simular el contador de visitas

### ✔ **useImmer**
Usado para actualizar el objeto `perfil` de forma inmutable:
```js
actualizarPerfil((draft) => {
  draft.visitas = (draft.visitas ?? 0) + 1;
});
```

---

## 📌 Funcionalidades principales

### 🧑‍💼 1. Landing Page
Presentación con nombre, rol, foto, enlaces y modo claro/oscuro.

### 💻 2. Proyectos realizados
Renderizados dinámicamente desde `data.json`.

### ✉️ 3. Página de contacto
Formulario con validación (`required`).

### 📰 4. Newsletter
Formulario para suscribirse con email y ejemplo que se enviará.

---

## 🛠️ Instalación y ejecución

### 1️⃣ Clonar repositorio
```bash
git clone https://github.com/tu-usuario/tu-repo.git
```

### 2️⃣ Instalar dependencias
```bash
npm install
```

### 3️⃣ Ejecutar en modo desarrollo
```bash
npm run dev
```

---

## 🎯 Objetivos del proyecto
Este proyecto cumple los requisitos del módulo:

✔ Landing page  
✔ Página de proyectos  
✔ Página de contacto  
✔ Newsletter  
✔ Uso de **React**, **useState**, **useEffect**, **useImmer**  
✔ Código estructurado y modular  

---

## ✨ Autor

**Berkan Beyhanov Raimov**  
Estudiante de 2º DAW – Palma de Mallorca  
GitHub: https://github.com/berkandevv  
LinkedIn: https://www.linkedin.com/in/berkan-raimov-b4876a246/

---