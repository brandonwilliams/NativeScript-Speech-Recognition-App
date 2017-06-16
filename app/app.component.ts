import { Component } from "@angular/core";
import { SpeechRecognition, SpeechRecognitionTranscription, SpeechRecognitionOptions } from 'nativescript-speech-recognition';

@Component({
  selector: "my-app",
  template: `
  <ActionBar class="action-bar" title="Speech Recognition App"></ActionBar>
  <!-- Your UI components go here -->
  <DockLayout stretchLastChild="false">
  <StackLayout dock="top" class="page" marginRight="12" marginLeft="12">
  <Button class="btn btn-primary btn-rounded-sm" (tap)="triggerListening()" text="START TALKING!"></Button>
  <Button class="btn btn-primary btn-danger btn-rounded-sm" (tap)="stopListening()" text="STOP"></Button>
  <Label text="YOUR TEXT:" class="label" marginBottom="20" marginTop="20"></Label>
  <ScrollView>
    <Label class="yourText" textWrap="true" text="{{yourText}}"></Label>
  </ScrollView>

  </StackLayout>

  <Label dock="bottom" class="center" text="This app was created by Brandon Williams"></Label>
  </DockLayout>
  `
})
export class AppComponent {
  options: SpeechRecognitionOptions;
  yourText: string = "";

  constructor(private speech: SpeechRecognition){
    this.options = {
      onResult: (transcription: SpeechRecognitionTranscription) => {
        this.yourText = `${transcription.text}`;
        console.log(`${transcription.text}`);
        console.log(`${transcription.finished}`);
      }
    }
  }

  triggerListening() {
    this.yourText = "";
    this.speech.available().then(result => {
      result ? this.startListening() : alert('Speech Recognition not available!');
    }, error => {
      console.error(error);
    })
  }

  startListening() {
    this.speech.startListening(this.options).then(() => {
      console.log("Started Listening");
    }, error => {
      console.error(error);
    })
  }

  stopListening() {
    this.speech.stopListening().then(() => {
      console.log("Stopped listening to the user.");
    }, error => {
      console.error(error);
    })
  }
}
