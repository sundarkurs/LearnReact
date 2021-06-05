import React, { useEffect, useState } from "react";

import Tasks from "../Tasks/Tasks";
import NewTask from "../NewTask/NewTask";
import useFetch from "../../hooks/use-fetch";

const TasksRoot = () => {
  const [tasks, setTasks] = useState([]);
  const { isLoading, error, sendRequest: fetchTasks } = useFetch();

  useEffect(() => {
    const applyMapping = (data) => {
      const loadedTasks = [];

      for (const taskKey in data) {
        loadedTasks.push({ id: taskKey, text: data[taskKey].text });
      }
      setTasks(loadedTasks);
    };

    const requestConfig = {
      url: "https://reactdata-ccb9d-default-rtdb.firebaseio.com/tasks.json",
    };
    fetchTasks(requestConfig, applyMapping);
  }, []);

  const taskAddHandler = (task) => {
    setTasks((prevTasks) => prevTasks.concat(task));
  };

  return (
    <React.Fragment>
      <NewTask onAddTask={taskAddHandler} />
      <Tasks
        items={tasks}
        loading={isLoading}
        error={error}
        onFetch={fetchTasks}
      />
    </React.Fragment>
  );
};

export default TasksRoot;
