from dataclasses import dataclass
from typing import List


@dataclass
class Task:
    task: str
    done: bool = False


class TodoList:
    def __init__(self) -> None:
        self.tasks: List[Task] = []

    def add_task(self, task: str) -> None:
        self.tasks.append(Task(task=task))
        print(f"Added: {task}")

    def view_tasks(self) -> None:
        if not self.tasks:
            print("No tasks found.")
            return

        print("\nTo-Do List:")
        for i, t in enumerate(self.tasks, start=1):
            status = "✔" if t.done else "✘"
            print(f"{i}. [{status}] {t.task}")

    def mark_done(self, index: int) -> None:
        if 1 <= index <= len(self.tasks):
            self.tasks[index - 1].done = True
            print(f"Marked task {index} as done.")
        else:
            print("Invalid task number.")

    def delete_task(self, index: int) -> None:
        if 1 <= index <= len(self.tasks):
            removed = self.tasks.pop(index - 1)
            print(f"Deleted: {removed.task}")
        else:
            print("Invalid task number.")


def main() -> None:
    todo = TodoList()

    while True:
        print("\n--- TO-DO MENU ---")
        print("1. Add task")
        print("2. View tasks")
        print("3. Mark task as done")
        print("4. Delete task")
        print("5. Exit")

        choice: str = input("Choose an option: ")

        if choice == "1":
            task: str = input("Enter task: ")
            todo.add_task(task)

        elif choice == "2":
            todo.view_tasks()

        elif choice == "3":
            todo.view_tasks()
            try:
                num: int = int(input("Task number to mark done: "))
                todo.mark_done(num)
            except ValueError:
                print("Please enter a valid number.")

        elif choice == "4":
            todo.view_tasks()
            try:
                num: int = int(input("Task number to delete: "))
                todo.delete_task(num)
            except ValueError:
                print("Please enter a valid number.")

        elif choice == "5":
            print("Goodbye!")
            break

        else:
            print("Invalid choice.")


if __name__ == "__main__":
    main()
