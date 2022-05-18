import { Project } from "./../models/project";
import { Component } from "../components/base-components";
import { Autobind } from "../decorators/autobind";
import { Draggable } from "../models/drag-drop";

// Project Item Class
export class ProjectItem
  extends Component<HTMLUListElement, HTMLLIElement>
  implements Draggable
{
  constructor(hostId: string, private project: Project) {
    super("single-project", hostId, false, project.id);

    this.configure();
    this.renderContent();
  }

  @Autobind
  dragStartHandler(event: DragEvent): void {
    event.dataTransfer!.setData("text/plain", this.project.id);
    event.dataTransfer!.effectAllowed = "move";
  }

  dragEndHandler(_: DragEvent): void {
    console.log("DragEnd");
  }

  configure(): void {
    // this.element.classList.add("project");
    this.element.addEventListener("dragstart", this.dragStartHandler);
    this.element.addEventListener("dragend", this.dragEndHandler);
  }

  renderContent(): void {
    this.element.querySelector("h2")!.textContent = this.project.title;
    this.element.querySelector("h3")!.textContent = this.personString;
    this.element.querySelector("p")!.textContent = this.project.description;
  }

  get personString() {
    if (this.project.people === 1) {
      return "One Person assigned";
    } else {
      return `${this.project.people} People assigned`;
    }
  }
}
