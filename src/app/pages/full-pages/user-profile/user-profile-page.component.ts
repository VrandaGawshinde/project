import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-user-profile-page',
    templateUrl: './user-profile-page.component.html',
    styleUrls: ['./user-profile-page.component.scss']
})

export class UserProfilePageComponent implements OnInit {

    //Variable Declaration
    currentPage: string = "About"
    user: {
        id: string;
        name: string;
        city: string;
        mobileNo: number;
        email: string;
        dob: string;
    };
    
    ngOnInit() {
        this.user = JSON.parse(localStorage.getItem('user'));
        console.log(this.user.name);
    }

    showPage(page: string) {
        this.currentPage = page;
    }
}