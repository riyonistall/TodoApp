import { useState } from "react";

import {
  Button,
  FormControl,
  Flex,
  Heading,
  Input,
  Stack,
  Text,
  Badge,
  useColorModeValue,
  Image,
} from "@chakra-ui/react";

export default function Todos() {
  const [todos, setTodos] = useState([]);

  const [title, setTitle] = useState("");

  const handleAdd = () => {
    setTodos([...todos, { id: Date.now(), title: title, completed: false }]);
    setTitle("");
  };

  const handleToggle = (id) => {
    let newTodoList = todos.filter((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });

    setTodos(newTodoList);
  };

  const handleClearCompleted = () => {
    let newTodoList = todos.filter((todo) => {
      if (!todo.completed) return todo;
    });

    setTodos(newTodoList);
  };
  return (
    <Flex
      className="styles."
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("pink")}
    >
      <Stack
        bg={useColorModeValue("pink")}

      >
        <Heading lineHeight={1.1} fontSize={{ base: "2xl", "lg": "3xl" }} color={useColorModeValue("white")}>
          Create a Todo ({todos.length})
        </Heading>
        <Text
          fontSize={{ base: "sm", sm: "md" }}
          color={useColorModeValue("gray.800", "gray.400")}
        >
          Write things here so you don't forget
        </Text>
        <FormControl id="email">
          <Input
            placeholder="Do Homework"
            _placeholder={{ color: "gray.500" }}
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6}>
          <Button
            bg={"blue.400"}
            color={"white"}
            _hover={{
              bg: "blue.500",
            }}
            onClick={() => handleAdd()}
            disabled={title.length == 0}
          >
            Add Todo
          </Button>
        </Stack>
        <Stack>
          <ul>
            {todos.map((todo) => (
              <li style={{ margin: "5px" }}>
                {todo.title}-{" "}
                <Badge colorScheme={todo.completed ? "green" : "red"}>
                  {todo.completed ? "completed" : "incomplete"}
                </Badge>
                <Button
                  marginX={"5"}
                  size={"sm"}
                  onClick={() => handleToggle(todo.id)}
                >
                  Toggle
                </Button>
              </li>
            ))}
          </ul>

          <Button onClick={() => handleClearCompleted()}>
            {" "}
            Clear All Completed
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
