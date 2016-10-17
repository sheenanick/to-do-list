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
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.favoriteBand = 'Ani DiFranco';
        this.favoritePainter = 'Van Gogh';
        this.slicesOfPie = 3;
        this.favoriteAlbum = new Album("Disintegration", "The Cure", 1989);
        this.favoritePies = ["Apple", "Banana Cream", "Blackberry"];
        this.albums = [
            new Album("Pulse", "Pink Floyd", 1995),
            new Album("Funhouse", "The Stooges", 1970),
            new Album("Twilight of the Thunder God", "Amon Amarth", 2008),
            new Album("Dilate", "Ani DiFranco", 1996),
            new Album("Chopin - Complete Nocturnes", "Brigitte Engerer", 2015),
            new Album("Axis Bold As Love", "The Jimi Hendrix Experience", 1967)
        ];
    }
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            template: "\n  <div class=\"container\">\n    <h1>My First Angular 2 App</h1>\n    <h3>One of my favorite bands is: {{ favoriteBand }}</h3>\n    <p>If I had to choose a favorite painter it would be: {{ favoritePainter }}</p>\n    <p>The number of slices of pie I would like is {{ slicesOfPie }}</p>\n    <h3>One of my favorite albums is: </h3>\n    <p>{{ favoriteAlbum.title }}</p>\n    <p>By {{ favoriteAlbum.artist }}</p>\n    <p>Released in {{ favoriteAlbum.released }}</p>\n    <h3>Here are my favorite pies!</h3>\n    <div class=\"pie\" *ngFor=\"let currentPie of favoritePies\">\n      <p>{{currentPie}}</p>\n    </div>\n    <h3>Here are my favorite albums!</h3>\n    <div class=\"album\" *ngFor=\"let album of albums\">\n      <p>{{album.title}}</p>\n      <p>By {{album.artist}}</p>\n      <p>Released in {{album.released}}</p>\n    </div>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
var Album = (function () {
    function Album(title, artist, released) {
        this.title = title;
        this.artist = artist;
        this.released = released;
    }
    return Album;
}());
exports.Album = Album;
//# sourceMappingURL=app.component.js.map