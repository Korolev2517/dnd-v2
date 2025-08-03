import { CreateCardBtn } from "./components/CreateCardBtn.tsx";
import {DndContext, useDroppable} from "@dnd-kit/core";
import { Draggable } from "@hello-pangea/dnd";
import { Droppable } from "@hello-pangea/dnd";

import "./App.css"
import "../node_modules/normalize.css"


export default function App() {

    function Droppable(props: any) {
        const {isOver, setNodeRef} = useDroppable({
            id: 'droppable',
        });
        const style = {
            color: isOver ? 'green' : undefined,
        };
    }

    return (
        <div className="main">
            <div className="fields">
                <DndContext >
                    <div className="field">
                        <div className="start-field"
                             ref={setNodeRef}
                             style={style}>
                            {props.children}
                            <CreateCardBtn />
                        </div>
                    </div>
                    <div className="field">
                        <h2>To-do</h2>
                        <div className="todo-field"></div>
                    </div>
                    <div className="field">
                        <h2>In progress</h2>
                        <div className="in-progress-field"></div>
                    </div>
                    <div className="field">
                        <h2>Done</h2>
                        <div className="done-field"></div>
                    </div>
                </DndContext>
            </div>
        </div>
    )
}

