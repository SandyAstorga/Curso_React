/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import Form from "./Form";
import Tarea from "./Tarea"
import '../styles/ListaTareas.css'

const ListaTareas = () => {

  const [ tareas, setTareas ] = useState([]);

  const agregarTarea = tarea => {
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      const tareasActualizadas = [tarea, ...tareas];
      setTareas(tareasActualizadas);
      guardarTareasEnLocalStorage(tareasActualizadas);
    }
  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter(tarea => tarea.id !== id);
    setTareas(tareasActualizadas);
    guardarTareasEnLocalStorage(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map((tarea) => {  if (tarea.id === id) {
      tarea.completada = !tarea.completada;
    }
    return tarea
    });
    setTareas(tareasActualizadas);
    guardarTareasEnLocalStorage(tareasActualizadas);
  };

  const guardarTareasEnLocalStorage = (tareas) => {
    localStorage.setItem('tareas', JSON.stringify(tareas));
  };

  useEffect(() => {
    const tareasGuardadas = localStorage.getItem('tareas');
    if (tareasGuardadas) {
      setTareas(JSON.parse(tareasGuardadas));
    }
  }, []);
  
  return (
    <>
      <Form 
        onSubmit={agregarTarea}
      />
      <div className="tareas-lista-contenedor">
        {
          tareas.map((tarea) =>
            <Tarea
                key={tarea.id}
                id={tarea.id}
                texto={tarea.texto}
                completada={tarea.completada}
                eliminarTarea={eliminarTarea}
                completarTarea={completarTarea}
            />
          )}
      </div>
    </>
  )
}

export default ListaTareas;
