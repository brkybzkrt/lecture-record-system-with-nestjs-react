import React, { Component } from 'react';
import { TabMenu } from 'primereact/tabmenu';

export class TabMenuDemo extends Component {

    constructor(props) {
        super(props);

        this.items =  [
            {label: 'Home', icon: 'pi pi-fw pi-home'},
            {label: 'Calendar', icon: 'pi pi-fw pi-calendar'},
            {label: 'Edit', icon: 'pi pi-fw pi-pencil'},
            {label: 'Documentation', icon: 'pi pi-fw pi-file'},
            {label: 'Settings', icon: 'pi pi-fw pi-cog'}
        ];
    }

    render() {
        return (
            <div>
                <div className="card">
                    <TabMenu model={this.items} />
                </div>
            </div>
        );
    }
}