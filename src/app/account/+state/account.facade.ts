import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class AccountFacade {

    constructor(/**import account store here */) { }

    login(email: String, password: String) {
        //this.store.dispatch(new LoginRequest(email, password));
    }

    createAccount(name: String, email: String, password: String) {
        //this.store.dispatch(new CreateAccountRequest(name, email, password));
    }
}