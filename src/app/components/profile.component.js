"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var github_service_1 = require("../services/github.service");
require("rxjs/add/operator/map");
var ProfileComponent = (function () {
    function ProfileComponent(_githubService) {
        this._githubService = _githubService;
        // Object containing user details
        this.user = [];
        // Object containing users repos
        this.repos = [];
        // Username
        this.username = null;
        this.user = null;
    }
    ProfileComponent.prototype.searchUser = function () {
        var _this = this;
        // Update username
        this._githubService.updateUser(this.username);
        this._githubService.getUser().subscribe(function (user) {
            _this.user = user;
        });
        this._githubService.getRepos().subscribe(function (repos) {
            _this.repos = repos;
        });
    };
    return ProfileComponent;
}());
ProfileComponent = __decorate([
    core_1.Component({
        selector: 'profile',
        templateUrl: "app/components/profile.component.html",
    }),
    __metadata("design:paramtypes", [github_service_1.GithubService])
], ProfileComponent);
exports.ProfileComponent = ProfileComponent;
//# sourceMappingURL=profile.component.js.map