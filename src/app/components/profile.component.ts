import { Component } from '@angular/core';
import { GithubService } from '../services/github.service';
import 'rxjs/add/operator/map';

@Component({
  selector: 'profile',
  templateUrl: `app/components/profile.component.html`,
})

export class ProfileComponent  {

  // Object containing user details
  public user: Object = [];

  // Object containing users repos
  public repos: Object = [];

  // Username
  public username: String = null;

  constructor(private _githubService:GithubService) {
    this.user = null;
  }

  searchUser() {
    // Update username
    this._githubService.updateUser(this.username);

    this._githubService.getUser().subscribe(user => {
      this.user = user;
    });

    this._githubService.getRepos().subscribe(repos => {
      this.repos = repos;
    });
  }

}
