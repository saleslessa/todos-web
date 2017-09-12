import { Component, OnDestroy } from '@angular/core';

import { MessageService } from './services/message.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent implements OnDestroy{
    title = 'List of Todos activities';
    message: any;
    Subscription: Subscription;

    constructor(private messageService: MessageService) {
        this.Subscription = this.messageService.getMessage()
            .subscribe(message => { this.message = message; });
    }

    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.Subscription.unsubscribe();
    }
}

