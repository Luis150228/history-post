# RangelDev SocialNetwork 🚀

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)
![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=black)

Proyecto para crear una interfaz de publicación de red social con funcionalidades completas de creación y visualización
de posts.

## 📋 Requisitos Funcionales

### 🖊️ Sección de Publicación

- [x] Generación automática de ID único para cada post
- [x] Datos del autor (username, user_id, imagen de perfil)
- [x] Soporte para multimedia (imágenes) y enlaces externos
- [x] Sistema de metadatos con:
  - [x] Fecha de creación automática
  - [x] Fecha de actualización (cuando aplica)
- [x] Configuración de privacidad:
  - [x] Público
  - [x] Privado
  - [x] Solo amigos
  - [x] Personalizado (con listas de usuarios permitidos/bloqueados)

### 👁️ Sección de Visualización

- [x] Interacciones asíncronas con control de mutaciones:
  - [x] Likes
  - [x] Comentarios
  - [x] Vistas
  - [x] Compartir
- [x] Sistema de comentarios:
  - [x] ID único por comentario
  - [x] Soporte solo texto
  - [x] Datos del usuario (básicos)
  - [x] Fecha de publicación

## 🛠️ Tecnologías Utilizadas

- **Frontend**: React + TypeScript
- **Gestión de estado**: Zustand (para manejo de estado global)
- **Estilos**: Material UI
- **Formatos de fecha**: date-fns
- **Generación de IDs**: uuidv4

## 🧩 Estructura del Proyecto

/src |-- /components | |-- PostEditor.tsx # Componente de creación de posts | |-- PostViewer.tsx # Componente de
visualización | |-- CommentSection.tsx # Gestión de comentarios |-- /stores | |-- usePostStore.ts # Zustand store para
posts |-- /types | |-- socialTypes.ts # Tipos TypeScript (interfaces) |-- /utils | |-- postUtils.ts # Funciones
auxiliares
