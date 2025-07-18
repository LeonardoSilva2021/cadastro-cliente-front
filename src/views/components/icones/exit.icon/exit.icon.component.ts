import { Component, Input } from "@angular/core";
import { DefaultIconComponent } from "../default.icon/default.icon.component";
import { CommonModule } from "@angular/common";
import { DefaultIconComponentProps } from "../default.icon/default.icon.component.props";
import { ExitIconComponentProps } from "./exit.icon.component.props";
import { v4 as uuidv4 } from 'uuid';

@Component({
    selector: 'exit-icon-component',
    imports: [DefaultIconComponent, CommonModule],
    templateUrl: './exit.icon.component.html',
})

export class ExitIconComponent {

    @Input() props!: ExitIconComponentProps; 

    get propsDefault(): DefaultIconComponentProps {
        return {
            elements: [
                {
                    id: uuidv4(),
                    tag: 'path',
                    attrs: {
                        d: "M13 2H18C20.2091 2 22 3.79086 22 6V18C22 20.2091 20.2091 22 18 22H13C10.7909 22 9 20.2091 9 18V16V12.75L15.1893 12.75L13.4697 14.4697C13.1768 14.7626 13.1768 15.2374 13.4697 15.5303C13.7626 15.8232 14.2374 15.8232 14.5303 15.5303L16.8232 13.2374C17.5066 12.554 17.5066 11.446 16.8232 10.7626L14.5303 8.46967C14.2374 8.17678 13.7626 8.17678 13.4697 8.46967C13.1768 8.76256 13.1768 9.23744 13.4697 9.53033L15.1893 11.25L9 11.25V8V6C9 3.79086 10.7909 2 13 2ZM9 11.25H4C3.58579 11.25 3.25 11.5858 3.25 12C3.25 12.4142 3.58579 12.75 4 12.75H9V11.25Z"
                    }
                }
            ],
            classname: this.props.classname,
            fill: this.props.fill,
        }
    }
}