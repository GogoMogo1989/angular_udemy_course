import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styles: [
    `
      .online {
        background-color: blue;
      }
    `,
  ],
})
export class ServersComponent {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created';
  serverName = 'Tester';
  serverCreated: boolean = false;
  servers = ['Testserver', 'Testserver 2'];
  secretPassword: string = 'titkos';
  disabledValue: boolean = false;
  numberValue = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created!' + this.serverName;
  }

  onUpdateServerName(event: any) {
    this.serverName = event.target.value;
  }

  buttonClicked() {
    if (this.disabledValue === true) {
      this.disabledValue = false;
    } else {
      this.disabledValue = true;
    }
  }
}
