import { useState } from "react";

import Section from "../UI/Section";
import TaskForm from "./TaskForm";
import useFetch from "../../hooks/use-fetch";

const NewTask = (props) => {
  const { isLoading, error, sendRequest: postTasks } = useFetch();

  const enterTaskHandler = async (taskText) => {
    const requestConfig = {
      url: "https://reactdata-ccb9d-default-rtdb.firebaseio.com/tasks.json",
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: { text: taskText },
    };

    postTasks(requestConfig, (data) => {
      const generatedId = data.name;
      const createdTask = { id: generatedId, text: taskText };

      props.onAddTask(createdTask);
    });
  };

  return (
    <Section>
      <TaskForm onEnterTask={enterTaskHandler} loading={isLoading} />
      {error && <p>{error}</p>}
    </Section>
  );
};

export default NewTask;
