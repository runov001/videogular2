var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('angular2/core');
var common_1 = require('angular2/common');
var videogular2_1 = require('videogular2/videogular2');
var SingleMediaPlayer = (function () {
    function SingleMediaPlayer() {
        this.controls = false;
        this.autoplay = false;
        this.loop = false;
        this.preload = 'auto';
        this.sources = [
            {
                src: "http://static.videogular.com/assets/videos/videogular.mp4",
                type: "video/mp4"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.ogg",
                type: "video/ogg"
            },
            {
                src: "http://static.videogular.com/assets/videos/videogular.webm",
                type: "video/webm"
            }
        ];
    }
    SingleMediaPlayer = __decorate([
        core_1.Component({
            selector: 'vg-demo',
            templateUrl: './src/single-media-player.html',
            directives: [
                videogular2_1.VgPlayer,
                videogular2_1.VgOverlayPlay,
                videogular2_1.VgControls,
                videogular2_1.VgPlayPause,
                videogular2_1.VgPlaybackButton,
                videogular2_1.VgScrubBar,
                videogular2_1.VgScrubBarCurrentTime,
                videogular2_1.VgScrubBarBufferingTime,
                videogular2_1.VgMute,
                videogular2_1.VgFullscreen,
                common_1.NgFor
            ]
        }), 
        __metadata('design:paramtypes', [])
    ], SingleMediaPlayer);
    return SingleMediaPlayer;
})();
exports.SingleMediaPlayer = SingleMediaPlayer;
//# sourceMappingURL=single-media-player.js.map