"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var nativescript_speech_recognition_1 = require("nativescript-speech-recognition");
var AppComponent = (function () {
    function AppComponent(speech) {
        var _this = this;
        this.speech = speech;
        this.yourText = "";
        this.options = {
            onResult: function (transcription) {
                _this.yourText = "" + transcription.text;
                console.log("" + transcription.text);
                console.log("" + transcription.finished);
            }
        };
    }
    AppComponent.prototype.triggerListening = function () {
        var _this = this;
        this.yourText = "";
        this.speech.available().then(function (result) {
            result ? _this.startListening() : alert('Speech Recognition not available!');
        }, function (error) {
            console.error(error);
        });
    };
    AppComponent.prototype.startListening = function () {
        this.speech.startListening(this.options).then(function () {
            console.log("Started Listening");
        }, function (error) {
            console.error(error);
        });
    };
    AppComponent.prototype.stopListening = function () {
        this.speech.stopListening().then(function () {
            console.log("Stopped listening to the user.");
        }, function (error) {
            console.error(error);
        });
    };
    return AppComponent;
}());
AppComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        template: "\n  <ActionBar class=\"action-bar\" title=\"Speech Recognition App\"></ActionBar>\n  <!-- Your UI components go here -->\n  <DockLayout stretchLastChild=\"false\">\n  <StackLayout dock=\"top\" class=\"page\" marginRight=\"12\" marginLeft=\"12\">\n  <Button class=\"btn btn-primary btn-rounded-sm\" (tap)=\"triggerListening()\" text=\"START TALKING!\"></Button>\n  <Button class=\"btn btn-primary btn-danger btn-rounded-sm\" (tap)=\"stopListening()\" text=\"STOP\"></Button>\n  <Label text=\"YOUR TEXT:\" class=\"label\" marginBottom=\"20\" marginTop=\"20\"></Label>\n  <ScrollView>\n    <Label class=\"yourText\" textWrap=\"true\" text=\"{{yourText}}\"></Label>\n  </ScrollView>\n\n  </StackLayout>\n\n  <Label dock=\"bottom\" class=\"center\" text=\"This app was created by Brandon Williams\"></Label>\n  </DockLayout>\n  "
    }),
    __metadata("design:paramtypes", [nativescript_speech_recognition_1.SpeechRecognition])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsbUZBQThIO0FBc0I5SCxJQUFhLFlBQVk7SUFJdkIsc0JBQW9CLE1BQXlCO1FBQTdDLGlCQVFDO1FBUm1CLFdBQU0sR0FBTixNQUFNLENBQW1CO1FBRjdDLGFBQVEsR0FBVyxFQUFFLENBQUM7UUFHcEIsSUFBSSxDQUFDLE9BQU8sR0FBRztZQUNiLFFBQVEsRUFBRSxVQUFDLGFBQTZDO2dCQUN0RCxLQUFJLENBQUMsUUFBUSxHQUFHLEtBQUcsYUFBYSxDQUFDLElBQU0sQ0FBQztnQkFDeEMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLGFBQWEsQ0FBQyxJQUFNLENBQUMsQ0FBQztnQkFDckMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxLQUFHLGFBQWEsQ0FBQyxRQUFVLENBQUMsQ0FBQztZQUMzQyxDQUFDO1NBQ0YsQ0FBQTtJQUNILENBQUM7SUFFRCx1Q0FBZ0IsR0FBaEI7UUFBQSxpQkFPQztRQU5DLElBQUksQ0FBQyxRQUFRLEdBQUcsRUFBRSxDQUFDO1FBQ25CLElBQUksQ0FBQyxNQUFNLENBQUMsU0FBUyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsTUFBTTtZQUNqQyxNQUFNLEdBQUcsS0FBSSxDQUFDLGNBQWMsRUFBRSxHQUFHLEtBQUssQ0FBQyxtQ0FBbUMsQ0FBQyxDQUFDO1FBQzlFLENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUVELHFDQUFjLEdBQWQ7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxDQUFDO1lBQzVDLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUNuQyxDQUFDLEVBQUUsVUFBQSxLQUFLO1lBQ04sT0FBTyxDQUFDLEtBQUssQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNKLENBQUM7SUFFRCxvQ0FBYSxHQUFiO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxhQUFhLEVBQUUsQ0FBQyxJQUFJLENBQUM7WUFDL0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ2hELENBQUMsRUFBRSxVQUFBLEtBQUs7WUFDTixPQUFPLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ0osQ0FBQztJQUNILG1CQUFDO0FBQUQsQ0FBQyxBQXRDRCxJQXNDQztBQXRDWSxZQUFZO0lBcEJ4QixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsUUFBUSxFQUFFLHl6QkFnQlQ7S0FDRixDQUFDO3FDQUs0QixtREFBaUI7R0FKbEMsWUFBWSxDQXNDeEI7QUF0Q1ksb0NBQVkiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgU3BlZWNoUmVjb2duaXRpb24sIFNwZWVjaFJlY29nbml0aW9uVHJhbnNjcmlwdGlvbiwgU3BlZWNoUmVjb2duaXRpb25PcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LXNwZWVjaC1yZWNvZ25pdGlvbic7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgdGVtcGxhdGU6IGBcbiAgPEFjdGlvbkJhciBjbGFzcz1cImFjdGlvbi1iYXJcIiB0aXRsZT1cIlNwZWVjaCBSZWNvZ25pdGlvbiBBcHBcIj48L0FjdGlvbkJhcj5cbiAgPCEtLSBZb3VyIFVJIGNvbXBvbmVudHMgZ28gaGVyZSAtLT5cbiAgPERvY2tMYXlvdXQgc3RyZXRjaExhc3RDaGlsZD1cImZhbHNlXCI+XG4gIDxTdGFja0xheW91dCBkb2NrPVwidG9wXCIgY2xhc3M9XCJwYWdlXCIgbWFyZ2luUmlnaHQ9XCIxMlwiIG1hcmdpbkxlZnQ9XCIxMlwiPlxuICA8QnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IGJ0bi1yb3VuZGVkLXNtXCIgKHRhcCk9XCJ0cmlnZ2VyTGlzdGVuaW5nKClcIiB0ZXh0PVwiU1RBUlQgVEFMS0lORyFcIj48L0J1dHRvbj5cbiAgPEJ1dHRvbiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBidG4tZGFuZ2VyIGJ0bi1yb3VuZGVkLXNtXCIgKHRhcCk9XCJzdG9wTGlzdGVuaW5nKClcIiB0ZXh0PVwiU1RPUFwiPjwvQnV0dG9uPlxuICA8TGFiZWwgdGV4dD1cIllPVVIgVEVYVDpcIiBjbGFzcz1cImxhYmVsXCIgbWFyZ2luQm90dG9tPVwiMjBcIiBtYXJnaW5Ub3A9XCIyMFwiPjwvTGFiZWw+XG4gIDxTY3JvbGxWaWV3PlxuICAgIDxMYWJlbCBjbGFzcz1cInlvdXJUZXh0XCIgdGV4dFdyYXA9XCJ0cnVlXCIgdGV4dD1cInt7eW91clRleHR9fVwiPjwvTGFiZWw+XG4gIDwvU2Nyb2xsVmlldz5cblxuICA8L1N0YWNrTGF5b3V0PlxuXG4gIDxMYWJlbCBkb2NrPVwiYm90dG9tXCIgY2xhc3M9XCJjZW50ZXJcIiB0ZXh0PVwiVGhpcyBhcHAgd2FzIGNyZWF0ZWQgYnkgQnJhbmRvbiBXaWxsaWFtc1wiPjwvTGFiZWw+XG4gIDwvRG9ja0xheW91dD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQge1xuICBvcHRpb25zOiBTcGVlY2hSZWNvZ25pdGlvbk9wdGlvbnM7XG4gIHlvdXJUZXh0OiBzdHJpbmcgPSBcIlwiO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc3BlZWNoOiBTcGVlY2hSZWNvZ25pdGlvbil7XG4gICAgdGhpcy5vcHRpb25zID0ge1xuICAgICAgb25SZXN1bHQ6ICh0cmFuc2NyaXB0aW9uOiBTcGVlY2hSZWNvZ25pdGlvblRyYW5zY3JpcHRpb24pID0+IHtcbiAgICAgICAgdGhpcy55b3VyVGV4dCA9IGAke3RyYW5zY3JpcHRpb24udGV4dH1gO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHt0cmFuc2NyaXB0aW9uLnRleHR9YCk7XG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RyYW5zY3JpcHRpb24uZmluaXNoZWR9YCk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgdHJpZ2dlckxpc3RlbmluZygpIHtcbiAgICB0aGlzLnlvdXJUZXh0ID0gXCJcIjtcbiAgICB0aGlzLnNwZWVjaC5hdmFpbGFibGUoKS50aGVuKHJlc3VsdCA9PiB7XG4gICAgICByZXN1bHQgPyB0aGlzLnN0YXJ0TGlzdGVuaW5nKCkgOiBhbGVydCgnU3BlZWNoIFJlY29nbml0aW9uIG5vdCBhdmFpbGFibGUhJyk7XG4gICAgfSwgZXJyb3IgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgfSlcbiAgfVxuXG4gIHN0YXJ0TGlzdGVuaW5nKCkge1xuICAgIHRoaXMuc3BlZWNoLnN0YXJ0TGlzdGVuaW5nKHRoaXMub3B0aW9ucykudGhlbigoKSA9PiB7XG4gICAgICBjb25zb2xlLmxvZyhcIlN0YXJ0ZWQgTGlzdGVuaW5nXCIpO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pXG4gIH1cblxuICBzdG9wTGlzdGVuaW5nKCkge1xuICAgIHRoaXMuc3BlZWNoLnN0b3BMaXN0ZW5pbmcoKS50aGVuKCgpID0+IHtcbiAgICAgIGNvbnNvbGUubG9nKFwiU3RvcHBlZCBsaXN0ZW5pbmcgdG8gdGhlIHVzZXIuXCIpO1xuICAgIH0sIGVycm9yID0+IHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgIH0pXG4gIH1cbn1cbiJdfQ==